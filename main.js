// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


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
var classNames=['anastasia','wendy','louise','molly','natalie','chad','elijah','elizabeth','emi','harrison','stephen','david','tim','matt','sarah','greg'];

var deckOfNames= makeDeque(classNames);

var secondLetter = function(a,b){
  if (a.charAt(1)>b.charAt(1)) return 1;
  if (a.charAt(1)<b.charAt(1)) return -1;
}

deckOfNames.sort(secondLetter);

var theFinalName = 'stephen'; //whoever is last via that sort
assert(deckOfNames.top() === theFinalName, 'Failed name test');



// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);

shuffledDeck.shuffle(randomOrder);

var randomOrder = function(a,b){
  if (a.id()>b.id()) return Math.random()*shuffledDeck.length;
}

var idView = function(card){
  return card.id;
}

var ids = shuffledDeck.map(idView);

console.log(ids);

var nameView = function(card){
  return card.name;
}

var names = shuffledDeck.map(nameView);

console.log(names);


///////-------
// card instances needed for assertions:
var card0 = makeCard(0);
var card3 = makeCard(3);
var card5 = makeCard(5);
var card51 = makeCard(51);


// Test instance methods
expectValue (card0.rank(),  1,     "rank(0)");
expectValue (card3.rank(),  1,     "rank(3)");
expectValue (card51.rank(),  13,   "rank(51)");
expectValue (card0.suit(),  1,     "suit(0)");
expectValue (card5.suit(),  2,     "suit(5)");
expectValue (card51.suit(),  4,    "suit(51)");
expectValue (card0.color(),  'red',    "color(0)");
expectValue (card3.color(),  'black',  "color(3)");
expectValue (card5.name(),  'Two of Diamonds', "name(5)");
expectValue (card51.name(),  'King of Clubs',  "name(51)");


// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed")
assert(makeCard.isCard(card51), "Test 22 failed")
assert(!makeCard.isCard(0),    "Test 23 failed")
assert(!makeCard.isCard({}),   "Test 24 failed")


// Test failed card-making results:
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");


// Test fullSet array:
assert(typeof makeCard.fullSet === 'object', "Test 40 failed");
assert(makeCard.fullSet.length === 52, "Test 41 failed");
assert(makeCard.isCard(makeCard.fullSet[0]), "Test 42 failed")
assert(makeCard.fullSet[5].name() === card5.name(), "Test 43 failed");
assert(makeCard.fullSet[51].name() === card51.name(), "Test 44 failed");

// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.name, "Test 53 failed");
//etc...

