module.exports = function(sequelize, DataTypes) {
	//with define, the  first arguement is going to represent a column in the db table

		return sequelize.define('log', {
			description: DataTypes.STRING,
			result: DataTypes.STRING, //by type of workout
			owner: DataTypes.INTEGER,
			def: DataTypes.STRING

			
		},{

		});
};