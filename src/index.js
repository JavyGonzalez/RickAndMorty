/*const http = require('http');
const PORT = 3001;
const getCharById = require('./controllers/getCharById.js')
//const data = require('./utils/data');

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')){
        const id = req.url.split("/").pop();

        getCharById(res, +id);
        }
      
}).listen(PORT, 'localhost');*/

//const express = require ('express');
//const server = express();
const PORT = 3001;
const server = require('./app.js');
const {conn} = require('./DB_connection.js')


conn.sync({force: false})
    .then(()=>{
        server.listen(PORT, () => {
            console.log('Server raised in port: ' + PORT);
        });
    });
