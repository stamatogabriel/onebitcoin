import React from "react";
import { FlatList } from "react-native";
import QuotationItem from "./QuotationItem";

import { Container, QuotationButton, TextQuotationButton } from "./styles";

interface IBpi {
  date: Date | string;
  value: number;
}

interface QuotationListProps {
  listBpi: IBpi[] | null;
  days: number
  getQuotation(days: number): void;
  setDays(days: number): void;
}

const QuotationList: React.FC<QuotationListProps> = ({
  listBpi,
  getQuotation,
  days
}) => {
  return (
    <>
      <Container>
        <QuotationButton selected={days === 7} onPress={() => getQuotation(7)}>
          <TextQuotationButton>7D</TextQuotationButton>
        </QuotationButton>
        <QuotationButton selected={days === 15} onPress={() => getQuotation(15)}>
          <TextQuotationButton>15D</TextQuotationButton>
        </QuotationButton>
        <QuotationButton selected={days === 30} onPress={() => getQuotation(30)}>
          <TextQuotationButton>1M</TextQuotationButton>
        </QuotationButton>
        <QuotationButton selected={days === 90} onPress={() => getQuotation(90)}>
          <TextQuotationButton>3M</TextQuotationButton>
        </QuotationButton>
        <QuotationButton selected={days === 180} onPress={() => getQuotation(180)}>
          <TextQuotationButton>6M</TextQuotationButton>
        </QuotationButton>
      </Container>
      <FlatList
        data={listBpi ?? []}
        renderItem={({ item }: any) => <QuotationItem item={item} />}
        keyExtractor={(item: any) => item.date}
      />
    </>
  );
};

export default QuotationList;
