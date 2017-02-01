var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/users');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req,res){
	//variables
	var description = req.body.definition.desc;
	var logType = req.body.definition.type;
	var owner = req.user.id;
	//methods
	Definition
		.create({
			description: description,
			logType: logType,
			owner: owner
		})
		.then(
			//createSuccess fucntion
			function creatSuccess(definition) {
				//send a response as json
				res.json({
					definition: definition
				});
			},
			//createErorr function
			function creatError(err) {
				res.send(500,err.message);
			}
			);
});
router.get('/', function(req,res){
	//user variable
	var userid = req.user.id;
	Definition
	//findAll by owner method
	.findAll({
		where: {owner:userid}
	})
	.then(
		//success
		function findAllSucces(data) {
			//console.log(data);
			res.json(data);
		},
		//failure
		function findAllError(err) {
			res.send(55,err.message);
		}
		);
});
module.exports = router;