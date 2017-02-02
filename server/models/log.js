module.exports = function(sequelize, DataTypes) {
	//with define, the  first arguement is going to represent a column in the db table

		return sequelize.log('log', {
			result: DataTypes.STRING,
			workoutSelect: DataTypes.STRING, //by type of workout
			notes: DataTypes.STRING,

			owner: DataTypes.INTEGER
		},{

		});
};