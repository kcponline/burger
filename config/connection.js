/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');										// 	when deploying to heroku jawsdb, must use jawsdb_url codes
var connection; 													// 	var connection = mysql.createConnection({
if (process.env.JAWSDB_URL) { 										// 	port: 3306,
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {		
	connection = mysql.createConnection({
		host : 'localhost',											// 	host: 'localhost',
		user : 'root',												// 	user: 'root',
		password : "pa55w0rd", 										// 	password: 'pa55w0rd',
		database : 'burgers_db' 									// 	database: 'burgers_db'
	});
};																	// });

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
