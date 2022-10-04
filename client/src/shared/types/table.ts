export enum TableColumnSize {
    small,
    big,
    extended
}

export interface ITableColumn {
    propName: string;
    size?: TableColumnSize
}

export interface ITableRow {
    object: any,
    columns: Array<ITableColumn>
}

export interface ITableHeaderColumn {
    text: string;
    size?: TableColumnSize
}

export interface ITableHeaderRow {
    columns: Array<ITableHeaderColumn>
}