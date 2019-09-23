// var express = require('express')
// var app = express()

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// app.listen('8080');

// const express = require('express');
// const app = express();

// app.get('/', function (req, res){
//     res.send('halo arkademy');
// })

// app.listen('8080');

const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/siswa', (request, response)=>{
    response.end("Menampilkan siswa");
})

app.get('/siswa/:nama', (request, response)=>{
    // Proses dengan siswa bernama X
    let namaSiswa = request.params.nama;

    response.end("Menampilkan siswa dengan nama : " + namaSiswa);
})

app.post('/siswa', (request, response)=>{
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    response.end("Siswa baru! nama :" + namaSiswa + ", alamat :" + alamatSiswa);
})

app.delete('/siswa/:nama', (request, response)=>{
    let namaSiswa = request.params.nama;

    response.end("Siswa bernama " + namaSiswa + " akan dihapus dari sistem")
})

app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    response.end("Siswa dengan ID " + id + " telah terupdate!");
})

app.listen('8080', (e)=>{
    console.log(e);
})