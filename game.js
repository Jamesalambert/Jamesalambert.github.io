var isCrossTurn = True;

function tappedSquare(buttonID){
	let button = document.getElementById(buttonID);
	if(isCrossTurn){
		button.className = "square cross";
	} else {
		button.className = "square nought";
	}
	
	isCrossTurn = !isCrossTurn;
	
}