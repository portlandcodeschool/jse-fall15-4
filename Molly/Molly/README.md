### Homework #4

_Due Mon. Aug. 10_

####Synopsis

- **Problem 1:** A Card Factory! _[25% of total time]_ **Goals:** The deck of cards returns again to demonstrate the _Factory_ and _Instance_ object patterns.  You'll also practice combining JS files within HTML.

- **Problem 2:** Stacking the Deque! _[75%]_ **Goals:**  Implement a _Deque_, an abstract data structure (like an array) which can hold a variety of data types.

	- **Part a)** Implement a deque factory and basic deque instance methods. _[25%]_

	- **Part b)** Fill a deque with cards from Problem 1, then sort them in different ways. _[10%]_

	- **Part c)** Fill another deque with strings and sort them. _[10%]_

	- **Part d)** Add a shuffle feature to all deques. _[10%]_

	- **Part e)** Make your deques smarter about adding and removing content. _[20%]_


---

**1) A Card Factory**  _[25%]_
Revisit your playing card functions from homework 3 and repackage them in a Factory pattern.  You will replace the earlier _cardTools_ toolkit object with a function
`makeCard(id)` (the Factory) which, with each call, makes and returns an object (an Instance) representing a single card.  If _id_ is invalid (not an integer 0..51), the factory should instead return _null_.  Each valid card object stores its own _id_ and has four instance methods to calculate its other attributes:

* `card.rank()` returns 1..13 representing that card's rank.

makeCard.isValid = function(num,low,high) {
if ((typeof num)!=="number")
		return false;
if (num%1 !== 0)
		return false;
if (num<low || num>high)
		return false;
return true;
}

makeCard.rank = function(){
return Math.floor(this.id/4)+1;
}

makeCard.suit = function(){
return ((this.id%4)+1);
}

makeCard.color = function(){
var theSuit=this.suit();
return theSuit && ((theSuit<3)? "red" : "black");
}

makeCard.cardName = function(){
var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
var suitNames = ['', 'Hearts','Diamonds','Spades','Clubs'];
var theRank = this.rank();
var theSuit = this.suit();
return theRank && theSuit &&
(rankNames[theRank] + ' of ' + suitNames[theSuit]);
}

function makeCard(id) {
if (!(makeCard.isValid(id,0,51))) {
	 return null;
}

var temp = {}
temp.id = id;
temp.rank = makeCard.rank;
temp.suit = makeCard.suit;
temp.color = makeCard.color;
temp.name = makeCard.cardName;
return temp;
}

var instance = makeCard(17)
console.log(instance.rank())


**b)**  Write another method which is attached to and called through _the factory alone_, not the instances:


makeCard.isCard = function(obj) {
	if ((typeof obj)!== "object")
			return false;
		}
		if (!(makeCard.isValid(id,0,51))) {
			 return false;
		}
if (!(obj.rank === makeCard.rank && obj.suit === makeCard.suit && obj.color === makeCard.color && obj.name === makeCard.name)) {
	return false;
	return true;
}


**c)**

makeCard.fullSet = [];
	for (i = 0; i < 52; i++) {
makeCard.fullSet.push(makeCard(i))
	}



**d)** Edit the file [main.html](main.html) to ensure that its first `<script...src=...>` tag includes the correct filename for your card-factory code, then open [main.html](main.html) in a browser.  Using the console, call your factory to generate and test a few card instances.
In Problem 2b), you'll combine the card-factory module with a "deque" module.

---

**2) Stacking the Deque**

"Deque" (pronounced "deck") is an acronym for "double-ended queue", a sequential data structure similar to an Array but with different rules of access.  While an Array is random-access (i.e. any element is accessible), a deque can only be accessed at either of its ends (like a roll of mints with both ends open).  The two ends can be called "top" and "bottom" (where "top" corresponds to the _end_ of an Array).

**a)** _[25%]_

