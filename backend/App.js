const express = require("express") ;

const bodyParser = require("body-parser") ;

const app = express() ;

var jsonParser = bodyParser.json() ;

var urlencodedParser = bodyParser.urlencoded({ extended: false }) ;

const https = require('https') ;

const { response } = require('express');

app.get('/', (req,res) => {
    res.send("Hello World.") ;
})

app.listen(3000, () => {
    console.log("Server running on port 3000.") ;
})