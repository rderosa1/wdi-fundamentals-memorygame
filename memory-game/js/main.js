console.log("Up and running!");


const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You FOUND A MATCH!");
	} else {
		console.log("Sorry, no match, try again.");
	}
};

function flipCard(cardId){

	console.log("User has flipped " + cards[cardId]);	

	 cardsInPlay.push(cards[cardId]);

if (cardsInPlay.length === 2) {

		checkForMatch();

}

};

flipCard(0);
flipCard(2);

