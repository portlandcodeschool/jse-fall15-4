function makeCard(id) {
  if (makeCard.isValidID(id)) {
    return {

      id: id,
      rank: makeCard.rank,
      suit: makeCard.suit,
      color: makeCard.color,
      name: makeCard.cardName

    };
  } else {
    return null;
  }
}

makeCard.rank = function() {
         return Math.floor(this.id/4)+1;
 };

makeCard.suit = function() {
         return ((this.id%4)+1); 
 };

makeCard.color = function() {
       var theSuit=this.suit(); 
         return theSuit && ((theSuit<3)? "red": "black");
};

makeCard.cardName = function() {
    var s = this.suit(this.id);
    var r = this.rank(this.id);
    return makeCard.rankNames[r] + ' of ' + makeCard.suitNames[s];
};

makeCard.rankNames = [' ', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'],

makeCard.suitNames = [' ', 'Hearts', 'Diamonds', 'Spades', 'Clubs'],

  makeCard.isValidID = function(id) {
    return (typeof id === "number") && (id % 1 === 0) && (id >= 0) && (id <= 51);
  };

makeCard.isCard = function(thing) {
    return (typeof thing === 'object') && (makeCard.rank === thing.rank) && ('id' in thing) && (makeCard.isValidID(thing.id));
  };
    makeCard.fullSet = [];
    for (var id = 0; id < 52; id++) {
      makeCard.fullSet.push(makeCard(id));
    }

    //----------------------
    // Simple Testing suite
    // Supplement as needed!

//----------------------
// Simple Testing suite
// Supplement as needed!

function assert(claim,message) {
    if (!claim) console.error(message);
}
function expectValue(result, expected, attemptStr) {
    if (result !== expected) {
        console.log(attemptStr+" expected result "+expected+", got "+result);
    }
}
function expectNaN(result, attemptStr) {
    if (!Number.isNaN(result)) {
        console.log(attemptStr+" expected NaN, got "+result);
    }
}

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




