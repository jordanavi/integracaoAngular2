const Sequelize = require("sequelize");
const db = require('../config/database');

const Conteudos = db.define('conteudo',{
    codigo:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type:Sequelize.STRING,  
        allowNull: false
    },
})

module.exports = Conteudos;