// var express = require('express')
// var app = express()

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// app.listen('8080');

const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('halo arkademy');
})

app.listen('8080');