import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from '@hooks/theme';
import { Home } from '@screens/Home';
import { Search } from '@screens/Search';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {

  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();
  console.log(colors)

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: colors.background,
        tabBarInactiveBackgroundColor: colors.background,
        tabBarActiveTintColor: title === 'light' ? colors.text : colors.white,
        tabBarInactiveTintColor: colors.shape,
        tabBarStyle: {
          height: '8%',
          borderTopWidth: 0,
          borderTopColor: colors.background,
          elevation: 24,
          shadowOffset: {
            width: 0,
            height: 0.4,
          },
          shadowOpacity: 0.96,

        }
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='home' size={38} color={color} />
          )
        }}
      />
      <Screen
        name='search'
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='search' size={38} color={color} />
          )
        }}
      />
    </Navigator>
  )

}
