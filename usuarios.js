const Sequelize = require ('sequelize');
const database = require ('/db');

const usuarios = database.define('usuarios', {
    datausuarios: {
        type: Sequelize.DATE,
        defaultValue: new date()
    },

    id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    cargo_id_cargo: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    cargo_Senac_id_Senac: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    cpf: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    nome: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    email: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    senha: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    }
  
})
module.reports = usuarios;