function makeDeque(values){
	return { values: values,
length: makeDeque.arrlength,
top: makeDeque.top,
bottom: makeDeque.bottom,
pop: makeDeque.pop,
push: makeDeque.push,
shift: makeDeque.shift,
unshift: makeDeque.unshift,
cut: makeDeque.cut,
map: makeDeque.map,
sort: makeDeque.sort,
discardPile: [],
isInArray: makeDeque.isInArray,
removeFromDiscard: makeDeque.removeFromDiscard,
	};
}

makeDeque.arrlength = function() {
	return this.values.length;
	}

makeDeque.top = function () {
	return this.values[this.values.length-1];
}

makeDeque.bottom = function () {
	return this.values[0];
}

makeDeque.pop = function () {
return this.values.pop();
}

makeDeque.push = function (val) {
	if (this.isInArray(val))
		return this.values.push(val);
	return 'null';

	if (this.isInArray(val))
			 this.discardPile.splice(this.removeFromDiscard(val),1);
			 return this.values.push(val);
	 return 'null';
}

makeDeque.shift = function() {
return this.values.shift();
}

makeDeque.unshift = function(val) {
	if (this.isInArray(val))
	return this.array.unshift(val)
	return 'null'

	if (this.isInArray(val))
        this.discardPile.splice(this.removeFromDiscard(val),1);
        return this.values.unshift(val);
    console.log('nope');
}
}

makeDeque.cut = function() {
	var valuesHalfB = this.values.slice(Math.ceil(this.values.length/2));
	this.values.splice(Math.ceil(this.values.length/2));
	this.values = valuesHalfB.concat(this.values);
}

makeDeque.sort = function () {
	var compareValFn = function(a,b) {
		if ((b-a)>0) {
			a>b;
		} else if ((b-a)<0) {
			a<b;
		} else if ((b-a)===0) {
			a===b;
		};
	};

}

makeDeque.map = function(compareValFn) {
	return this.values.map(compareValsFn);

}

makeDeque.shuffle = function(shuffleFn) {
	this.values.sort(shuffleFn);
}



In part b), you'll use a deque to simulate a deck of 52 cards, but your deque implementation should be completely general, able to handle any number of any type of element.

A deque instance should not itself be an Array; instead it should be an ordinary object which **contains** an Array, a copy of the _values_ parameter.
Be sure to **copy** the _values_ array into the deque instead of using the original; you don't want anyone messing with the deque's content through another reference.

For any of the methods above which correspond to a built-in array method, you don't need to reimplement the method from scratch; instead, just have the deque instance _delegate_ the job to its internal Array.  That will make the deque's _pop_, _push_, _shift_, _unshift_, _sort_, and _map_ very easy to write.

Use the [template file](deque-template.js) to get started.  If you use a different file name for your deque-factory code, make sure to edit [main.html](main.html) and include your deque file name in the second `<script...src=...>` tag.

When your code is finished and you load [main.html](main.html), which includes both your card and deque modules, you should have the data structure shown here:

![](http://portlandcodeschool.github.io/jse-fall15-4/deque1.svg)

---

**b)** _[10%]_
Edit the file [main.js](main.js) to use your two factories together: make a deque instance called `deckOfCards` by calling your deque factory with `makeCard.fullSet`.  The resulting deque will contain 52 card instances which can be ordered independently from any other deque.  Notice that the card instances are the same objects placed in the original `makeCard.fullSet` array, but each deque offers a different arrangement of them.

var deckOfCards = makeDeque(makeCard.fullSet);

Order the deque in two different ways, using its _sort()_ method with two different comparison functions:

