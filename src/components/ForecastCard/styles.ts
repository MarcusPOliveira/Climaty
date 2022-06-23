import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 20px;
  width: 101px;
  height: 166px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
`;

export const Period = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family:  ${({ theme }) => theme.fonts.text};
  color:  ${({ theme }) => theme.colors.text};
`;

export const Temperature = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family:  ${({ theme }) => theme.fonts.title};
  color:  ${({ theme }) => theme.colors.text};
`;
