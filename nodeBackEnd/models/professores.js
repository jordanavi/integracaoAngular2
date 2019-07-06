const Sequilize = require("sequilize");
const db = require('../config/database');

const Professores = db.define('professor',{
    codigo:{
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type:Sequilize.STRING,  
        allowNull: false
    },
})

module.exports = Professor;