function makeCard(id) {
    // If id is invalid (out of range, etc)
    if (!(makeCard.checker(id))) return null;
    
    // return card object
    return {
        id: id,
        name: makeCard.cardName,
        color: makeCard.color,
        suit: makeCard.suit,
        rank: makeCard.rank,
    }
}

//-----------------------------
// Methods called though instances (where 'makeCard' means the instance):
//-----------------------------

makeCard.rank = function() {
    return Math.floor(this.id/4) + 1;
};

makeCard.suit = function() {
    return (this.id%4) + 1;
};
   
makeCard.color = function() {
    var c = this.suit(this.id);
    if (c === 1 || c === 2) {
        return 'red';
    } else {
        return 'black';
    }
};

makeCard.cardName = function() {
    var s = this.suit(this.id) - 1;
    var r = this.rank(this.id) - 1;
    return makeCard.cards[r] + ' of ' + makeCard.suits[s];
};

makeCard.checker = function(input) {
    // input checker
    if (typeof(input) === 'number' && (!(input%1)) && input >= 0 && input < 52) {
        return true;
    } else {
        return false;
    }

};

// card arrays
makeCard.suits = ['Hearts','Diamonds','Spades','Clubs'];

makeCard.cards = ['Ace','Two','Three','Four','Five','Six','Seven',
        'Eight','Nine','Ten','Jack','Queen','King'];


//-----------------------
// Methods to be called through factory only:
//-----------------------

makeCard.isCard = function(thing) {
    // return true if thing is valid card object
    props = ['id', 'rank', 'suit', 'color', 'name'];
    for (i = 0; i < props.length; i++) {
        if (!(thing.hasOwnProperty(props[i]))) return false;
    }
    return true;
}

//---------------------
// Additional factory properties
//---------------------

// build array of 52 cards
makeCard.fullSet = [];
for (i = 0; i < 52; i++) {
    makeCard.fullSet.push(makeCard(i));
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
