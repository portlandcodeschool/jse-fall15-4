// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
	var temp = {};
	temp.discardPile = [];
	temp.values = values.slice();
	temp.length = makeDeque.arrLength;
	temp.top = makeDeque.top;
	temp.bottom = makeDeque.bottom;
	temp.pop = makeDeque.pop;
	temp.push = makeDeque.push;
	temp.shift = makeDeque.shift;
	temp.unshift = makeDeque.unshift;
	temp.cut = makeDeque.cut;
	temp.map = makeDeque.map;
	temp.sort = makeDeque.sort;
	temp.shuffle = makeDeque.shuffle;
	temp.improvedShuffle = makeDeque.improvedShuffle;
	temp.isInArray = makeDeque.isInArray;
	temp.removeFromDiscard = makeDeque.removeFromDiscard;
	return temp;
}

// The factory's instance methods:
makeDeque.arrLength = function() { 	// can't use property named length;
	return this.values.length;
}

makeDeque.top = function() {
	return this.values[(this.values.length-1)];
}

makeDeque.bottom = function() {
	return this.values[0];
}

makeDeque.pop = function() {
	var discardPop = this.values.pop();
	this.discardPile.push(discardPop);
	return discardPop;
}

makeDeque.push = function(val) {
	if (this.isInArray(val)) {
		this.discardPile.splice(this.removeFromDiscard(val),1);
		return this.values.push(val);
	} else {
		console.log("Nice try...you can't add that card.");
	}
}

makeDeque.removeFromDiscard = function(value) {
	for (i=0; i<this.discardPile.length; i++)
		if (this.discardPile[i].id === value.id)
		return i;
}

makeDeque.shift = function() {
	var discardShift = this.values.shift();
	this.discardPile.push(discardShift);
	return discardShift;
}

makeDeque.unshift = function(val) {
	if (this.isInArray(val)) {
		this.discardPile.splice(this.removeFromDiscard(val),1);
		return this.values.unshift(val);
	} else {
		console.log("Nice try...you can't add that card.");
	}
}

makeDeque.cut = function() {
	var valuesLastHalf = this.values.slice(Math.ceil(this.values.length/2));
	this.values.splice(Math.ceil(this.values.length/2));
	this.values = valuesLastHalf.concat(this.values);
}

makeDeque.map = function(convertValFn) {
  return this.values.map(convertValFn);
}

makeDeque.sort = function(compareValsFn) {
	this.values.sort(compareValsFn);
}

makeDeque.shuffle = function(shuffleFn){
	this.values.sort(shuffleFn)
}

makeDeque.improvedShuffle  = function() {
	var m = this.values.length;
	var t;
	var i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = this.values[m];
		this.values[m] = this.values[i];
		this.values[i] = t
	}
	return this.values;
}

makeDeque.isInArray = function(value) {
  for (i=0; i < this.discardPile.length; i++){
		if (this.discardPile[i].id === value.id)
			return true;
	}
  return false;
}

var compare = function(a,b) {
	if (a>b) return 1;
	if (a<b) return -1;
	return 0;
}
//I'm sure there are cleaner ways to do this
var sortShuffle = function(a,b){
	if (((a.id+1)/(a.id+1))*Math.random() > ((b.id+1)/(b.id+1))*Math.random()) return 1;
	if (((a.id+1)/(a.id+1))*Math.random() < ((b.id+1)/(b.id+1))*Math.random()) return -1;
	return 0;
}


deckOfCards1 = makeDeque(makeCard.fullSet)
deckOfCards1.pop();
deckOfCards1.pop();
deckOfCards1.shift();
deckOfCards1.shift();


// Feel free to write tests for your code!
