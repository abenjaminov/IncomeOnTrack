import React, { useId } from 'react';
import { ITableHeaderRow, ITableRow } from '../../types';
import { TableCell } from './components/table-cell/TableCell';
import { TableRow } from './components/table-row/TableRow';
import * as classes from './table.css';

interface ITableProps {
    headerRow: ITableHeaderRow;
    rows: Array<ITableRow>
}

export const Table: React.FC<ITableProps> = (props) => {
    const headerCellKey = useId();
    const tableRowKey = useId();
    return (
        <div className={classes.table}>
            <div className={classes.headerRow}>
                {props.headerRow.columns.map((headerCol, i) => (
                    <TableCell key={`headerCell${headerCellKey}${i}`} text={headerCol.text} size={headerCol.size}/>
                ))}
            </div>
            {props.rows.map((tableRow, i) => (
                <TableRow row={tableRow} key={`tableRow${tableRowKey}${i}`}/>
            ))}
        </div>
    )
}