import React, { useCallback, useEffect, useState, useContext } from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { useTheme } from '@hooks/theme';
import AppProvider from './src/hooks';
import { Routes } from './src/routes';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AppProvider>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Routes />
      </View>
    </AppProvider>
  );
}
