import React, { ReactNode, useId } from 'react';
import { ITableHeaderRow, ITableRow } from '../../types';
import { TableCell } from './components/table-cell/TableCell';
import { TableRow } from './components/table-row/TableRow';
import * as classes from './table.css';

interface ITableProps {
    children: ReactNode;
}

export const Table: React.FC<ITableProps> = (props) => {
    const headerCellKey = useId();
    const tableRowKey = useId();
    return (
        <div className={classes.table}>
            {props.children}
        </div>
    )
}