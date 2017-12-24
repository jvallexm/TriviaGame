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
		correctAnswer: `<h3 id="ans-title"><strong>Jack Kirby</strong> the King Of Comics</h3><p>Stan Lee didn't have anything to do with creating Captain America. Heck, his first published comics work was a short prose story in Captain America Comics #7</p>`,
		correctImg: ``
	},{
		question: `How Many?`,
		answers : [
					{
					 name: "Five",
					 correct: false
					},
					{
					 name: "Seven",
					 correct: true
					},
					{
					 name: "None",
					 correct: false
					},
					{
					 name: "Negative One",
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
	let correctAnswer;
	let time            = 30;
	let currentQuestion = 0;
	let correct         = 0;
	let incorrect       = 0;
	let unanswered      = 0;

	// Appends hidden elements to the display window

	function show(id){
		$("#" + id). appendTo("#display-window");
	}

	// Appends elements from the display to the hidden div

	function hide(id){
		$("#" + id).appendTo("#hidden");
	}

	// Resets all the stats for another play through

	function doOver(){
		time            = 30;
		currentQuestion = 0;
		correct         = 0;
		incorrect       = 0;
	    unanswered      = 0;
	    nextQuestion();
	}

	// Shows the final stats at the end of the game 

	function showTotals(){
		hide("answer-window");
		show("totals-window");
		$("#correct").text(correct);
		$("#incorrect").text(incorrect);
		$("#unanswered").text(unanswered);
	}

	// Sets the timer interval. Stops the time with an answer of "-1" if 30 seconds has elapsed

	function startTimer(){
		time  = 30;
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
		if(ans === -1)
			unanswered++;
		else if(ans === correctAnswer)
			correct++;
		else
			incorrect++;
		showAnswer(correctAnswer === ans);

	}

	// Hides the trivia question window and shows the correct answer and answer image before sending the next question

	function showAnswer(correct){
		if(correct)
			$("#answer-text").text("Correct!");
		else
			$("#answer-text").text("Incorrect! :(");
		$("#answer-exp").html(triviaQuestions[currentQuestion].correctAnswer);
		hide("trivia-window");
		show("answer-window");

		// If the user hasn't answered all the questions it shows the answer before going to the next question

		if(currentQuestion !== 9) {

			setTimeout(()=>{

				++ currentQuestion;
				hide("answer-window");
				nextQuestion();

			},3000);

		} else {

			showTotals();

		}

	}

	function nextQuestion(){

		show("trivia-window");
		$("#question-number").text(currentQuestion + 1);
		correctAnswer = sendQuestion(currentQuestion);
		startTimer();

	}

	console.log("ready eddy");

	// Sets the windows in the appropriate places

	show("title-window");
	hide("trivia-window");

	// Starts the game

	$("#click-here").on("click",function(){

		hide("title-window");
		nextQuestion();

	});

	// Stops the timer when an answer is clicked

	$(".answer").on("click",function(){
		stopTimer(parseInt(this.id.split("r")[1]));
	});	

	// Lets the user play again once play again has been clicked

	$("#play-again").on("click", function(){
		hide("totals-window");
		doOver();
	});

});