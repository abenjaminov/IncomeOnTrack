import React from 'react';
import * as classes from './calendar-day.css';
import { IDay } from '../../../../../../shared/hooks';
import { PaymentState } from '@iot/shared';

export const CalendarDay: React.FC<IDay> = (props) => {
    const sessions = [{
        id: '123213',
        clientName: 'איזה שם',
        isFuture: true,
        paymentState: PaymentState.owed
    }];

    return (
        <div className={classes.day}>
            <div className={classes.dayHeader}>
                <div>{props.dayOfMonth}</div>
                <div>+</div>
            </div>
            <div className={classes.daySessions}>

            </div>
        </div>
    )
}