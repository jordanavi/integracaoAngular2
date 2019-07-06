const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.json(
        [
            {'codigo':1,'nome':'jose'},
            {'codigo':2,'nome':'maria'}
        ]
    )
});

module.exports = router;