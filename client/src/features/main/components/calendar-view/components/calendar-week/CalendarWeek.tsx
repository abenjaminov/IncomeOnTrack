import React from 'react';
import { IWeek } from '../../../../../../shared/hooks';
import { CalendarDay } from '../calendar-day/CalendarDay';
import * as classes from './calendar-week.css';

export const CalendarWeek: React.FC<IWeek> = (week) => {
    const dayPrefix = React.useId();

    return (
        <div className={classes.week}>
            {week.days.map(day => (
                <CalendarDay {...day} key={`${dayPrefix}${day.dayOfMonth}${day.month}`}/>
            ))}
        </div>
    )
}