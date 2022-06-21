import React, { useContext } from 'react';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

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

  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <Refresh>
          <MaterialIcons name="sync" size={32} color={colors.text} />
        </Refresh>
        <Title>Sua localização</Title>
        <Switcher />
      </Header>
      <MainCard />
      <Forecast>
        <PeriodView>
          <Entypo name="stopwatch" size={20} color={colors.text} />
          <Title>Períodos</Title>
        </PeriodView>
        <ForecastList>
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </ForecastList>
      </Forecast>
    </Container>
  );
}
