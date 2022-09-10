import { FieldSet, Table } from "airtable";

export interface AirTableEntity {
    airTableId? : string;
}

export enum TableNames {
    clients = "Clients"
}

export interface IAirtableConnection {
    getTable(tableName: TableNames) : Table<FieldSet>
}