const express = require("express");
const Professor = require('../models/professores');
const router = express.Router();

router.get("/", (req,res)=>
    Professor.findAll()
        .then(result => res.json(result))
        .catch(error =>{
            res.status(412).json({msg: error.message});
}));

module.exports = router;