var sequelize=require('./db.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var User = sequelize.import('./models/user');


// build a user model in sqllize
// var User = sequelize.define('user', {
// 	username: Sequelize.STRING,
// 	passwordhash: Sequelize.STRING,
// });

//creates the table in postgres
//matches the model we defined
//Doesn't drop the db
User.sync(); 
//User.sync({ force: true }); //drops the table compeletly (line 27ish)

app.use(bodyParser.json());



app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("app is listening on port 3000");
});