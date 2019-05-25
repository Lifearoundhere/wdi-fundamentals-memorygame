var cards = [
{
rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png",
},
{
rank:"queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png",
},
{
rank:"king",
suit:"hearts",
cardImage:"images/king-of-hearts.png",
},
{
rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png",
},
];

var cardsInPlay =[];

function checkForMatch() {
	if (cardsInPlay.length == 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
  			console.log("You found a match!");
  			alert("You found a match!");
		} else {
  			console.log("Sorry, try again.")
  			alert("Sorry, try again.");
  			location.reload();
  		}
	}
};

function flipCard() {

//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);
//var cardTwo = cards[2];
var cardId = this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank)
this.src = cards[cardId].cardImage;
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);
/*
if (cardsInPlay.length === 2) {
	//alert("User flipped " + cardsInPlay);
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
		}else{
		alert("Sorry, try again.")
	}
}
*/

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

}
//flipCard(0);
//flipCard(2);
//Console.log("User flipped " + cardsInPlay)
function createBoard(){

	for (var i = 0; i < cards.length; i++) {
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute('src', "images/back.png");
    	cardElement.setAttribute('data-id', i);
    	//cardElement.appendChild('game-board');
    	cardElement.addEventListener('click', flipCard)
    	document.getElementById('game-board').appendChild(cardElement);
}

};
createBoard();

function restartGame(){

	location.reload();
}
