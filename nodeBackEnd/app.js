const express = require('express');

const PORT = 3000;

const app = express();

app.get("/", (resp,res) => res.json({status: "Nodejs backend"}));

app.listen(PORT,()=>console.log("Escutando na porta "+PORT));