import {ModelAttributes, DataTypes} from "sequelize";

export const ClientModel: ModelAttributes = {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    defaultPayment: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}
