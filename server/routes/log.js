var router = require('express').Router();
var sequelize = require('../db');
var Log = sequelize.import('../models/log');
var User = sequelize.import('../models/users');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req,res){
	//req has some body properties that have a username and pwd
	var description = req.body.log.description;
	var result = req.body.log.result;
	var owner = req.user.id;
	var definition = req.body.log.def;
	//use our sequelize model to create log
	Log
		.create({
			description: description,
			result: result,
			owner: user.id,
			def: definition 
		})
		.then(
			//createSuccess fucntion
			function createSuccess(log) {
				//send a response as json
				res.json(log);
			},
			//createErorr function
			function createError(err) {
				res.send(500,err.message);
			}
			);
});
router.get('/', function(req,res){
	//user variable
	var userid = req.user.id;
	Log
	//findAll by owner method
	.findAll({
		where: { owner: userid }
	})
	.then(
		//success
		function findAllSucces(data) {
			//console.log(data);
			res.json(data);
		},
		//failure
		function findAllError(err) {
			res.send(500,err.message);
		}
		);
});
module.exports = router;