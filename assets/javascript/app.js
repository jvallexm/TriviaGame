console.log("hot poppers");

$(document).on("ready",function(){

	console.log("ready eddy");
	var timer;

	// Sets the windows in the appropriate places
	$("#title-window").appendTo("#display-window");
	$("#trivia-window").appendTo("#hidden");
	$("#score-window").appendTo("#hidden");

	$("#click-here").on("click",function(){

		$("#title-window").appendTo("#hidden");
		$("#trivia-window").appendTo("#display-window");

	});

});