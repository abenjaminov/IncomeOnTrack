import {Sequelize} from "sequelize";

export interface IDBService {
    getDatabase(): Sequelize;
}
