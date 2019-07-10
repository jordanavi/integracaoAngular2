const Sequelize = require("sequelize");
const db = require('../config/database');

const Disciplinas = db.define('disciplina',{
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

module.exports = Disciplinas;