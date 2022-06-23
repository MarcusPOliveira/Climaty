import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 0.5;
  margin: 17px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

export const Location = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const City = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family:  ${({ theme }) => theme.fonts.title};
  color:  ${({ theme }) => theme.colors.text};
  margin-left: 5px;
`;

export const Country = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family:  ${({ theme }) => theme.fonts.text};
  color:  ${({ theme }) => theme.colors.text};
  margin-left: 5px;
`;

export const Date = styled.View`
  flex-direction: row;
`;

export const Day = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family:  ${({ theme }) => theme.fonts.text};
  color:  ${({ theme }) => theme.colors.text};
`;

export const Month = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family:  ${({ theme }) => theme.fonts.text};
  color:  ${({ theme }) => theme.colors.text};
`;

export const Hour = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family:  ${({ theme }) => theme.fonts.text};
  color:  ${({ theme }) => theme.colors.text};
`;

export const Content = styled.View`
  flex-direction: row;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const Weather = styled.View`
  align-items: center;
`;

export const WeatherImg = styled.Image`
  width: 142px;
  height: 120px;
`;

export const Condition = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family:  ${({ theme }) => theme.fonts.title};
  color:  ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: ${RFValue(3)}px;
`;

export const Temperature = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family:  ${({ theme }) => theme.fonts.title};
  color:  ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 35%;
`;

export const Details = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DetailsLabel = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family:  ${({ theme }) => theme.fonts.text};
  color:  ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(2)}px;
`;
