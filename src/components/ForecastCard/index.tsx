import React from 'react';

import Image09d from '../../assets/Icons/09d.svg';
import {
  Container,
  Period,
  Temperature,
} from './styles';

type Props = {
  title: string;
  temperature: string;
}

export function ForecastCard({ title, temperature }: Props) {
  return (
    <Container>
      <Period>{title}</Period>
      <Image09d width={80} height={50} />
      <Temperature>{temperature}</Temperature>
    </Container>
  );
}
