// the internal representation of the cardBoard
var cardBoard, row, col;

// game on or not
var gameStart = false;

// calculus time
var minute;
var second;

// timer start or not
var timerStarted = false;

// when user choose the size this function  use an array to store 8, 18, 32 or 50 pair of cards with the same pattern
function initializeCard(size) {
	var cardTable = document.getElementById("cardTable");
	cardTable.innerHTML = "";
	for (var i = 0; i < size; i++) {
		var tr = document.createElement("tr");
		cardTable.appendChild(tr)
		for (var j = 0; j < size; j++) {
			td = document.createElement("td");
			tr.appendChild(td);
			img = document.createElement("img");
			img.src = "image/cover.png";
			img.id = "card" + i + j;
			img.onclick = clickCard;
			img.setAttribute("class","uncheck");
			tr.appendChild(img);
		}
	}
	// create an array hold the faceup cards
	cardBoard = new Array();
	for (row = 0; row < size; row++){
		cardBoard[row] = new Array();
		for (col = 0; col < size; col++)
			cardBoard[row][col] = "";
	}

	// put the random same pattern of pair of cards to array
	for (row = 0; row < cardBoard.length / 2; row++){
		for (col = 0; col < cardBoard[row].length; col++){
			randomIndex = Math.floor(Math.random()*50);
			cardBoard[row][col] = "image/sport_" + randomIndex + ".png";
			cardBoard[row+(size/2)][col] = "image/sport_" + randomIndex + ".png";
		}	
	}
	
	// shuffle card code here:
	for (row = 0; row < cardBoard.length; row++){
		for (col = 0; col < cardBoard[row].length; col++){
			var row1 = Math.floor(Math.random() * cardBoard.length);
			var col1 = Math.floor(Math.random() * cardBoard[row].length);
			var temp = cardBoard[row][col];
			cardBoard[row][col] = cardBoard[row1][col1];
			cardBoard[row1][col1] = temp;
		}	
	}

	// game star right now
	gameStart = true;
	//timerStarted == false;
	document.getElementById("win").style.visibility="hidden";
	document.getElementById("second").innerHTML = 0;
	document.getElementById("minute").innerHTML = 0;
}

// click the two card once
function clickCard() {
	row = this.id[4];
	col = this.id[5];
	if (timerStarted == false){
		startTimer();
		timerStarted = true;	
	}
	clickedImg = document.getElementById("card" + row + col);
	if (gameStart == true && clickedImg.getAttribute("class") != "checked") {
		clickedImg.src=cardBoard[row][col];
		clickedImg.setAttribute("class", "checking");
		compareCard();
	}
}

// compare the two faceup
function compareCard() {
	checkingImgs = document.getElementsByClassName("checking");
	if (checkingImgs.length == 2 ){ // There are 2 card been fliped, check if they are the same card
		if (checkingImgs[0].src == checkingImgs[1].src) {
			checkingImgs[0].setAttribute("class", "checked");
			// since the first element does not blongs to class checked any more,
			// it was deleted from checkingImgs. Now the only element lef in the array is checkingImgs[0]
			checkingImgs[0].setAttribute("class", "checked");
			checkWin();
		} else { // two cards are fliped, check if it is a hit or miss
			gameStart = false;
			setTimeout(function(){
				gameStart = true;
				checkingImgs[0].src = "image/cover.png";
				checkingImgs[1].src = "image/cover.png";
				checkingImgs[0].setAttribute("class", "uncheck");
				checkingImgs[0].setAttribute("class", "uncheck"); 
			}, 3000)
		}
	}
}

function checkWin() {
	if (document.getElementsByClassName("uncheck").length == 0){
		document.getElementById("win").style.visibility="visible";
		gameStart = false;
		
		// clear all the setting of timer
		clearTimeout(minute);
		clearTimeout(second);
		timerStarted = false;
	}
}

function startTimer(){
	minute = setInterval(function(){
		document.getElementById("minute").innerHTML++;
	}, 60000);
	second = setInterval(function(){
		if ((document.getElementById("second").innerHTML) == 60)
			document.getElementById("second").innerHTML = 0;
		else
			document.getElementById("second").innerHTML++;
	}, 1000);
}