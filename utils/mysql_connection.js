var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'flutter_db'
});
 
connection.connect();

/* var filter = 1;
// connection.query('SELECT * FROM login WHERE id = ?', filter,  function (error, results, fields) {
connection.query(`SELECT * FROM login WHERE id = ${filter}`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});
 */ 
// connection.end();
console.log('db connected');

// var eid = 101;

module.exports = connection;
// module.exports = "Athulyaaaaaa";
// module.exports = eid;