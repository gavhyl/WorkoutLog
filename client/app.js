$(function(){

	var WorkoutLog = (function($, undefined){
		var API_BASE = "http://localhost:3000/api/";
		var userDefinitions = [];
		// var userLogs = [];
		var setAuthHeader = function(sessionToken) {
			window.localStorage.setItem("sessionToken", sessionToken);
			//set the authorization header
			//this can be done on idividual calls
			//here we can showcase a ajaxSetup as a global tool
			$.ajaxSetup({
				"headers": {
					"Authorization": sessionToken
				}
			});
		};
		//public
		return {
			API_BASE: API_BASE,
			setAuthHeader: setAuthHeader
		};

	})(jQuery);

	//ensure .disabled arent clickble
	$(".nav-tabs a[data-toggle=tab]").on("click", function(e){
		var token = window.localStorage.getItem("sessionToken");
		if ($(this).hasClass("disabled") && !token) {
			e.preventDefault();
			return false;
	}
	});
	$("a[data-toggle='tab']").on("shown.bs.tab", function(e){
		var target = $(e.target).attr("href"); //actiavted tab
		if (target === "#log") {
			 WorkoutLog.log.setDefinitions();
		}

		if (target === "#history") {
			WorkoutLog.log.setHistory();
		}
	});
	//bind enter key
	$(document).on("keypress", function(e){
		if (e.which === 13) {//emter key
			if ($("#signup-modal").is(":visible")) {
				$("#signup").trigger("click");
			}
			if ($("login-modal").is(":visible")){
				$("#login").trigger("click");
			}
		}
	});
	//setheader if we
	var token = window.localStorage.getItem("sessionToken");
	if (token) {
		WorkoutLog.setAuthHeader(token);
	}

	//expose this to the other owrkoutlog modules
	window.WorkoutLog = WorkoutLog;

});
