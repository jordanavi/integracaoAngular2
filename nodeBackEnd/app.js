const express = require('express');

const PORT = 3000;

const app = express();
const db = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
    origin:['http://localhost:4200'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(bodyParser.json());

db.authenticate()
    .then(()=>console.log('Database connected...'))
    .catch(err =>console.log('Error: '+err))

app.set("json spaces", 4);

const index = require('./routes/index');
const professores = require('./routes/professores');

app.use('/',index);
app.use('/professores',professores);



// app.get("/", (resp,res) => res.json({status: "Nodejs backend"}));

// app.get("/professores", (req,res) =>{
//     res.json(
//         [
//             {'codigo':1,'nome':'joao'},
//             {'codigo':2,'nome':'maria'}
//         ]
//     )
// });

app.listen(PORT,()=>console.log("Escutando na porta "+PORT));