// The trivia questions

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
				 ],
		correctAnswer: ``,
		correctImg: ``
	},{
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
				 ],
		correctAnswer: ``,
		correctImg: ``
	},{
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
				 ],
		correctAnswer: ``,
		correctImg: ``
	},{
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
				 ],
		correctAnswer: ``,
		correctImg: ``
	},{
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
				 ],
		correctAnswer: ``,
		correctImg: ``
	},{
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
				 ],
		correctAnswer: ``,
		correctImg: ``
	},{
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
				 ],
		correctAnswer: ``,
		correctImg: ``
	},{
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
				 ],
		correctAnswer: ``,
		correctImg: ``
	},{
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
				 ],
		correctAnswer: ``,
		correctImg: ``
	},{
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
				 ],
		correctAnswer: ``,
		correctImg: ``
	}
];

// Adds a trivia question based on the index to the and returns the index of the correct answer.


function sendQuestion(ind){
	
	$("#question").html(triviaQuestions[ind].question);

	let correct = -1;

	for( let i = 0 ; i < 4 ; ++i ){
		$("#answer" + i).text(triviaQuestions[ind].answers[i].name);
		if(triviaQuestions[ind].answers[i].correct)
			correct = i;
	}
	return correct;
}

// When the document loads;

$(document).on("ready",function(){


	let timer;
	let time = 30;
	let currentQuestion = 0;
	let correctAnswer;

	// Sets the timer interval;

	function startTimer(){
		timer = setInterval(()=>{

			--time;
			$("#time").text(time);

			if(time === 0)
				stopTimer(-1);
			
		},1000);
	}

	// Stops the timer with an answer 

	function stopTimer(ans){

		clearInterval(timer);
		console.log("you answered " + ans);
		showAnswer(correctAnswer === ans);

	}

	// Hides the trivia question window and shows the correct answer and answer image before sending the next question

	function showAnswer(correct){
		console.log("your choice was " + correct);
	}

	console.log("ready eddy");

	// Sets the windows in the appropriate places

	$("#title-window").appendTo("#display-window");
	$("#trivia-window").appendTo("#hidden");
	$("#score-window").appendTo("#hidden");

	// Starts the game

	$("#click-here").on("click",function(){

		$("#title-window").appendTo("#hidden");
		$("#trivia-window").appendTo("#display-window");
		correctAnswer = sendQuestion(currentQuestion);
		startTimer();

	});

	// Stops the timer when an answer is clicked

	$(".answer").on("click",function(){
		stopTimer(parseInt(this.id.split("r")[1]));
	});	

});