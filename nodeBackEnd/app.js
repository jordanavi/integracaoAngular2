const express = require('express');

const PORT = 3000;

const app = express();

app.get("/", (resp,res) => res.json({status: "Nodejs backend"}));

app.get("/professores", (req,res) =>{
    res.json(
        [
            {'codigo':1,'nome':'joao'},
            {'codigo':2,'nome':'maria'}
        ]
    )
});

app.listen(PORT,()=>console.log("Escutando na porta "+PORT));