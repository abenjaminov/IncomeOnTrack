import { base, configure, Table } from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";
import { FieldSet } from "airtable/lib/field_set";
import { injectable } from "inversify";
import { IAirtableConnection, TableNames } from "../types";

@injectable()
export abstract class AirtableConnection implements IAirtableConnection {
    airtableBase: AirtableBase;
    
    constructor() {
        configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: process.env.AIRTABLE_API_KEY
        })

        this.airtableBase = base(process.env.AIRTABLE_BASE_ID);
    }

    getTable(tableName: TableNames): Table<FieldSet> {
        const result = this.airtableBase(tableName);

        return result;
    }
}