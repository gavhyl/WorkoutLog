var router = require('express').Router();
var sequelize = require('../db');
var Log = sequelize.import('../models/log');
var User = sequelize.import('../models/users');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req,res){
	//req has some body properties that have a username and pwd
	var description = req.body.log.description;
	var result = req.body.log.result;
	var user = req.user;
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

//This will retrieve one workout specified by the log id
router.get('/:id', function(req, res) {
	var data = req.params.id;
	//console.log(data); here for testing purposes
	Log
		.findOne({
			where: { id: data }
		}).then(
			function getSucces(updateData) {
				res.json(updateData);
			},

			function getError(err) {
				res.send(500, err.message);
			}
		);
});

//This will return the data from the log that was updated
router.put('/', function(req, res) {
    var description = req.body.log.desc;
    var result = req.body.log.result; 
    var data = req.body.log.id;
    var definition = req.body.log.def;
    console.log(req);
    Log
    	.update(
    	{
    		description: description,
	    	result: result,
	    	def: definition
    	},

    	{where: {id: data}}
    	).then(
    		function updateSuccess(updatedLog) {
    			res.json(updatedLog);
    		},

    		function updateError(err){
    			res.send(500, err.message);
    		}
    	);
});

router.delete('/', function(req,res) {
	var data = req.body.log.id;
	Log
		.destroy({
			where: { id: data }
		}).then(
			function deleteLogSucesss(data){
				res.send("you removed a log");
			},
			function deleteLogError(err){
				res.send(500, err.message);
			}
		);
});
module.exports = router;