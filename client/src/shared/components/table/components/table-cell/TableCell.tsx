import React, { ReactNode } from 'react';
import { TableColumnSize } from '../../../../types';
import * as classes from './table-cell.css';

interface ITableCellProps {
    size?: TableColumnSize;
    children: ReactNode
}

export const TableCell: React.FC<ITableCellProps> = (props) => {
    const size = props.size ?? TableColumnSize.extended;
    let sizeClass = classes.extendedCell;

    if(size === TableColumnSize.small) {
        sizeClass = classes.smallCell;
    }
    else if(size === TableColumnSize.big) {
        sizeClass = classes.bigCell;
    }

    return (
        <div className={`${classes.tableCell} ${sizeClass}`}>
            {props.children}
        </div>
    )
}