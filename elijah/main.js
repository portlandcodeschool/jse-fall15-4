// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);


deckOfCards.sort(suitOrder);
deckOfCards.cut();
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');
//
deckOfCards.sort(alphOrder);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');

// 2b callbacks
var alphOrder = function(array) {
    // alphabet comparison by name(), bottom to top
    var alph = function(a,b) {
        if (a.name() < b.name()) return 1;
        if (a.name() > b.name()) return -1;
        return 0;
    }
    return array.sort(alph);
}

// good lord this is ugly... but it does work
var suitOrder = function(array) {
    // callback for sort
    var suitId = function(a,b) {
        if (a.id < b.id) return 1;
        if (a.id > b.id) return -1;
        return 0;
    }
    // arrays for suits
    var h = [], d = [], s = [], c = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].suit() === 1) {
            h.push(array[i]);
        } else if (array[i].suit() === 2) {
            d.push(array[i]);
        } else if (array[i].suit() === 3) {
            s.push(array[i]);
        } else if (array[i].suit() === 4) {
            c.push(array[i]);
        }
    }
    // rebuild the array
    h.sort(suitId);
    d.sort(suitId);
    s.sort(suitId);
    c.sort(suitId);
    return c.concat(s,d,h);
}

// 2c:
// make a deque instance to store student names:

// array of names
var names = ['Cerebus', 'Jaka', 'Astoria', 'Cirin', 'Elrod', 'Bran', 'Rick', 'Suenteus',
            'Joanne', 'Bear', 'Adam', 'Artemis', 'Julius', 'Elf', 'Ham', 'Oscar'];
var deckOfNames = makeDeque(names);
deckOfNames.sort(nameOrder);
var theFinalName = 'Julius'; //whoever is last via that sort
assert(deckOfNames.top() === theFinalName, 'Failed name test');

// 2c callbacks
var nameOrder = function(a,b) {
    // sort names by second letter, bottom to top
    if (a.substr(1) < b.substr(1)) return 1;
    if (a.substr(1) > b.substr(1)) return -1;
    return 0;
}


// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);
//
shuffledDeck.shuffle();
var ids = shuffledDeck.map(viewId);
console.log(ids);
var names = shuffledDeck.map(viewName);
console.log(names);
