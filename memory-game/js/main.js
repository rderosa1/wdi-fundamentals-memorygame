console.log("Up and running!");


// const cards = ["queen", "queen", "king", "king"];

const cards = [ 
	{ 
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},

	{ 
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},

	{ 
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},

	{ 
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}, 
];

const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You FOUND A MATCH!");
	} else {
		console.log("Sorry, no match, try again.");
	}
};

function flipCard(cardId){

	console.log("User has flipped " + cards[cardId].rank);	

	 cardsInPlay.push(cards[cardId].rank);

	 console.log(cards[cardId].cardImage);
	 console.log(cards[cardId].suit);

if (cardsInPlay.length === 2) {

		checkForMatch();

}

};

flipCard(0);
flipCard(2);

