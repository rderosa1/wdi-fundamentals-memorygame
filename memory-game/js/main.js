console.log("Up and running!");


const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User has flipped " + cardsInPlay);

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("user has flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('Congrats, You found a match');

	}	else {
		alert('sorry, no match, try again');
	}	


}