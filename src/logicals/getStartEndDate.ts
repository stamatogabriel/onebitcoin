import AddZero from "./addZero";

export default function GetStartEndDate(qtdDays: number) {
  const today = new Date();

  const end_date =
    `${today.getFullYear()}-${AddZero(today.getMonth() + 1)}-${AddZero(today.getDate())}`;
  today.setDate(today.getDate() - qtdDays);

  const start_date =
    `${today.getFullYear()}-${AddZero(today.getMonth() + 1)}-${AddZero(today.getDate())}`;

  return { start_date, end_date }
}