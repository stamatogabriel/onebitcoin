import React from "react";
import { Text } from "react-native";

import { Container, TextCurrentPrice, SubtitlePrice } from './styles';

interface CurrentPriceProps {
  price: number
}

const CurrentPrice: React.FC<CurrentPriceProps> = ({ price }) => {
  return (
    <Container>
      <TextCurrentPrice>$ {price}</TextCurrentPrice>
      <SubtitlePrice>Última cotação</SubtitlePrice>
    </Container>
  );
};

export default CurrentPrice;
