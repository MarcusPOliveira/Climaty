import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 0.5;
  margin: 17px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
