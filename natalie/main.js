// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);

var orderSuitRank = function(a,b) {
  if (a.suit() > b.suit()) return 1;
  if (a.suit() < b.suit()) return -1;
  if (a.suit() === b.suit()) {
    if (a.rank() > b.rank()) return 1;
    if (a.rank() < b.rank()) return -1;
  }
  return 0;
}

var cardNameSort = function(a,b) {
  if (a.name() > b.name()) return 1;
  if (a.name() < b.name()) return -1;
  return 0;
}

deckOfCards.sort(orderSuitRank);

deckOfCards.cut();
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

deckOfCards.sort(cardNameSort);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');



// 2c:
// make a deque instance to store student names:
var deckOfNames = makeDeque(['Natalie','Molly','Sarah','Harrison','Elijah', 'Chad', 'Elizabeth', 'Anastasia', 'Wendy', 'Emi', 'Steven','Tim','Todd','Jennifer','Eric','Bigbird']);

var studentNameSort = function(a,b) {
  if (a.substr(1) > b.substr(1)) return 1;
  if (a.substr(1) < b.substr(1)) return -1;
  return 0;
}

deckOfNames.sort(studentNameSort);
var theFinalName = 'Steven'; //whoever is last via that sort
assert(deckOfNames.top() === theFinalName, 'Failed name test');



// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);

var returnIds = function (card) {
  return card.id;
}

var returnCardNames = function (card) {
  return card.name();
}

shuffledDeck.shuffle(sortShuffle);
var ids = shuffledDeck.map(returnIds);
console.log(ids);
var names = shuffledDeck.map(returnCardNames);
console.log(names);
