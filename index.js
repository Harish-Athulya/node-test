var express = require('express');
var bodyParser = require('body-parser');
const mysql_connection = require('./utils/mysql_connection.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var port = 9000;
let resultStore;

app.get('/login/test', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send("Employee : Harish");
});

app.get('/login', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send("Employee : Harish");
});

// app.post('/login/test', async (req, res) => {
app.post('/login/test', (req, res) => {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    var eid = req.body.employeeid;
    var epwd = req.body.password;
    console.log(eid);
    console.log(epwd);

    // var filter = 1;
    
    var query = `SELECT COUNT(name) AS numrows FROM login WHERE uhid = '${eid}' and password = '${epwd}'`;
    var query2 = `SELECT name AS numrows FROM login WHERE uhid = '${eid}' and password = '${epwd}'`;
    
    
    
    // mysql_connection.query(query, function (error, results, fields) {
    mysql_connection.query(query2, function (error, results, fields) {
        if(error) throw error;
        // setResults(results);
        console.log(results);
        // console.log(results[0].numrows);
        // output = (results[0].numrows);
        var name = results[0].numrows;

        res.send(name);

    }) 
    // await new Promise(resolve => setTimeout(resolve, 5000));

    // console.log(`Outside Function -> ${resultStore}`);
    // console.log(`Outside Function -> ${variable}`);

    

    // console.log(mysql_connection);
    // console.log(msg);
    // console.log(results);

    // res.send(`Employee : `);
});

app.get('/test', (req, res) => {
    let sql = 'SELECT name FROM login WHERE id = 15';

    mysql_connection.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results.name);
    })
    
});



async function example1 () {
    const mysql = require('mysql2/promise');
    const conn = await mysql.createConnection({ database: flutter_db });
    let [rows, fields] = await conn.execute('select ?+? as sum', [2, 2]);

  }

async function setResults(results) {
    resultStore = results;
    // console.log(resultStore);
}

// start the server  
app.listen(port);
console.log('Server started! At http://localhost:' + port);




// mysql_connection.end();
