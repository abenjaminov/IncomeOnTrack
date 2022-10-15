import { ISession } from '@iot/shared';
import { setMonth, setYear, set, startOfMonth, startOfWeek, getDay, getDate, isThisMonth, isSameMonth, addDays, addWeeks, getMonth } from 'date-fns'
import React from 'react'
import { useGetSessionsQuery } from '../api';

export interface IDay {
    month: number;
    dayOfWeek: number;
    dayOfMonth: number;
    isCurrentMonth: boolean;
    sessions: Array<ISession>
}

export interface IWeek {
    days: Array<IDay>;
}

export interface ICalendarInfo {
    weeks: Array<IWeek>
}

export type MonthNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export const useCalendar = (month: MonthNumber, year: number) => {

    const {data: sessions} = useGetSessionsQuery({
        month,
        year
    });

    const calendarInfo: ICalendarInfo = React.useMemo(() => {
        let sessionsByMonthAndDate = !sessions ? {} : sessions.reduce((acc, session, index) => {
            const month = getMonth(session.startDate);
            const date = getDate(session.startDate);
            const key = `${month}_${date}`;

            if(!acc[key]) {
                acc[key] = []
            }
            acc[key].push(session);

            return acc;
        }, {} as any);

        sessionsByMonthAndDate = sessionsByMonthAndDate ?? {}

        let date = set(new Date(), {
            year,
            month
        });

        let _startOfMonth = startOfMonth(date);
        let hasNextWeek = true;
        let _startOfWeek = startOfWeek(_startOfMonth);

        const weeks: Array<IWeek> = []

        while(hasNextWeek) {
            const newWeek: IWeek = {
                days: []
            }

            let currentDay = _startOfWeek;
            for(let i = 0; i < 7; i++) {
                const month = getDate(currentDay);
                const date = getDate(currentDay);

                newWeek.days.push({
                    dayOfWeek: getDay(currentDay),
                    dayOfMonth: getDate(currentDay),
                    isCurrentMonth: isSameMonth(_startOfMonth, currentDay),
                    month: getMonth(currentDay),
                    sessions: sessionsByMonthAndDate[`${month}_${date}`] ?? []
                })

                currentDay = addDays(currentDay, 1)
            }

            weeks.push(newWeek);

            _startOfWeek = addWeeks(_startOfWeek, 1);
            hasNextWeek = isSameMonth(_startOfWeek, _startOfMonth)
        }

        return {
            weeks
        }
        
    },[sessions])

    return {
        calendarInfo
    }
}