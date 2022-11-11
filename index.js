var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

var port = 9000;

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


// start the server  
app.listen(port);
console.log('Server started! At http://localhost:' + port);




// mysql_connection.end();
