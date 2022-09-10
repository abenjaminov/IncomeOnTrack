import { base, configure, Table, FieldSet, Records } from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";
import { inject, injectable } from "inversify";
import { AirTableEntity, IAirtableConnection, TableNames } from "../types";
import { InjectionTokens } from "../config";

@injectable()
export abstract class AirtableRepository {
    airtableBase: AirtableBase;
    table: Table<FieldSet>

    constructor(
        tableName: TableNames,
        @inject(InjectionTokens.airtableConnection) private airtableConnection: IAirtableConnection
    ) { 
        this.table = airtableConnection.getTable(tableName);
    }

    abstract getTableName(): TableNames;

    async select<T>(filterFormula: string): Promise<Array<T>> {
        const records = await this.table.select({
            view: 'Grid view',
            filterByFormula: filterFormula
        }).firstPage();

        const result = this.getAirtableEntitiy<T>(records);

        return result;
    }

    getAirtableEntitiy<T>(records : Records<FieldSet>): Array<T> {
        const objects = [];
        for(let record of records) {
          const airTableEntity = record._rawJson.fields;
          airTableEntity.airTableId = record.id;
          objects.push(airTableEntity as T)
        }
    
        return objects;
      }
}