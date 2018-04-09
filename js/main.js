// testing console is working
console.log("Up and running!");
console.log("-----------------");
// an array to hold card values
var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage:"images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage:"images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage:"images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage:"images/king-of-diamonds.png"
    }
];
// an array to hold selected cards
var cardsInPlay = [];

//defined a function for fliping cards
var flipCard = function (){
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped "+cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
   }
// creates game board
var createBoard = function(){
    for (var i = 0; i < cards.length; i++){
        var cardElement = document.createElement("img");
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById('game-board').appendChild(cardElement);

    }
}

 //function to check for match
 var checkForMatch = function(){
    // if statement to check how many cards are in play and validate if they match.
       if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match!");
     } else {
         alert("Sorry, try again.")
            }
        }
    }

createBoard();