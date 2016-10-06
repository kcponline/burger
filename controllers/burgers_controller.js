/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js'); // edit model file name

router.get('/', function (req, res) {
	res.redirect('/burgers'); // edit route name
});

router.get('/burgers', function (req, res) { // edit route name
	burger.all(function (data) { // edit
		var hbsObject = { burgers: data }; // edit property name
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) { // edit route name
	burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function () { // edit sql callback names
		res.redirect('/burgers'); // edit sql callback names
	});
});

router.put('/burgers/update/:id', function (req, res) { // edit route name
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () { // edit to be devoured. burger_name was a mistake
		res.redirect('/burgers'); // edit route name
	});
});

module.exports = router;