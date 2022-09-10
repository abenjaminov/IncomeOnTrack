import { injectable } from "inversify";
import { IClient, IClientRepository, IGetClientsArgs, TableNames } from "../../types";
import { AirtableRepository } from "../../repositories/airtable.repository";

@injectable()
export class ClientRepository extends AirtableRepository implements IClientRepository {
    getTableName(): TableNames {
        return TableNames.clients
    }

    async getClients(args: IGetClientsArgs): Promise<Array<IClient>> {
        let filterFormula = '';
        const conditions = [];

        if(args) {
            if(args.ids) {
                const orCondition = `OR(${args.ids.map(id => `{id}=${id}`).join(',')})`;

                conditions.push(orCondition);
            }

            if(args.filterText) {
                let lowerFilter = args.filterText.toLowerCase();
                conditions.push(`OR(FIND({name},'${lowerFilter}') != 0,FIND({notes},'${lowerFilter}') != 0`)
            }
        }

        filterFormula = `AND(${conditions.join(",")})`;

        const result = await super.select<IClient>(filterFormula);

        return result;
    }
}