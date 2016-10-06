/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
// // comment out for heroku deployment
// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'pa55w0rd',
// 	database: 'burgers_db'
// });

// added for heroku deployment with JawsDB
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {		
	connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : "pa55w0rd", 
		database : 'burgers_db' 
	});
};


connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
