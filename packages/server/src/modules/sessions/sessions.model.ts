import {ModelAttributes, DataTypes} from "sequelize";

export const SessionModel: ModelAttributes = {
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
        type: DataTypes.NUMBER,
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
