import React, { useContext, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

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

export function Search() {
  const [search, setSearch] = useState('');

  const { title, colors } = useContext(ThemeContext);

  async function handleSearch() {

  }

  function handleClear() {
    setSearch('');
  }

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
          onSearch={handleSearch}
          onClear={handleClear}
        />
      </SearchView>

      <Forecast>
        <PeriodView>
          <Entypo name="stopwatch" size={20} color={colors.text} />
          <Title>Períodos</Title>
        </PeriodView>
        <ForecastList>
          <ForecastCard title='Manhã' temperature='20°' />
          <ForecastCard title='Tarde' temperature='28°' />
          <ForecastCard title='Noite' temperature='22°' />
        </ForecastList>
      </Forecast>
    </Container>
  );
}
