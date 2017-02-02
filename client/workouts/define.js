$(function(){
	$.extend(WorkoutLog, {
		definition: {
			userDefinitions: [],

			setDefinitions: function(){
				alert("blah");
			},

			create: function(){
				var def = {
					desc: $("#def-description").val(),
					type: $("#def-logtype").val()
				};

				var postData = { definitions: def };
					var define = $.ajax({
						type: "POST",
						url: WorkoutLog.API_BASE + "definition",
						data: JSON.stringify(postData),
						contentType: "application/json"
					});

					define.done(function(data){
						WorkoutLog.definition.userDefinitions.push(data.definition);
					});
			},

		

			fetchAll: function(){
				var fetchDefs = $.ajax({
					type: "GET",
					url: WorkoutLog.API_BASE + "definition",
					headers: {
						"authorization": window.localStorage.getItem("sessionToken")
					}
				})
				.done(function(data) {
					WorkoutLog.definition.userDefinitions = data;
				})
				.fail(function(err){
					console.log(err);
				});
			}
		},

		// log: {
		// 	userLogs: [],

		// 	setDefinitions: function() {
		// 		alert("hello");
		// 	},

		// 	create: function(){
		// 		var log = {
		// 			result: $("#log-result").val(),
		// 			workoutSelect: $("#log-workoutSelect").val(),
		// 			notes: $("#log-notes").val()
		// 		};

		// 		var postData = { log: log };
		// 			var logger = $.ajax({
		// 				type: "POST",
		// 				url: WorkoutLog.API_BASE + "log",
		// 				data: JSON.stringify(postData),
		// 				contentType: "application/json"
		// 			});

		// 			log.done(function(data){
		// 				WorkoutLog.log.userLogs.push(data.log);
		// 			});
		// 	},

		

		// 	fetchAll: function(){
		// 		var fetchLogs = $.ajax({
		// 			type: "GET",
		// 			url: WorkoutLog.API_BASE + "log",
		// 			headers: {
		// 				"authorization": window.localStorage.getItem("sessionToken")
		// 			}
		// 		})
		// 		.done(function(data) {
		// 			WorkoutLog.log.userLogs = data;
		// 		})
		// 		.fail(function(err){
		// 			console.log(err);
		// 		});
		// 	}
		// }
	});

	//bindings
	$("#def-save").on("click", WorkoutLog.definition.create);
	//fetch definitions if we already are authenticated and refreshed
	if (window.localStorage.getItem("sessionToken")) {
		WorkoutLog.definition.fetchAll();
	}
		//bindings
	// $("#log-save").on("click", WorkoutLog.log.create);
	// //fetch definitions if we already are authenticated and refreshed
	// if (window.localStorage.getItem("sessionToken")) {
	// 	WorkoutLog.log.fetchAll();
	// }
});