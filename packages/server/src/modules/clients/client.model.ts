import {ModelAttributes, DataTypes, Model} from "sequelize";

export class ClientModel extends Model {}

export const ClientModelAttributes: ModelAttributes = {
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
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}
