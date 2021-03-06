import React, { useContext, useEffect, useState } from 'react';
import { Alert, Linking, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import Geolocation from 'react-native-geolocation-service';

const { WEATHER_API_KEY } = process.env;
import api from '../../services/api';
import WeatherData from 'src/dtos/WeatherData';
import { Load } from '@components/Load';
import { Switcher } from '@components/Switcher';
import { MainCard } from '@components/MainCard';
import { ForecastCard } from '@components/ForecastCard';
import {
  Container,
  Header,
  Refresh,
  Title,
  Forecast,
  PeriodView,
  ForecastList,
} from './styles';

export function Home() {
  const [locationCoords, setLocationCoords] = useState<Geolocation.GeoPosition | null>(null);
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [loadingData, setLoadingData] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const { colors } = useContext(ThemeContext);

  //Permissões
  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Não foi possível abrir as configurações');
      });
    }
    const status = await Geolocation.requestAuthorization('whenInUse');
    if (status === 'granted') {
      return true;
    }
    if (status === 'denied') {
      Alert.alert('Permissão negada');
    }
    if (status === 'disabled') {
      Alert.alert(
        'Turn on Location Services to allow Climaty to determine your location.',
        '',
        [
          { text: 'Ir para configurações', onPress: openSetting },
          { text: "Não usar localização", onPress: () => { } },
        ],
      );
    }
    return false;
  }

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }
    //android permissions
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }
    return false;
  }

  //localização atual do dispositivo
  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();
    if (!hasPermission) {
      return;
    }
    Geolocation.getCurrentPosition(position => {
      console.log(position);
      setLocationCoords(position);
    }, error => {
      Alert.alert(`Code ${error.code}`, error.message);
      setLocationCoords(null);
      console.log("Erro: ", error);
    }, {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      timeout: 20000,
      maximumAge: 10000,
      distanceFilter: 0,
    });
  }

  //carregando dados da api
  async function LoadWeatherData() {
    setLoadingData(true);
    try {
      const { data } = await api.get(
        `/weather?lat=${locationCoords?.coords?.latitude}&lon=${locationCoords?.coords?.longitude}&appid=${WEATHER_API_KEY}&units=metric&lang=pt_br`,
      );
      setWeatherData(data);
      //console.log("DADOS ===", data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro de conexão', 'Verifique sua conexão com a internet e tente novamente!');
    }
    setLoadingData(false);
  }

  async function ConvertTimestampToHour() {
    const convertedSunrise = await new Date((weatherData?.sys.sunrise) * 1000);
    const convertedSunset = await new Date((weatherData?.sys.sunset) * 1000);
    const sunriseHour = `${convertedSunrise.getHours()}:${convertedSunrise.getMinutes() < 10 ? "0" + convertedSunrise.getMinutes() : convertedSunrise.getMinutes()}`;
    const sunsetHour = `${convertedSunset.getHours()}:${convertedSunset.getMinutes() < 10 ? "0" + convertedSunset.getMinutes() : convertedSunset.getMinutes()}`;
    setSunrise(sunriseHour.toLocaleString());
    setSunset(sunsetHour.toLocaleString());
  }

  useEffect(() => {
    async function LocationPermission() {
      if (await hasLocationPermission()) {
        getLocation();
      }
    }
    LocationPermission();
  }, []);

  useEffect(() => {
    if (locationCoords?.coords?.latitude && locationCoords?.coords?.longitude) {
      LoadWeatherData();
      ConvertTimestampToHour();
    }
  }, [locationCoords]);

  return (
    <Container>
      <Header>
        <Refresh onPress={LoadWeatherData}>
          <MaterialIcons name="sync" size={32} color={colors.text} />
        </Refresh>
        {
          !loadingData && weatherData &&
          <Title>Sua localização</Title>
        }
        <Switcher />
      </Header>
      {
        loadingData ? <Load /> : (
          <>
            <MainCard
              name={weatherData?.name}
              country={weatherData?.sys.country}
              description={weatherData?.weather[0].description}
              icon={weatherData?.weather[0].icon}
              temp={weatherData?.main.temp.toFixed(0)}
              temp_min={weatherData?.main.temp_min.toFixed(0)}
              temp_max={weatherData?.main.temp_max.toFixed(0)}
              windSpeed={weatherData?.wind.speed}
              humidity={weatherData?.main.humidity}
            />
            <Forecast>
              <PeriodView>
                <Entypo name="stopwatch" size={20} color={colors.text} />
                <Title>Períodos</Title>
              </PeriodView>
              <ForecastList>
                <ForecastCard title='Nascer do Sol' icon='sunrise' hour={sunrise} />
                <ForecastCard title='Pôr do Sol' icon='sunset' hour={sunset} />
              </ForecastList>
            </Forecast>
          </>
        )}
    </Container>
  );
}
