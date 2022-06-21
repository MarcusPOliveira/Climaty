import React, { useContext, useState } from 'react';
import { Switch } from 'react-native-switch';
import { ThemeContext } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '@hooks/theme';

export function Switcher() {
  const [isEnabled, setIsEnabled] = useState(false);

  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();

  function ToggleSwitch() {
    toggleTheme();
    setIsEnabled((previousState) => !previousState);
  }

  return (
    <Switch
      changeValueImmediately
      onValueChange={ToggleSwitch}
      value={isEnabled}
      disabled={false}
      circleSize={30}
      barHeight={35}
      backgroundActive={colors.white}
      backgroundInactive={colors.white}
      circleActiveColor={colors.primary}
      circleInActiveColor={colors.primary}
      renderInsideCircle={() => title === 'light' ? <Ionicons name="sunny" size={20} color={colors.text} /> : <Ionicons name="moon" size={20} color={colors.white} />}
      innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2}
      switchRightPx={2}
      switchWidthMultiplier={2}
      switchBorderRadius={30}
    />
  );
}
