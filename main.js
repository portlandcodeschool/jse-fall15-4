
// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);

var orderSuitRank = function(a, b) {
  if (a.suit() > b.suit()) return 1;
  if (a.suit() < b.suit()) return -1;
  if (a.suit() === b.suit()) {
    if (a.rank() > b.rank()) return 1;
    if (a.rank() < b.rank()) return -1;
  }
  return 0;
}

var cardNameSort = function(a, b) {
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

var names = ["Stephen", "Emmy", "Tim", "Anastasia", "Elijah", "Elizabeth", "Matt", "Chad",
  "Wendy", "Molly", "Natalie", "Harrison", "Louise", "David", "Sarah", "Dan"
];

var deckOfNames = makeDeque(names);
deckOfNames.sort(name2Letter);
var theFinalName = 'JStephen';
assert(deckOfNames.top() === theFinalName, 'Failed name test');

var name2Letter = function(a, b) {
  var aGreatSecLetter = (a.substr(1) > b.substr(1));
  var aLessSecLetter = (a.substr(1) < b.substr(1));

  if (aGreatSecLetter) return 1;
  if (aLessSecLetter) return -1;
  return 0;
}

// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);

shuffledDeck.shuffleProperly();

var ids = shuffledDeck.map(id);
console.log(ids);

var names = shuffledDeck.map(nameOfCard);
console.log(names);