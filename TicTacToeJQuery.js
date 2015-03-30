$(function() {

// setInterval(function() {
// console.log("I'm getting ran");
//  var randColorValue = function() {
//  return Math.floor( Math.random() * 255 );
// }

// var randColor = function() {
//  var red = randColorValue();
//  var green = randColorValue();
//  var blue = randColorValue();
 
//  return "rgb(" + red + "," + green + "," + blue + ")";
 
// }

// Generate a random color and apply to the color style attribute - test by clicking "Run with JS"
// $("h1").css("color", randColor() );
// }, 500)

	$("#startGame").click(function(event) {
	var turn = "X";
	console.log("stuff");
	
	var switchPlayer = function() {
		if (turn === "X"){
			turn = "O";
		} else if (turn === "O") {
			turn = "X";
		}
	};
	
	var playerMove = function() {
		switchPlayer();
		return turn;
	};

	var evaluateWinner = function() {
		if (($("#b0").html() === "X" && $("#b1").html() === "X" && $("#b2").html() === "X") ||
			($("#b3").html() === "X" && $("#b4").html() === "X" && $("#b5").html() === "X") ||
			($("#b6").html() === "X" && $("#b7").html() === "X" && $("#b8").html() === "X") ||
			($("#b0").html() === "X" && $("#b4").html() === "X" && $("#b8").html() === "X") ||
			($("#b6").html() === "X" && $("#b4").html() === "X" && $("#b2").html() === "X") ||
			($("#b0").html() === "X" && $("#b3").html() === "X" && $("#b6").html() === "X") ||
			($("#b1").html() === "X" && $("#b4").html() === "X" && $("#b7").html() === "X") ||
			($("#b2").html() === "X" && $("#b5").html() === "X" && $("#b8").html() === "X")) {
				alert("X Wins!");
				$("body").css("background-image", "url(http://thumbs.dreamstime.com/z/oh-yeah-comic-speech-bubble-cartoon-art-illustration-vector-file-42808580.jpg)").css("background-size","cover");
				return $("#message").html("The Winner is X!");
			} else if (($("#b0").html() === "O" && $("#b1").html() === "O" && $("#b2").html() === "O") ||
			($("#b3").html() === "O" && $("#b4").html() === "O" && $("#b5").html() === "O") ||
			($("#b6").html() === "O" && $("#b7").html() === "O" && $("#b8").html() === "O") ||
			($("#b0").html() === "O" && $("#b4").html() === "O" && $("#b8").html() === "O") ||
			($("#b6").html() === "O" && $("#b4").html() === "O" && $("#b2").html() === "O") ||
			($("#b0").html() === "O" && $("#b3").html() === "O" && $("#b6").html() === "O") ||
			($("#b1").html() === "O" && $("#b4").html() === "O" && $("#b7").html() === "O") ||
			($("#b2").html() === "O" && $("#b5").html() === "O" && $("#b8").html() === "O")) {
				alert("O Wins!")
				$("body").css("background-image", "url(http://thumbs.dreamstime.com/z/oh-yeah-comic-speech-bubble-cartoon-art-illustration-vector-file-42808580.jpg)").css("background-size","cover");
				return $("#message").html("The Winner is O!");
			}
		};
	
	$("#startGame").hide();

	alert("Let's Play Tic Tac Toe!");

	$(".box").html("&nbsp");
	
	$("#message").html("Welcome to the Game!  Player " + turn + " has the first turn...");
	
	$("#board").click(function(event) {
		if ($(event.target).html() === "&nbsp;" &&
			$("message").html() !== "The Winner is O!" &&
			$("message").html() !== "The Winner is X!") {
				$(event.target).html(turn);
				switchPlayer();
				$("#message").html("It is " + turn + "'s turn...");
				evaluateWinner();
		}
	});

	$("#refreshBoard").click(function(event) {
		$(".box").html("&nbsp");
		$("body").css("background-image","");
		$("#message").html("Let's play another game!  This time, " + turn + " will start.");
	});
});



});




