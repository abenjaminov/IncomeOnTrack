import React from 'react';
import { View } from '../../../../shared/components';
import { useCalendar } from '../../../../shared/hooks';
import * as classes from './calendar-view.css';
import { CalendarWeek } from './components/calendar-week/CalendarWeek';

export const CalendarView: React.FC = () => {
    const {calendarInfo} = useCalendar(9, 2022);
    const weekPrefix = React.useId();

    return (
        <View>
            <div className={classes.calendar}>
                {calendarInfo.weeks.map((week, i) => (
                    <CalendarWeek {...week} key={`${weekPrefix}${i}`}/>
                ))}            
            </div>
        </View>
    )
}