// testing console is working
console.log("Up and running!");
console.log("-----------------");
// an array to hold card values
var cards = ["queen","queen","king","king"];
// an array to hold selected cards
var cardsInPlay = [];
// var to hold first selected card
var cardOne = cards[0];
// pushes the selected card to in play array
cardsInPlay.push(cardOne);
//log first card in play
console.log("User flipped "+ cardsInPlay[0]);

// var to hold second selected card
var cardTwo = cards[1];
// push second selected card into in play
cardsInPlay.push(cardTwo);
//logs second card in play
console.log("User flipped "+ cardsInPlay[1]);
//
if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    } else {
        alert("Sorry, try again.")
    }
}