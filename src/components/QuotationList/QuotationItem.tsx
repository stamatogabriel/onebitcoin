import React from "react";

import {
  BoxLogo,
  ContextLeft,
  ContextRight,
  DayCotation,
  ItemContainer,
  Logo,
  Price,
} from "./styles";

interface QuotationItemProps {
  item: any
}

const QuotationItem: React.FC<QuotationItemProps> = ({ item }) => {
  return (
    <ItemContainer>
      <ContextLeft>
        <BoxLogo>
          <Logo source={require('../../img/logo.png')} />
          <DayCotation>{item?.date}</DayCotation>
        </BoxLogo>
      </ContextLeft>
      <ContextRight>
        <Price>$ {item?.value}</Price>
      </ContextRight>
    </ItemContainer>
  );
};

export default QuotationItem;
