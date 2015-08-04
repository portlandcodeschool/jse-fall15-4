function makeCard(id) {
    // If id is invalid (out of range, etc)
    // ...
    return null;

    // Otherwise build an instance object with an id property,
    // representing one card, and attach to it four methods:
    //   rank()
    //   suit()
    //   color()
    //   name()
    // Each method property should be just a link to the corresponding method
    //  of the factory itself.

    return /* that instance here */;
}

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function() { // --> 1..13, NaN
    // code here...
};

makeCard.suit = function() { // --> 1..4, NaN
    // code here...
};
   
makeCard.color = function() { // -->"red,"black",NaN
    // code here...
};

makeCard.cardName = function() { //--> string, NaN
    // This method can't have the key 'name' within the makeCard function,
    // but instance objects can store a reference to it called 'name'

    // code here...
};


//-----------------------
// Methods to be called through factory only:
//-----------------------

makeCard.isCard = function(thing) { // --> true,false
    // return true if thing is a valid card instance made by this factory

}

//---------------------
// Additional factory properties
//---------------------

makeCard.fullSet = []; //<-- instead, generate array of 52 card instances



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



