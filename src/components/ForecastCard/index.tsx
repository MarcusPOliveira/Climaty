import React from 'react';

import Image09d from '../../assets/Icons/09d.svg';
import {
  Container,
  Period,
  Hour,
} from './styles';

type Props = {
  title: string;
  hour: string;
}

export function ForecastCard({ title, hour }: Props) {
  return (
    <Container>
      <Period>{title}</Period>
      <Image09d width={80} height={50} />
      <Hour>{hour}</Hour>
    </Container>
  );
}
