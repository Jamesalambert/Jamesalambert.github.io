var isCrossTurn = true;


function tappedSquare(buttonID){
	var button = document.getElementById(buttonID);

// 	check to see if the button 
	if(button.className == "square cross" || button.className == "square nought"){
		console.log("tried to click on an occupied square!");
		return;
	}
	
	if(isCrossTurn){
		button.className = "square cross";
        button.innerHTML = "x";
	} else {
		button.className = "square nought";
        button.innerHTML = "o";
	}
	isCrossTurn = !isCrossTurn;
}


function reset(){
    //reset the buttons!
    var buttons = document.getElementsByClassName("square");
    
    for(var i=0; i < buttons.length; i++){
        buttons[i].innerHTML = "";
        buttons[i].className = "square";
    }
    isCrossTurn = true;
}