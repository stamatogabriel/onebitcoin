import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import CurrentPrice from "./src/components/CurrentPrice";
import HistoryGraphic from "./src/components/HistoryGraphic";
import QuotationList from "./src/components/QuotationList";
import GetStartEndDate from "./src/logicals/getStartEndDate";
import api from "./src/services/api";

import { Container } from "./styles/global";

export default function App() {
  const [graphicList, setGraphicList] = useState<any[]>();
  const [days, setDays] = useState<number>(7)
  const [listBpi, setListBpi] = useState<any[]>([
    { date: "01/01/2000", value: 0 },
  ]);

  const getQuotation = useCallback(async (qtdDays: number) => {
    try {
      const { end_date, start_date } = GetStartEndDate(qtdDays);
      setDays(qtdDays)

      const response = await api.get("/", {
        params: {
          start: start_date,
          end: end_date,
        },
      });

      setListBpi(
        Object.keys(response.data?.bpi)
          .map((key) => {
            return {
              date: key.split("-").reverse().join("/"),
              value: response.data?.bpi[key],
            };
          })
          .reverse()
      );

      setGraphicList(
        Object.keys(response.data?.bpi)
          .map((key) => response.data?.bpi[key])
          .reverse()
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getQuotation(days);
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#F50d41" />
      <CurrentPrice price={listBpi[0].value || 0} />
      <HistoryGraphic data={graphicList || []} />
      <QuotationList listBpi={listBpi} getQuotation={getQuotation} setDays={setDays} days={days} />
    </Container>
  );
}
