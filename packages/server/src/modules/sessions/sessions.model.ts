import {ModelAttributes, DataTypes, Model} from "sequelize";
import {ISession} from "@income-on-track/shared";

export class SessionModel extends Model<ISession> {}

export const SessionModelAttributes: ModelAttributes = {
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clientId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    datePayed: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    issuedReceipt: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}
