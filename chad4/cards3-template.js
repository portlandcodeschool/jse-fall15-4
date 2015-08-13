function makeCard(id) {
    // If id is invalid (out of range, etc)
    if (!(makeCard.isValid(id,0,51))) {
      
    return null;
    }
    // Othrwise build an instance object with an id property,
    return {
    id: id,
    // representing one card, and attach to it four methods:
    rank: makeCard.rank,
    suit: makeCard.suit,
    color: makeCard.color,
    name: makeCard.cardName
    // Each method property should be just a link to the corresponding method
    //  of the factory itself.
    }
    
};

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

// CORRECTION: NaN is no longer a possible outcome, since every card instance has
// its id validated when its created.

makeCard.rank = function() { // --> 1..13
    return Math.floor(this.id/4)+1;
};

makeCard.suit = function() { // --> 1..4
    return (this.id%4)+1;
};
   
makeCard.color = function() { // -->"red,"black"
    var suit = this.suit();
    return suit && ((suit<3)? "red": "black");
};

makeCard.cardName = function() { //--> string
    // This method can't have the key 'name' within the makeCard function,
    // but instance objects can store a reference to it called 'name'

    var rank = this.rank();
    var suit = this.suit();
    return rank && suit && (makeCard.rankNames[rank] + ' of ' + makeCard.suitNames[suit]);

};


makeCard.rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
makeCard.suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

//-----------------------
// Methods to be called through factory only:
//-----------------------

makeCard.isCard = function(thing) { // --> true,false
    // return true if thing is a valid card instance made by this factory
    return (thing.rank === makeCard.rank) && makeCard.isValid(thing.id,0,51)
};

makeCard.isValid = function(num,low,high) { 
        return ((typeof num)==="number") && (num%1 === 0) && (num>=low && num<=high);
    };


//---------------------
// Additional factory properties
//---------------------

makeCard.fullSet = []; 
for (i = 0; i < 52; i++) {
    makeCard.fullSet.push(makeCard(i));
};

  

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



