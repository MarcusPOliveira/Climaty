import React, { useContext } from 'react';
import { TextInputProps } from 'react-native';
import { ThemeContext } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  InputArea,
  Input,
  ButtonClear,
  SearchButton,
} from './styles';

type Props = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
}

export function SearchBar({ onSearch, onClear, ...rest }: Props) {

  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <InputArea>
        <Input
          placeholder='Pesquisar'
          {...rest}
        />
        <ButtonClear onPress={onClear} >
          <Feather name="x" size={16} color={colors.shape} />
        </ButtonClear>
      </InputArea>
      <SearchButton onPress={onSearch} >
        <Feather name="search" size={16} color={colors.white} />
      </SearchButton>
    </Container>
  );
}
