import {calendarInfoContainer, progressContainer, progressSection, progressTitle} from "./calendar-info.css";
import {ArrowPicker, ProgressWithText} from "@shared/components";
import {MonthItems, ThisYearItem, YearItems} from "./calendar-info.helpers";
import React from "react";
import {Tooltip} from "@mui/material";


export type CalendarAsideProps = {
  defaultMonthIndex: number,
  onMonthChange: (monthIndex: number) => void
  onYearChange: (year: number) => void
  thisMonthForecast?: number
  thisMonthDebt?: number
  thisMonthIncome?: number
}

export const CalendarInfo: React.FC<CalendarAsideProps> = ({ onMonthChange, defaultMonthIndex, onYearChange, thisMonthDebt, thisMonthForecast, thisMonthIncome }) => {
  const _defaultItem = MonthItems.find(item => item.id === defaultMonthIndex);
  if(!_defaultItem) {
    throw new Error(`Invalid default month index: ${defaultMonthIndex}`);
  }

  const [defaultItem, setDefaultItem] = React.useState(_defaultItem);

  const incomePercentage = thisMonthIncome === undefined || thisMonthForecast === undefined ? undefined :(thisMonthIncome / (thisMonthForecast === 0 ? 1 : thisMonthForecast)) * 100;
  const debtPercentage = thisMonthDebt === undefined || thisMonthForecast === undefined ? undefined :(thisMonthDebt / (thisMonthForecast === 0 ? 1 : thisMonthForecast)) * 100;

  return <div className={calendarInfoContainer}>
    <ArrowPicker items={YearItems} defaultItem={ThisYearItem}  onItemChange={(item) => onYearChange(item.id)} style={{
      fontWeight: 'bold',
      fontSize: '1.5rem',
    }}/>
    <ArrowPicker items={MonthItems} defaultItem={defaultItem}  onItemChange={(item) => onMonthChange(item.id)} style={{
      fontWeight: 'bold',
      fontSize: '1.5rem',
    }}/>
    {thisMonthForecast && <Tooltip title={'This represents the forecast income for this month'}><div className={progressSection}>
      <span className={progressTitle}>Forecast</span>
      <ProgressWithText text={thisMonthForecast.toString()} percentage={100} className={progressContainer}/>
    </div></Tooltip>}
    {incomePercentage !== undefined && <Tooltip title={'This represents how much % you have made out of your forecast for this month'}><div className={progressSection}>
      <span className={progressTitle}>Income</span>
      <ProgressWithText text={thisMonthIncome?.toString() ?? ''} percentage={incomePercentage} className={progressContainer}/>
    </div></Tooltip>}
    {debtPercentage !== undefined && <Tooltip title={'This represents how much debt you still have left to collect this month'}><div className={progressSection}>
      <span className={progressTitle}>Debt</span>
      <ProgressWithText text={thisMonthDebt?.toString() ?? ''} percentage={debtPercentage} className={progressContainer}/>
    </div></Tooltip>}
  </div>
}
