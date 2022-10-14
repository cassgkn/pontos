const Sequelize = require ('sequelize');
const database = require ('/db');

const pontos = database.define('pontos', {
    datapontos: {
        type: Sequelize.DATE,
        defaultValue: new date()
    },

    id_ponto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    usuarios_cargo_id_cargo: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    usuarios_id_usuario: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    data_2: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    horario_entrada: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    horario_saida: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    total_horas: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
    },

    observacao: {
        type: Sequelize.STRING(255),
        allowNull: false
    }

})
module.reports = pontos;