const express = require("express");
const Conteudo = require('../models/conteudos');
const router = express.Router();

router.get("/", (req,res)=>
    Conteudo.findAll()
        .then(result => res.json(result))
        .catch(error =>{
            res.status(412).json({msg: error.message});
}));

router.get("/:id", (req,res)=>{
    Conteudo.findOne({
        where: {
            codigo: req.params.id,
        }
    }).then(result => {
        if(result){
            res.json(result);
        } else {
            res.sendStatus(404);
        }
        }).catch(error => {
            res.status(412).json({msg: error.message});
});
})

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/search/params', (req, res) => {
    var query = `%${req.query.nome}%`;

    console.log(query)
    Conteudo.findAll({ where: { nome: { [Op.like]: query } } })
        .then(conteudos => res.json(conteudos))
        .catch(err => this.console.log(err));
})

router.delete("/:id", (req, res) =>{
    Conteudo.destroy({
        where: {
            codigo: req.params.id
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg: error.message});
        });
})

router.post('/',(req,res)=>{
    console.log(req.body);
    Conteudo.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
});

router.post('/',(req,res)=>{
    Conteudo.update(req.body, {
        where: {
            codigo: req.body.codigo
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg:error.message});
    });
});
module.exports = router;