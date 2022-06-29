import React, { useContext, useEffect, useState } from 'react';
import { ViewProps } from 'react-native';
import { ThemeContext } from 'styled-components';
import { MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';

import Image02d from '../../assets/Icons/02d.svg';
import { weatherImages } from '@utils/weatherImages';
import {
  Container,
  Header,
  Location,
  City,
  Country,
  DateHour,
  Day,
  Month,
  Hour,
  Content,
  Weather,
  WeatherImg,
  Condition,
  Temperature,
  Footer,
  Details,
  DetailsLabel
} from './styles';

export type Props = ViewProps & {
  name: string;
  country: string;
  weather: string;
  description: string;
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  windSpeed: number;
}

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export function MainCard({
  name, country, windSpeed, weather, description, icon,
  temp, temp_min, temp_max, humidity, ...rest
}: Props) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');

  const { colors } = useContext(ThemeContext);

  //pegando icone de tempo da api
  const img = `http://openweathermap.org/img/wn/${icon}@2x.png`

  function GetDateAndHour() {
    const dateNow = new Date();
    const dayNow = dateNow.getDate();
    const monthNow = dateNow.getMonth();
    const hourNow = dateNow.getHours();
    const minutesNow = dateNow.getMinutes();

    setDay(dayNow.toString());
    setMonth(months[monthNow]);
    setHour(hourNow + ':' + (minutesNow < 10 ? '0' + minutesNow : minutesNow));
  }

  useEffect(() => {
    GetDateAndHour();
  }, []);

  return (
    <Container {...rest}>
      <Header>
        <Location>
          <MaterialIcons name="place" size={20} color={colors.text} />
          <City>{name},</City>
          <Country>{country}</Country>
        </Location>
        <DateHour>
          <Day>{day}  </Day>
          <Month>{month}  |  </Month>
          <Hour>{hour}</Hour>
        </DateHour>
      </Header>
      <Content>
        <Weather>
          <WeatherImg
            source={{ uri: img }}
          />
          <Condition>{(description)}</Condition>
        </Weather>
        <Temperature>{temp}°</Temperature>
      </Content>
      <Footer>
        <Details>
          <Ionicons name='thermometer-outline' size={22} color={colors.text} />
          <DetailsLabel>{temp_min}° - {temp_max}°</DetailsLabel>
        </Details>
        <Details>
          <Fontisto name="wind" size={22} color={colors.text} />
          <DetailsLabel>{windSpeed} m/h</DetailsLabel>
        </Details>
        <Details>
          <Ionicons name="water-outline" size={22} color={colors.text} />
          <DetailsLabel>{humidity}%</DetailsLabel>
        </Details>
      </Footer>
    </Container>
  );
}
