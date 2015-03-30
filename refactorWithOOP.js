var Player = function(player) {
		this.player = player;
	};

var TicTacToe = function() {
		alert("Let's Play Tic Tac Toe!");
		this.playerX = new Player("X");
		this.playerO = new Player("O");
    this.message = $('#message');
		this.currentTurn = this.playerX.player;
		this.board = $("#board");
		this.refreshBoard = $("#refreshBoard");
		this.startGame = $("#startGame");
    this.body = $("body");
	};

  TicTacToe.prototype.initialMessage = function() {
    return this.message.html("Player " + this.currentTurn + " has the first turn...");
  };

TicTacToe.prototype.switchPlayer = function() {
        if (this.currentTurn === this.playerX.player) {
            this.currentTurn = this.playerO.player;
        } else if (this.currentTurn === this.playerO.player) {
            this.currentTurn = this.playerX.player;
        }
    };

TicTacToe.prototype.evaluateWinner = function() {
  var box = $(".box");
  if (((box[0].innerHTML == "X") && (box[1].innerHTML == "X") && (box[2].innerHTML == "X")) ||
    ((box[3].innerHTML == "X") && (box[4].innerHTML == "X") && (box[5].innerHTML == "X")) ||
    ((box[6].innerHTML == "X") && (box[7].innerHTML == "X") && (box[8].innerHTML == "X")) ||
    ((box[0].innerHTML == "X") && (box[4].innerHTML == "X") && (box[8].innerHTML == "X")) ||
    ((box[6].innerHTML == "X") && (box[4].innerHTML == "X") && (box[2].innerHTML == "X")) ||
    ((box[0].innerHTML == "X") && (box[3].innerHTML == "X") && (box[6].innerHTML == "X")) ||
    ((box[1].innerHTML == "X") && (box[4].innerHTML == "X") && (box[7].innerHTML == "X")) ||
    ((box[2].innerHTML == "X") && (box[5].innerHTML == "X") && (box[8].innerHTML == "X"))) {
      this.message.html("");
      this.board.off("click");
      alert("X Wins!");
      this.body.css("background-image", "url(http://thumbs.dreamstime.com/z/oh-yeah-comic-speech-bubble-cartoon-art-illustration-vector-file-42808580.jpg)").css("background-size","cover");
      return this.message.html("The Winner is X!").css("font-size", "35px");
  } else if (((box[0].innerHTML == "O") && (box[1].innerHTML == "O") && (box[2].innerHTML == "O")) ||
    ((box[3].innerHTML == "O") && (box[4].innerHTML == "O") && (box[5].innerHTML == "O")) ||
    ((box[6].innerHTML == "O") && (box[7].innerHTML == "O") && (box[8].innerHTML == "O")) ||
    ((box[0].innerHTML == "O") && (box[4].innerHTML == "O") && (box[8].innerHTML == "O")) ||
    ((box[6].innerHTML == "O") && (box[4].innerHTML == "O") && (box[2].innerHTML == "O")) ||
    ((box[0].innerHTML == "O") && (box[3].innerHTML == "O") && (box[6].innerHTML == "O")) ||
    ((box[1].innerHTML == "O") && (box[4].innerHTML == "O") && (box[7].innerHTML == "O")) ||
    ((box[2].innerHTML == "O") && (box[5].innerHTML == "O") && (box[8].innerHTML == "O"))) {
      this.message.html("");
      this.board.off("click");
      alert("O Wins!");
      this.body.css("background-image", "url(http://thumbs.dreamstime.com/z/oh-yeah-comic-speech-bubble-cartoon-art-illustration-vector-file-42808580.jpg)").css("background-size","cover");
      return this.message.html("The Winner is O!").css("font-size", "35px");
    }
};

TicTacToe.prototype.selectSquare = function() {
  var _this = this;
  this.board.click(function(event) {
  if (event.target.innerHTML == "&nbsp;" && _this.message.innerHTML !== "The Winner is O!" && _this.message.innerHTML !== "The Winner is X!") {
      $(event.target).html(_this.currentTurn);
      _this.switchPlayer();
      _this.message.html("It is " + _this.currentTurn + "'s turn...");
      _this.evaluateWinner();
    }
  })
};

TicTacToe.prototype.listenForNewBoard = function() {
    var _this = this;
    this.refreshBoard.click(function(event) {
      _this.switchPlayer();
      $(".box").html("&nbsp");
      _this.body.css("background-image","");
      _this.message.html("Let's play another game!  This time, " + _this.currentTurn + " will start.").css("font-size", "18px");
    })
  };


$(document).ready(function(){
  $('#startGame').click(function(event) {
      var newGame = new TicTacToe();
      $(".box").html("&nbsp");
      newGame.body.css("background-image","");
      newGame.message.css("font-size", "18px")
      newGame.selectSquare();
      newGame.initialMessage();
      newGame.listenForNewBoard();
    });
});