window.onload = function() {

// getInterval(function() {
// 	console.log("I'm getting ran");
//  	var randColorValue = function() {
//  		return Math.floor( Math.random() * 255 );
// 		}

// 	var randColor = function() {
//  		var red = randColorValue();
//  		var green = randColorValue();
//  		var blue = randColorValue();
//  		return "rgb(red + "," + green + "," + blue)";
//  		}

// 	$("h1").css("color", randColor() );
// 	}, 1000);

	var startButton = document.getElementById("startGame");

	startButton.addEventListener("click", function(event) {
	var refreshButton = document.getElementById("refreshBoard");
	var board = document.getElementById("board");
	var box = document.getElementsByClassName("box");
	// var boxText = document.getElementsByClassName("boxText");
	var turn = "X";

	// var boxClone = ["NA","NA","NA","NA","NA","NA","NA","NA","NA"];

	var message = document.getElementById("message");
	
	var switchPlayer = function() {
		if (turn === "X"){
			turn = "O";
		} else if (turn === "O") {
			turn = "X";
		}
	}
	
	var playerMove = function() {
		switchPlayer();
		return turn;
	}

	var evaluateWinner = function() {
		if (((box[0].innerHTML == "X") && (box[1].innerHTML == "X") && (box[2].innerHTML == "X")) ||
			((box[3].innerHTML == "X") && (box[4].innerHTML == "X") && (box[5].innerHTML == "X")) ||
			((box[6].innerHTML == "X") && (box[7].innerHTML == "X") && (box[8].innerHTML == "X")) ||
			((box[0].innerHTML == "X") && (box[4].innerHTML == "X") && (box[8].innerHTML == "X")) ||
			((box[6].innerHTML == "X") && (box[4].innerHTML == "X") && (box[2].innerHTML == "X")) ||
			((box[0].innerHTML == "X") && (box[3].innerHTML == "X") && (box[6].innerHTML == "X")) ||
			((box[1].innerHTML == "X") && (box[4].innerHTML == "X") && (box[7].innerHTML == "X")) ||
			((box[2].innerHTML == "X") && (box[5].innerHTML == "X") && (box[8].innerHTML == "X"))) {
				alert("X Wins!");
				$("body").css("background-image", "url(http://thumbs.dreamstime.com/z/oh-yeah-comic-speech-bubble-cartoon-art-illustration-vector-file-42808580.jpg)").css("background-size","cover");
				return message.innerHTML = "The Winner is X!";
			} else if (((box[0].innerHTML == "O") && (box[1].innerHTML == "O") && (box[2].innerHTML == "O")) ||
			((box[3].innerHTML == "O") && (box[4].innerHTML == "O") && (box[5].innerHTML == "O")) ||
			((box[6].innerHTML == "O") && (box[7].innerHTML == "O") && (box[8].innerHTML == "O")) ||
			((box[0].innerHTML == "O") && (box[4].innerHTML == "O") && (box[8].innerHTML == "O")) ||
			((box[6].innerHTML == "O") && (box[4].innerHTML == "O") && (box[2].innerHTML == "O")) ||
			((box[0].innerHTML == "O") && (box[3].innerHTML == "O") && (box[6].innerHTML == "O")) ||
			((box[1].innerHTML == "O") && (box[4].innerHTML == "O") && (box[7].innerHTML == "O")) ||
			((box[2].innerHTML == "O") && (box[5].innerHTML == "O") && (box[8].innerHTML == "O"))) {
				alert("O Wins!")
				$("body").css("background-image", "url(http://thumbs.dreamstime.com/z/oh-yeah-comic-speech-bubble-cartoon-art-illustration-vector-file-42808580.jpg)").css("background-size","cover");
				return message.innerHTML = "The Winner is O!";
			}
		}
	
	$("#startGame").hide();

	alert("Let's Play Tic Tac Toe!");

	for (var i = 0; i < box.length; i++) {
		box[i].innerHTML = "&nbsp;";
		};
	
	message.innerHTML = "Welcome to the Game!  Player " + turn + " has the first turn...";
	
	board.addEventListener("click", function(event) {
		var boxClicked = event.target;
		if ((boxClicked.innerHTML === "&nbsp;") &&
			(message.innerHTML !== "The Winner is O!") &&
			(message.innerHTML !== "The Winner is X!")) {
				boxClicked.innerHTML = turn;
				switchPlayer();
				message.innerHTML = "It is " + turn + "'s turn...";
				evaluateWinner();
		}
	});


	refreshButton.addEventListener("click", function(event) {
		for (var i = 0; i < box.length; i++) {
			box[i].innerHTML = "&nbsp;";
			};
			$("body").css("background-image","");
		message.innerHTML = "Let's play another game!  This time, " + turn + " will start.";
	});
});


};