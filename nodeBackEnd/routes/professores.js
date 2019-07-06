const express = require("express");
const Professor = require('../models/professores');
const router = express.Router();

router.get("/", (req,res)=>
    Professor.findAll()
        .then(result => res.json(result))
        .catch(error =>{
            res.status(412).json({msg: error.message});
}));

router.get("/:id", (req,res)=>{
    Professor.findOne({
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
module.exports = router;