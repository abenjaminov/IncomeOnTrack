import * as Sequelize from "sequelize";

export const ClientModel: Sequelize.ModelAttributes = {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    userId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    defaultPayment: {
        type: Sequelize.NUMBER,
        allowNull: false,
    }
}
