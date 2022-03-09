var isCrossTurn = true;

var WINNING_LINES = ['abc','def','ghi','adg','beh','cfi','aei','ceg'];

var noughtsSquares = ""; //-> does this contain either "abc" or "def" ???
var crossesSquares = "";  
var winner = "";

function tappedSquare(buttonID){
	var button = document.getElementById(buttonID);

// THIS SHOULD CHECK THE MODEL NOT THE UI
// 	check to see if the button has been clicked before.
	if(button.className == "square cross" || button.className == "square nought"){
		console.log("tried to click on an occupied square!");
		return;
	}
	
	if(isCrossTurn){
		button.className = "square cross";
        button.innerHTML = "x";
		crossesSquares += buttonID;
	} else {
		button.className = "square nought";
    	button.innerHTML = "o";
		noughtsSquares += buttonID;
	}
	// console.log(noughtsSquares);
// 	console.log(crossesSquares);
	
// 	check to see if there is a winner
	checkForAWinner();
// if there is what should we do?????
	if (winner != ""){
		displayWinner();
	}

	isCrossTurn = !isCrossTurn;
}


function displayWinner(){
	var banner = document.getElementById("winner");
	banner.innerHTML = winner;
}


// control functions
function checkForAWinner(){
// check to see if noughts or crosses has won
//  if so then ...???
	if (hasWon(noughtsSquares)){
		winner = "noughts";
	} else if (hasWon(crossesSquares)) {
		winner = "crosses";
	}
	console.log(winner);
}

// 	go through every winning line to see if it occurs in noughts or crosses squares
function hasWon(playerString){
	for (const line of WINNING_LINES) {
		if (containsEveryLetter(playerString, line)){
			return true;
		} else {
			continue;
		}
	}
	return false;
}


// checks to see if every letter in smallString occurs in testString
// "james" contains every letter of "sam" etc
function containsEveryLetter(testString, smallString){
	for (const letter of smallString){
		if (testString.includes(letter)){
			continue;
		} else {
			return false;
		}
	}
	return true;
}





function reset(){
    //reset the buttons
    var buttons = document.getElementsByClassName("square");
    for(var i=0; i < buttons.length; i++){
        buttons[i].innerHTML = "";
        buttons[i].className = "square";
    }
    //reset turns
    isCrossTurn = true;
    
    //reset memory
    noughtsSquares = "";
	crossesSquares = "";
	winner = "";
}