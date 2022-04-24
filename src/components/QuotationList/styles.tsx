import styled from "styled-components/native";

interface QuotationButtonProps {
  selected: boolean
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 15px 0;
  justify-content: space-evenly;
`;

export const QuotationButton = styled.TouchableOpacity<QuotationButtonProps>`
  width: 50px;
  height: 30px;
  background-color: ${(props) => props.selected ? '#ff6600' : '#f50d41'};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const TextQuotationButton = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const ItemContainer = styled.View`
  width: 95%;
  background: #000;
  margin-left: 3%;
  margin-bottom: 15px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ContextLeft = styled.View`
  width: 36%;
  align-items: flex-start;
`

export const BoxLogo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
  margin: 0 10px 0 2px;
`

export const DayCotation = styled.Text`
  font-size: 16px;
  padding-left: 2px;
  color: #fff;
  font-weight: bold;
`

export const ContextRight = styled.View`
  width: 60%;
  align-items: flex-end;
`

export const Price = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`
