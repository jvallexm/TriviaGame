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
		correctAnswer: `<h2 id="ans-title"><strong>Jack Kirby</strong> the King Of Comics</h2><p>Stan Lee didn't have anything to do with creating Captain America. Heck, his first published comics work was a short prose story in Captain America Comics #7</p>`,
		correctImg: ``
	},{
		question: `Which of the following single issues is considered to be the first comic that collectors bought speculating it would go up in value on it's initial release?`,
		answers : [
					{
					 name: "Crisis on Infinite Earths #7 (1985)",
					 correct: false
					},
					{
					 name: "Superman #75 (1993)",
					 correct: false
					},
					{
					 name: "Howard the Duck #1 (1976)",
					 correct: true
					},
					{
					 name: "Fantastic Four #1 (1961)",
					 correct: false
					}
				 ],
		correctAnswer: `<h2 id="ans-title">Howard the Duck #1</h2>
						<p>Our fine feathered friend <strong>Howard the Duck</strong>! One of the first #1 issues that was released after publishers started shipping titles directly to pecialty comic shops in the 1970s.</p>`,
		correctImg: ``
	},{
		question: `Comics sure have had a lot of wacky crossovers. Say, which one of these four hasn't actually seen print?`,
		answers : [
					{
					 name: "Archie vs Predator",
					 correct: false
					},
					{
					 name: "Superman Planet of the Apes",
					 correct: true
					},
					{
					 name: "The Flash and Colonel Sanders",
					 correct: false
					},
					{
					 name: "Star Trek and Doctor Who",
					 correct: false
					}
				 ],
		correctAnswer: `<h2 id="ans-title">Superman Planet of the Apes</h2>
						<p>While Green Lantern may have visted the Planet of the Apes, Superman hasn't! Though definitely make sure to read that Archie vs Predator book, its pretty incredible.</p>`,
		correctImg: ``
	},{
		question: `With the help of Will Murray, which one of these classic Marvel creators returned to the company after a long haitus to pencil the first appearance of Squirrel Girl?`,
		answers : [
					{
					 name: "Don Heck",
					 correct: false
					},
					{
					 name: "Neal Adams",
					 correct: false
					},
					{
					 name: "Steranko",
					 correct: false
					},
					{
					 name: "Steve Ditko",
					 correct: true
					}
				 ],
		correctAnswer: `<h2 id="ans-title">Steve Ditko!</h2>
						<p>That's right, the original artist for Spider-Man <strong>Steve Ditko</strong> returned to Marvel to bring his classic art to an amazing story!</p>`,
		correctImg: ``
	},{
		question: `...speaking of classic Marvel creators--which old school Marvel employee was famously lampooned as Funky Flashman, an overblown self promoter first appearing in Jack Kirby's Mister Miracle #6?`,
		answers : [
					{
					 name: "Stan Lee",
					 correct: true
					},
					{
					 name: "Gene Colon",
					 correct: false
					},
					{
					 name: "Roy Thomas",
					 correct: false
					},
					{
					 name: "John Buscema",
					 correct: false
					}
				 ],
		correctAnswer: `<h2 id="ans-title">Stan "The Man" Lee</h2>
						<p>It's no secret that Kirby resented Lee for promoting himself solely based on the talent of Kirby's tireless work at Marvel with nothing to show for it. So when Kirby left for DC Comics (where he got full creative control over his books) he thought he'd throw a little shade. Maybe it should sy Stan the Con Man Lee instead!</p>`,
		correctImg: ``
	},{
		question: `So we've spent a lot of time talking about Marvel--let's talk DC! Which of the following mysical characters first debuted in the pages of <i>Hawkman</i>?`,
		answers : [
					{
					 name: "John Constantine",
					 correct: false
					},
					{
					 name: "Sargon the Sorcerer",
					 correct: false
					},
					{
					 name: "Zatanna",
					 correct: true
					},
					{
					 name: "Black Alice",
					 correct: false
					}
				 ],
		correctAnswer: `<h2 id="ans-title">Zatanna</h2><p>That's right everyone's favorite backward speaking magician <strong>Zatanna</strong> made her first appearance in 1965's Hawkman #4. Though maybe she's changed just a bit since then!</p>`,
		correctImg: ``
	},{
		question: ``,
		answers : [
					{
					 name: "",
					 correct: true
					},
					{
					 name: "",
					 correct: false
					},
					{
					 name: "",
					 correct: false
					},
					{
					 name: "",
					 correct: false
					}
				 ],
		correctAnswer: `<h2 id="ans-title"></h2><p></p>`,
		correctImg: ``
	},{
		question: ``,
		answers : [
					{
					 name: "",
					 correct: true
					},
					{
					 name: "",
					 correct: false
					},
					{
					 name: "",
					 correct: false
					},
					{
					 name: "",
					 correct: false
					}
				 ],
		correctAnswer: `<h2 id="ans-title"></h2><p></p>`,
		correctImg: ``
	},{
		question: ``,
		answers : [
					{
					 name: "",
					 correct: true
					},
					{
					 name: "",
					 correct: false
					},
					{
					 name: "",
					 correct: false
					},
					{
					 name: "",
					 correct: false
					}
				 ],
		correctAnswer: `<h2 id="ans-title"></h2><p></p>`,
		correctImg: ``
	},{
		question: ``,
		answers : [
					{
					 name: "",
					 correct: true
					},
					{
					 name: "",
					 correct: false
					},
					{
					 name: "",
					 correct: false
					},
					{
					 name: "",
					 correct: false
					}
				 ],
		correctAnswer: `<h2 id="ans-title"></h2><p></p>`,
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

			},8000);

		// If the user has made it through all four rounds it shows the totals screen

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