//1.)

// Defining all card methods in advance
function rank() {
  if (this.id >= 0 && this.id <= 3) {
    return 1;
  } else if (this.id >=4 && this.id <= 7) {
    return 2;
  } else if (this.id >=8 && this.id <= 11) {
    return 3;
  } else if (this.id >=12 && this.id <= 15) {
    return 4;
  } else if (this.id >=16 && this.id <= 19) {
    return 5;
  } else if (this.id >=20 && this.id <= 23) {
    return 6;
  } else if (this.id >= 24 && this.id <= 27) {
    return 7;
  } else if (this.id >= 28 && this.id <= 31) {
    return 8;
  } else if (this.id >= 32 && this.id <= 35) {
    return 9;
  } else if (this.id >= 36 && this.id <= 39) {
    return 10;
  } else if (this.id >= 40 && this.id <= 43) {
    return 11;
  } else if (this.id >= 44 && this.id <= 47) {
    return 12;
  } else if (this.id >= 48 && this.id <= 51) {
    return 13;
  } else {
    return "ERROR";
  }
};

function suit() {
    if (this.id % 4 === 0) {
      return 1;
  } else if ( this.id % 4 === 1) {
    return 2;
  } else if (this.id % 4 === 2) {
    return 3;
  } else if ( this.id % 4 === 3) {
    return 4;
  } else return 'ERROR'
};

function cardID() {
  var heartsArray = ['',0,4,8,12,16,20,24,28,32,36,40,44,48];
  var diamondsArray = ['',1,5,9,13,17,21,25,29,33,37,41,45,49];
  var spadesArray = ['',2,6,10,14,18,22,26,30,34,38,42,46,50];
  var clubsArray = ['',3,7,11,15,19,23,27,31,35,39,43,47,51];

  switch (this.suit()) {
  case 1:
    return heartsArray[this.rank()];
    break;
  case 2:
    return diamondsArray[this.rank()];
    break;
  case 3:
    return spadesArray[this.rank()];
    break;
  case 4:
    return clubsArray[this.rank()];
    break;
  default:
    return 'ERROR';
    break;
  }
};

function color() {
  switch(this.suit(this.id)) {
  case 1:
    return 'red';
    break;
  case 2:
    return 'red';
    break;
  case 3:
    return 'black';
    break;
  case 4:
    return 'black';
    break;
  default:
    return 'ERROR';
    break;
  }
};

function name() {
  return this.cardNames[this.rank(this.id)] + ' of ' + this.suitNames[this.suit(this.id)-1]
};


// Card factory
function makeCard(id) {

  var newCard = {
    cardNames: [0,'Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'],
    suitNames: ['Hearts','Diamonds','Spades','Clubs'],

    id: id,
    rank: rank,
    suit: suit,
    cardID: cardID,
    color: color,
    name: name

  };

  if (id >= 0 && id < 52 && id % 1 === 0 ) {
    return newCard;
  } else {
    return null;
  }
};

//Adding function to check if an object is a card
makeCard.isCard = function(obj) {
  if (obj.id) {
    if (obj.rank) {
      if (obj.suit) {
        if (obj.cardID) {
          if (obj.color) {
            if (obj.name) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
};

// Defining a function to create the full deck, and assigning it to makeCard
function fillSet() {
  var array = [];
  for (var i=0; i<52; i++) {    // 1 to 52, b/c those are possible IDs!
    array[array.length] = makeCard(i);
  }
  return array
};

makeCard.fullSet = fillSet();

//2.)
//a)

// Defining deque methods
var length = function() {
  if (this.values.length) {
    return this.values.length;
  } else return undefined;
};

var top = function() {
  if (this.values.length) {
    return this.values[this.values.length - 1];
  } else return undefined;
};

var bottom = function() {
  if (this.values.length) {
    return this.values[0];
  } else return undefined;
};

var pop = function() {
  if (this.values.length) {
    var val = this.values[this.values.length-1];
    this.values.length -= 1;
    if (!this.releasedValues) {
      this.releasedValues = [];
    }
    this.releasedValues += val;
    return val;
  }
  return undefined;
};

var push = function(val) {
  if (!(val in this.releasedValues)) {
    this.values[this.values.length] = val;
    return this.values.length;
  } else return 'Error: value already exists';
};

var shift = function() {
  val = this.values[0];
  this.values.splice(0,1);
  if (!this.releasedValues) {
    this.releasedValues = [];
  }
  this.releasedValues[this.releasedValues.length] += val;
  return val;
};

var unshift = function(val) {
  if (!(val in this.releasedValues)) {
    this.values.splice(0,0,val);
    return this.values.length;
  } else return "Error: value already exists";
};

var cut = function() {
  if (this.values.length >=2) {
    if (this.values.length % 2 === 0) {
      var halfWay = Math.floor(this.values.length / 2);
    } else var halfWay = Math.floor(this.values.length / 2) + 1;

    var topHalf = this.values.slice(halfWay);
    this.values.splice(halfWay);
    this.values = topHalf.concat(this.values);
    return this.values;

  } else return this.values;
};


var sort = function(compareValsFn) {
  this.values = this.values.sort(compareValsFn);
};


var map = function(convertValFn) {
  var newArray = this.values.map(convertValFn);
  return newArray;
};

// from problem 2d:

var sortRandom = function() {
  var randNum = Math.floor(Math.random());

  if (randNum % 2 === 0) {
    return 1;
  } else return -1;
};

var badShuffle = function() {
  this.values.sort(sortRandom);
};

var goodShuffle = function() {  //Code modified from bost.ocks.org/mike/shuffle/
  var arrayLength = this.values.length;
  while(arrayLength) {
    var randElem = Math.floor(Math.random() * arrayLength--);

    //Shift random value to back
    var front = this.values[arrayLength]; //Grab front value
    this.values[arrayLength] = this.values[randElem]; //Put random in front
    this[randElem] = front; // Put front value in our random position
  }
  return this.values;
};


// Deque factory

var makeDeque = function(values) {
  var newDeque = {
    values: values,

    length: length,
    top: top,
    bottom: bottom,
    pop: pop,
    push: push,
    shift: shift,
    unshift: unshift,
    cut: cut,
    sort: sort,
    map: map,
    badShuffle: badShuffle
    goodShuffle: goodShuffle;
  };
return newDeque;
};


// Creating the full deck of 52 cards
var deckOfCards = makeDeque(makeCard.fullSet);


// Callbacks for sort(), and defining assert()
var ascendingSuits = function(a,b) {

  if (a.suit() > b.suit()) {
    return 1;
  } else if (a.suit() === b.suit()) {
    if (a.rank() > b.rank()) {
      return 1;
    } else return 0;
  } else return -1;
};

var assert = function(statement, message) {
  if (!statement) {
    console.log(message);
  }
};

var ascendingNames = function(a,b) {
  if (a.name() > b.name()) {
    return 1;
  } else if (a.name() === b.name()) {
    return 0;
  } else return -1;
};

// c)

//Listing all names and making a deque for them
var namesArray = ['Natalie','Molly','Sarah','Harrison','Elijah', 'Chad', 'Elizabeth', 'Anastasia', 'Wendy', 'Emi', 'Stephen','Tim','Todd','Jennifer','Eric','Louise'];
var deckOfNames = makeDeque(namesArray);

// Callback to sort() by second letter of name
var bySecondLetter = function(a,b) {
  if (a[1] > b[1]) {
    return 1;
  } else if (a[1] === b[1]) {
    return 0;
  } else return -1;
};

// d) badShuffle() and goodShuffle() defined with other deque methods
