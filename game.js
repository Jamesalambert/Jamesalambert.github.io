var WINNING_LINES = ['abc','def','ghi','adg','beh','cfi','aei','ceg'];

// game state
var isCrossTurn = true;
var noughtsSquares = ""; //-> does this contain either "abc" or "def" ???
var crossesSquares = "";  
var winner = "";

function tappedSquare(buttonID){
	var button = document.getElementById(buttonID);

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
	
// 	check to see if there is a winner
	checkForAWinner();
	if (winner != ""){
		displayWinner();
	}
	//switch to the next player
	isCrossTurn = !isCrossTurn;
}


function displayWinner(){
	var banner = document.getElementById("winner");
// 	TODO: change the colour depending on the winner
	banner.style.backgroundColor = 'red';
	banner.innerHTML = `${winner} has won!`;
}


// control functions
function checkForAWinner(){
// check to see if noughts or crosses has won
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
    //reset the view
    const buttons = document.getElementsByClassName("square");
    for(const button of buttons){
        button.innerHTML = "";
        button.className = "square";
    }
    
	const winningMessage = document.getElementById("winner");
	winningMessage.innerHTML = "";
    
    //reset state
    isCrossTurn 	= true;
    noughtsSquares 	= "";
	crossesSquares 	= "";
	winner 			= "";
}