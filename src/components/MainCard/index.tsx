import React, { useContext } from 'react';
import { ViewProps } from 'react-native';
import { ThemeContext } from 'styled-components';
import { MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';

import Image01d from '../../assets/Icons/01d.svg';
import {
  Container,
  Header,
  Location,
  City,
  Country,
  Date,
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

type Props = ViewProps & {

}

export function MainCard({ ...rest }: Props) {

  const { title, colors } = useContext(ThemeContext);

  return (
    <Container {...rest}>
      <Header>
        <Location>
          <MaterialIcons name="place" size={20} color={colors.text} />
          <City>Belo Horizonte,</City>
          <Country>Br</Country>
        </Location>
        <Date>
          <Day>15  </Day>
          <Month>Maio  |  </Month>
          <Hour>12:37</Hour>
        </Date>
      </Header>
      <Content>
        <Weather>
          <Image01d width={120} height={70} />
          <Condition>Sol com{"\n"}algumas núvens</Condition>
        </Weather>
        <Temperature>28°</Temperature>
      </Content>
      <Footer>
        <Details>
          <Ionicons name='thermometer-outline' size={22} color={colors.text} />
          <DetailsLabel>19° - 29°</DetailsLabel>
        </Details>
        <Details>
          <Fontisto name="wind" size={22} color={colors.text} />
          <DetailsLabel>7.7 m/h</DetailsLabel>
        </Details>
        <Details>
          <Ionicons name="water-outline" size={22} color={colors.text} />
          <DetailsLabel>60%</DetailsLabel>
        </Details>
      </Footer>
    </Container>
  );
}
