const Sequelize = require("sequelize");
const db = require('../config/database');

const Professores = db.define('professor',{
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

module.exports = Professor;