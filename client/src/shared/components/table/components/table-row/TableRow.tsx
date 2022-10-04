import React from 'react';
import { ITableRow } from '../../../../types';
import { TableCell } from '../table-cell/TableCell';
import * as classes from './table-row.css';

interface ITableRowProps {
    row: ITableRow
}

export const TableRow: React.FC<ITableRowProps> = (props) => {
    const cellId = React.useId();

    return (
        <div className={classes.tableRow}>
            {props.row.columns.map((column,i) => 
                (<TableCell key={`tableCell${cellId}${i}`}
                    text={props.row.object[column.propName]} size={column.size}/>)
            )}
        </div>
    )
}