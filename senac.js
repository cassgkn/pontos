const Sequelize = require ('sequelize');
const database = require ('/db');

const senac = database.define('senac', {
    datasenac: {
        type: Sequelize.DATE,
        defaultValue: new date()
    },

    id_Senac: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    cnpj: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    endereco: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    numero: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    cidade: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    estado: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    cep: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    }

   
})
module.reports = senac;