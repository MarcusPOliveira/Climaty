import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

const { WEATHER_API_KEY } = process.env;
import api from '../../services/api';
import WeatherData from 'src/dtos/WeatherData';
import { Switcher } from '@components/Switcher';
import { SearchBar } from '@components/SearchBar';
import { MainCard } from '@components/MainCard';
import { ForecastCard } from '@components/ForecastCard';
import {
  Container,
  Header,
  Title,
  SearchView,
  Forecast,
  PeriodView,
  ForecastList,
} from './styles';
import { Load } from '@components/Load';
import { useFocusEffect } from '@react-navigation/native';

export function Search() {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loadingData, setLoadingData] = useState(false);
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');

  const { title, colors } = useContext(ThemeContext);

  async function fetchCityData(cityName: string) {
    setLoadingData(true);
    try {
      const { data } = await api.get(
        `/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric&lang=pt_br`,
      );
      setWeatherData(data);
      console.log("DADOS ===", data);
    } catch (error) {
      console.log(error);
    }
    setLoadingData(false);
  }

  async function handleSearchCity() {
    fetchCityData(search);
  }

  function handleClear() {
    setSearch('');
    fetchCityData('');
  }

  async function ConvertTimestampToHour() {
    const convertedSunrise = await new Date((weatherData?.sys.sunrise) * 1000);
    const convertedSunset = await new Date((weatherData?.sys.sunset) * 1000);
    const sunriseHour = `${convertedSunrise.getHours()}:${convertedSunrise.getMinutes() < 10 ? "0" + convertedSunrise.getMinutes() : convertedSunrise.getMinutes()}`;
    const sunsetHour = `${convertedSunset.getHours()}:${convertedSunset.getMinutes() < 10 ? "0" + convertedSunset.getMinutes() : convertedSunset.getMinutes()}`;
    setSunrise(sunriseHour);
    setSunset(sunsetHour);
  }

  useFocusEffect(
    useCallback(() => {
      fetchCityData(search);
      ConvertTimestampToHour();
    }, []));

  return (
    <Container>
      <Header>
        <Title>Buscar por cidade</Title>
        <Switcher />
      </Header>
      <SearchView>
        <SearchBar
          onChangeText={setSearch}
          value={search}
          onSearch={handleSearchCity}
          onClear={handleClear}
        />
      </SearchView>
      {
        loadingData && !weatherData ? <Load /> : (
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
