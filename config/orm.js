var connection = require('../config/connection.js');

var orm = {
	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		// vals is an array of values that we want to save to cols
		// cols are the columns we want to insert the values into
	create: function (table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		// objColVals would be the columns and values that you want to update
		// an example of objColVals would be {name: panther, sleepy: true}
	update: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;

// {
//     selectWhere: function(tableInput, colToSearch, valOfCol) {
//         var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';

//         connection.query(queryString, [valOfCol], function(err, result) {
//             return result;
//         });
//     },
//     selectAndOrder: function (whatToSelect, table, orderCol, orderBy) {
// 		var queryString = 'SELECT ' + whatToSelect + ' FROM ' + table + ' ORDER BY ' + orderCol + ' ' + orderBy;
// 		console.log(queryString);
// 		connection.query(queryString, function (err, result) {
// 			console.log(result);
// 		});
// 	},

// };

// module.exports = orm;
