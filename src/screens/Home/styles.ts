import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 13%;
  padding: 15px;
  margin-top: ${RFValue(20)}px;
`;

export const Refresh = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.text};
  padding-left: 15px;
`;

export const Forecast = styled.View`
  flex: 0.5;
  margin: 20px 10px;
`;

export const PeriodView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ForecastList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
