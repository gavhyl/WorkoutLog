// $(function(){
// 	$.extend(WorkoutLog, {
// 		log: {
// 			userLogs: [],

// 			setDefinitions: function() {
// 				alert("hello");
// 			},

// 			create: function(){
// 				var log = {
// 					result: $("#log-result").val(),
// 					workoutSelect: $("#log-workoutSelect").val(),
// 					notes: $("#log-notes").val()
// 				};

// 				var postData = { log: log };
// 					var logger = $.ajax({
// 						type: "POST",
// 						url: WorkoutLog.API_BASE + "log",
// 						data: JSON.stringify(postData),
// 						contentType: "application/json"
// 					});

// 					log.done(function(data){
// 						WorkoutLog.log.userLogs.push(data.log);
// 					});
// 			},

		

// 			fetchAll: function(){
// 				var fetchLogs = $.ajax({
// 					type: "GET",
// 					url: WorkoutLog.API_BASE + "log",
// 					headers: {
// 						"authorization": window.localStorage.getItem("sessionToken")
// 					}
// 				})
// 				.done(function(data) {
// 					WorkoutLog.log.userLogs = data;
// 				})
// 				.fail(function(err){
// 					console.log(err);
// 				});
// 			}
// 		}
// 	});

// 	//bindings
// 	$("#log-save").on("click", WorkoutLog.log.create);
// 	//fetch definitions if we already are authenticated and refreshed
// 	if (window.localStorage.getItem("sessionToken")) {
// 		WorkoutLog.log.fetchAll();
// 	}
// });