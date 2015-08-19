function makeCard(id, low, high) {
        if (typeof id!="number") {
        return null;
        }
        if(id%1 !==0) {
        return null;
        }
        if(id<low || id>high) {
        return null;
        }
        else 
        return {
        id: id,
        // animal: animal,
        // size: size,
        rank: makeCard.rank,
        suit: makeCard.suit,
        color: makeCard.color,
        cardName: makeCard.cardName
        }

}

makeCard.rank = function() { // --> 1..13
    return (Math.floor(this.id/4))+1;
};  

makeCard.suit = function() { // --> 1..4
    return ((this.id)%4)+1;
};
   
makeCard.color = function(callback) { // -->"red,"black"
    return ((this.suit() <3) ? 'red' : 'black');    
};

//Always returns black. . . always false...

makeCard.cardName = function() { //--> string
    var rankNames= ['', 'Ace', 'Two', 'Three','Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    var suitNames= ['', 'Hearts', 'Diamonds', 'Spades', 'Clubs'];
    return (rankNames[this.rank()]) + ' of ' +  (suitNames[this.suit()]);
};



//-----------------------
// Methods to be called through factory only:
//-----------------------
makeCard.isCard = function(thing) {
    if (thing in makeCard) {
    return true;
}
    return false;
}


// }
// makeCard.isCard = function(thing) { // --> true,false
//    (thing in makeCard) && (typeof thing === 'object') {
//    return true;
// }
//     return false;
// }

//---------------------
// Additional factory properties
//---------------------


makeCard.fullSet = function(array) { //<-- instead, generate array of 52 
    var fullDeck = [];
    for (var i = 0; i < 52; i++) {
        // var id = i;
        // var name =this.CardName(); 
        fullDeck.push(makeCard(i, 0, 51));
        // fullDeck.push(name);
    }

    return fullDeck;
}


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
expectValue (card5.cardName(),  'Two of Diamonds', "name(5)");
expectValue (card51.cardName(),  'King of Clubs',  "name(51)");


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
assert(makeCard.fullSet[5].cardName() === card5.cardName(), "Test 43 failed");
assert(makeCard.fullSet[51].cardName() === card51.cardName(), "Test 44 failed");

// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.cardName, "Test 53 failed");
//etc...



