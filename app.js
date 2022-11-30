const express = require('express')
const app = express()
const port = 8088

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res, next) {
    res.send({ 'text': 'this text was sent from the server' })
});

app.post('/', function (req, res, next) {
    console.log(`${port}`)
});