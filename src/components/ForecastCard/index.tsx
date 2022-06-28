import React from 'react';

import Image01d from '../../assets/Icons/01d.svg';
import Image01n from '../../assets/Icons/01n.svg';
import {
  Container,
  Period,
  Image,
  Hour,
} from './styles';

type Props = {
  title: string;
  hour: string;
  icon: string;
}

export function ForecastCard({ title, hour, icon }: Props) {

  const Icon = () => {
    if (icon === 'sunrise') {
      return (
        <Image01d width={80} height={50} />
      )
    }
    if (icon === 'sunset') {
      return (
        <Image01n width={80} height={50} />
      )
    }
  }

  return (
    <Container>
      <Period>{title}</Period>
      <Icon></Icon>
      <Hour>{hour}</Hour>
    </Container>
  );
}