-  Write a comparison function to sort _deckOfCards_ by ascending suit (Hearts on bottom, Clubs on top), and by ascending rank within each suit.   After sorting, the bottommost card will be "Ace of Hearts" and the topmost will be "King of Clubs".  A cut should move "King of Diamonds" to the top.
Therefore you should pass this test:
```
var deckOfCards = makeDeque(makeCard.fullSet);
var orderSuitRank = function (a,b) {
  if (a.suit() > b.suit()) {
    return 1;
  }
  if (a.suit() < b.suit()) {
    return -1;
  }
  if (a.suit() === b.suit()) {
    return 0;
  }
}

var sortCardName = function (a,b)
if (a.name() > b.name()) {
  return 1;
}
if (a.name() < b.name()) {
  return -1;
}
if (a.name() === b.name()) {
  return 0;
}
deckOfCards.sort(orderSuitRank);
deckOfCards.sort(sortCardName);
deckOfCards.sort(makeCard.fullSet);
```

- Write a new comparison function and sort the deck by card name, alphabetically from bottom to top.  You should pass this test:
```
deckOfCards.sort(/* alphabetic comparison function */);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');
```

---

**c)** _[10%]_
Without changing your deque factory, use it to create another deque holding a different data type.  In file `main.js`, define another variable `deckOfNames` to be a deque instance holding the first names of all 16 students in the class.

Sort the names alphabetically, bottom to top, by the SECOND letter of the name (e.g. "Santa" would precede "Claus" because 'a'<'l').  If two names are the same in the second letter, their order doesn't matter.  Then test your result:
```
var deckOfNames = makeDeque(['Molly', 'Natalie', 'Ana', 'Elizabeth', 'Chad', 'Wendy', 'Sarah', 'Elijah', 'Matt', 'Eric', 'Stephen', 'Emi', 'Harrison', 'Jahsie', 'Tom', 'Dan'])
var nameSort = function(a,b) {
	if ((a.substr(1)) > (b.substr(1))) {
		return 1;
	}
	if ((a.substr(1)) < (b.substr(1))) {
		return -1
	}
	if (a.substr(1) === b.substr(1)) {
		return 0;
	}
}

deckOfNames.sort(nameSort);
var theFinalName = 'Dan';
assert(everyone.top() === theFinalName, 'Failed name test');
```

---

**d)** _[10%]_
In your deque factory, add a deque instance method `shuffle()` which shuffles the elements into a random order.
First, try the easy (but slow and ineffective) way by using Array.sort() with a comparison function returning a random result.

shuffleDeck.shuffle();
var id = shuffleDeck.map()
var name = shuffleDeck.map()
var returnId = function card {
	return card.id;
}

var returnCardNames = function (card) {
	return card.name();
}

shuffleDeck.shuffle(sortShuffle);
var id = shuffleDeck.map(returnId);
console.log(id);
var names = shuffleDeck.map(returnname);
console.log(name);

Then do it properly using the [in-place Knuth-Fisher-Yates algorithm](http://bost.ocks.org/mike/shuffle/).  You may copy code from there or any other source, but cite the source if you do.

With the new factory definition, define a new variable `shuffledDeck` with a new deque of card instances and shuffle it.
Use its _map(...)_ method with a custom callback function to view the shuffled elements by _card.id_.
Then use _map(...)_ with a different callback function to view them by _card.name()_.

---

**e)** _[20%]_
Improve your deque implementation to ensure that no one can add unauthorized elements to it (e.g. extra Aces).

Change anything necessary so that `push(val)` and `unshift(val)` only add _val_ if it was part of the original deque and is currently missing (via `pop()` or `shift()`).

makeDeque.pop = function () {
var discardPop = this.values.pop();
this.discardPile.push(discardPop);
return discardPop;
}

makeDeque.shift = function() {
var discardShift = this.values.shift();
this.discardPile.push(discardShift)
return discardPile.shift;
}

makeDeque.isInArray = function(value, array) {
	for (i=0; i < this.discardPile.length; i++) {
	if (this.discardPile[i].id === value.id) {
		return true;
	}
}
		return false;
}

makeDeque.removeFromDiscard = function(value) {
    for (i=0; i<this.discardPile.length; i++){
        if (this.discardPile[i].id === value.id){
        return i;
			}
		}
}

(Hint: each deque will need to maintain some record of all elements released with a _pop_ or _shift_.)
