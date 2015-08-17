
// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);

var compareCards = function(a,b){
  if (a.suit()<b.suit()) return -1;
  if (a.suit()>b.suit()) return 1;
  if (a.rank()<b.rank()) return -1;
  if (a.rank()>b.rank()) return 1;
}

var cardNameSort = function(a,b){
  if (a.name()<b.name()) return -1;
  if (a.name()>b.name()) return 1;
}

deckOfCards.sort(compareCards);
deckOfCards.cut();
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

deckOfCards.sort(cardNameSort);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');


// 2c:
// make a deque instance to store student names:

var names = ["Stephen", "Emmy", "Tim", "Anastasia", "Elijah", "Elizabeth", "Matt", "Chad",
  "Wendy", "Molly", "Natalie", "Harrison", "Louise", "David", "Sarah", "Dan"];

var deckOfNames = makeDeque(names);
var secondLetter = function(a,b){
  if (a.charAt(1)>b.charAt(1)) return 1;
  if (a.charAt(1)<b.charAt(1)) return -1;
};

deckOfNames.sort(secondLetter);

var theFinalName = 'Stephen'; //whoever is last via that sort 
assert(deckOfNames.top() === theFinalName, 'Failed name test');


// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);

shuffledDeck.shuffleProperly(random);

var random = function(a,b){
  if (a.id()>b.id()) {
   return Math.random()*shuffledDeck.length;
  }
}

var idView = function(card){
  return card.id;
}

var ids = shuffledDeck.map(idView);

console.log(ids);

var ids = shuffledDeck.map(id);
console.log(ids);

var names = shuffledDeck.map(secondLetter);
console.log(names);


