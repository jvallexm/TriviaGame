console.log("hot poppers");

const triviaQuestions = [
	{
		question: `Which of these comics legends created Captain America, the Human Torch, the X-Men and invented the genre of Romance comics?`,
		answers : [
					{
					 name: "Jack Kirby",
					 correct: true
					},
					{
					 name: "Stan Lee",
					 correct: false
					},
					{
					 name: "Wally Wood",
					 correct: false
					},
					{
					 name: "Don Heck",
					 correct: false
					}
				 ]
	}
];

// Adds a trivia question based on the index to the window.



function sendQuestion(ind){
	
	$("#question").html(triviaQuestions[ind].question);

	for( let i = 0 ; i < 4 ; ++i ){
		$("#answer" + i).attr("iscorrect",triviaQuestions[ind].answers[i].correct)
					    .text(triviaQuestions[ind].answers[i].name);
	}

}

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
		sendQuestion(0);

	});

	$(".answer").on("click",function(){
		console.log();
	});	

});