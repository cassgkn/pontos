const Sequelize = require ('sequelize');

const sequelize = new Sequelize ('senac pontos', 'root', '', {
    host:'localhost',
    dialect:'mysql' 
    });

sequelize.authenticate()
.then (function(){
    console.log('Conectado com o BD');
})
.catch (function(){
    console.log('Erro de conexão')
})

module.exports = sequelize;