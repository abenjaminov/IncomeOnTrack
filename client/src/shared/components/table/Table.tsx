import React, { ReactNode, useId } from 'react';
import * as classes from './table.css';

interface ITableProps {
    children: ReactNode;
}

export const Table: React.FC<ITableProps> = (props) => {
    return (
        <div className={classes.table}>
            {props.children}
        </div>
    )
}