var router = require('express').Router();
var sequelize = require('../db');
var Log = sequelize.import('../models/log');
var User = sequelize.import('../models/users');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req,res){
	//variables

	var result = req.body.log.result;
	var workoutSelect = req.body.log.workoutSelect;
	var notes = req.body.log.notes;
	var owner = req.user.id;
	//methods
	Log
		.create({
			result: result,
			workoutSelect: workoutSelect,
			notes: notes,
			owner: owner
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
			res.send(500,err.message);
		}
		);
});
module.exports = router;