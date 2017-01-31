require('dotenv').config();

var sequelize=require('./db.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var User = sequelize.import('./models/users');




// build a user model in sqllize
// var User = sequelize.define('user', {
// 	username: Sequelize.STRING,
// 	passwordhash: Sequelize.STRING,
// });

//creates the table in postgres
//matches the model we defined
//Doesn't drop the db
//var User = sequelize.import(__dirname + '\\models\\user');
User.sync(); 
//User.sync({ force: true }); //drops the table compeletly (line 27ish)

app.use(bodyParser.json());



app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/api/user', require('./routes/user'));

//login route
app.use('/api/login', require('./routes/session'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("app is listening on port 3000");
});

