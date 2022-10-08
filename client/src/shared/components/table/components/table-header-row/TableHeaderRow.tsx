import React, { ReactNode } from 'react';
import { ITableRow } from '../../../../types';
import { TableCell } from '../table-cell/TableCell';
import * as classes from './table-header-row.css';

interface ITableHeaderRowProps {
    children: ReactNode
}

export const TableHeaderRow: React.FC<ITableHeaderRowProps> = (props) => {
    const cellId = React.useId();

    return (
        <div className={classes.tableHeaderRow}>
            {props.children}
        </div>
    )
}