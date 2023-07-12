import * as Sequelize from "sequelize";

export const SessionModel: Sequelize.ModelAttributes = {
    id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    userId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    clientId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    payment: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    datePayed: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    issuedReceipt: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    notes: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}
