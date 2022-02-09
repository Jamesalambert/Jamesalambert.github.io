var isCrossTurn = true;

var WINNING_LINES = ['abc','def','ghi','adg','beh','cfi','aei','ceg'];

var noughtsSquares = ""; //-> does this contain either "abc" or "def" ???
var crossesSquares = "";  


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
	console.log(noughtsSquares);
	console.log(crossesSquares);
// 	check to see if there is a winner
	
// if there is what should we do?????

	isCrossTurn = !isCrossTurn;
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
}