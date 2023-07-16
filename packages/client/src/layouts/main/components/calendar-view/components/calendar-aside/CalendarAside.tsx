import {calendarAsideContainer} from "./calendar-aside.css";
import {ArrowPicker} from "@shared/components";
import {MonthItems, ThisYearItem, YearItems} from "./calendar-aside.helpers";
import React from "react";


export type CalendarAsideProps = {
  defaultMonthIndex: number,
  onMonthChange: (monthIndex: number) => void
  onYearChange: (year: number) => void
  thisMonthForecast?: number
  thisMonthDebt?: number
  thisMonthIncome?: number
}

export const CalendarAside: React.FC<CalendarAsideProps> = ({ onMonthChange, defaultMonthIndex, onYearChange, thisMonthDebt, thisMonthForecast, thisMonthIncome }) => {
  const defaultItem = MonthItems.find(item => item.id === defaultMonthIndex);
  if(!defaultItem) {
    throw new Error(`Invalid default month index: ${defaultMonthIndex}`);
  }

  return <div className={calendarAsideContainer}>
    <ArrowPicker items={YearItems} defaultItem={ThisYearItem}  onItemChange={(item) => onYearChange(item.id)} style={{
      fontWeight: 'bold',
      fontSize: '1.5rem',
    }}/>
    <ArrowPicker items={MonthItems} defaultItem={defaultItem}  onItemChange={(item) => onMonthChange(item.id)} style={{
      fontWeight: 'bold',
      fontSize: '1.5rem',
    }}/>
    {thisMonthDebt && <div>Debt: {thisMonthDebt}</div>}
    {thisMonthForecast && <div>Forecast: {thisMonthForecast}</div>}
    {thisMonthIncome && <div>Income: {thisMonthIncome}</div>}
  </div>
}
