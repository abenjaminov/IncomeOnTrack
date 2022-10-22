import React, { ReactNode } from 'react';
import * as classes from './table-row.css';

interface ITableRowProps {
    children: ReactNode
}

export const TableRow: React.FC<ITableRowProps> = (props) => {
    const cellId = React.useId();

    return (
        <div className={classes.tableRow}>
            {props.children}
        </div>
    )
}