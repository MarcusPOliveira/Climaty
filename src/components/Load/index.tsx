import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeContext } from 'styled-components';

export function Load() {

  const { title, colors } = useContext(ThemeContext);

  return (
    <ActivityIndicator
      color={title === 'light' ? colors.text : colors.white}
      size='small'
      style={{ flex: 1 }}
    />
  );
}
