const Sequelize = require ('sequelize');
const database = require ('/db');

const cargo = database.define('cargo', {
    datacargo: {
        type: Sequelize.DATE,
        defaultValue: new date()
    },

    id_cargo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    Senac_id_Senac: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    nome_cargo: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    carga_horaria: {
        type: Sequelize.INTEGER(255),
        allowNull: false
    },

    salario: {
        type: Sequelize.INTEGER(255),
        allowNull: false
    }

   
})
module.reports = cargo;