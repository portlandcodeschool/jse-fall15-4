// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
    // return deque object
    return {
        values: values,
        // removed values and copy of original
        deque: values,
        dropped: [],
        //
        arrLength: makeDeque.arrLength,
        top: makeDeque.top,
        bottom: makeDeque.bottom,
        pop: makeDeque.pop,
        push: makeDeque.push,
        shift: makeDeque.shift,
        unshift: makeDeque.unshift,
        cut: makeDeque.cut,
        map: makeDeque.map,
        sort: makeDeque.sort,
        shuffle: makeDeque.shuffle,
        shuffleProperly: makeDeque.shuffleProperly
    }

}

// The factory's instance methods:
makeDeque.arrLength = function() {
    // return lenght of "deque"
	return this.values.length;
}

makeDeque.top = function() {
    // return top of deque
	return this.values[0];
}

makeDeque.bottom = function() {
    // return "bottom" of deque
	return this.values[this.values.length -1];
}

makeDeque.pop = function() {
	// pop the top value off and return
    var p = this.values.splice(0,1)[0];
    this.dropped.push(p);
    return p;
}

makeDeque.push = function(val) {
	// add val to top of values and return new length
    // XXX part e, verification! not done yet
    if (1 === 1) {
        this.values.splice(0,0,val);
        return this.arrLength();
    } else {
        return null;
    }
}

makeDeque.shift = function() {
	// remove and return bottom
    var s = this.values.splice((this.values.length -1),1)[0];
    this.dropped.push(s);
    return s;
}

makeDeque.unshift = function(val) {
	// add val to bottom and return new length
    // XXX part e, verification! not done yet
    this.values.splice((this.values.length),0,val);
    return this.arrLength();
}

makeDeque.cut = function() {
	// split deque in half and swap them
    var mid = Math.round(this.arrLength()/2);
    var a = this.values.slice(mid);
    var b = this.values.slice(0,mid);
    this.values = a.concat(b);
}

makeDeque.map = function(convert) {
	// return array of elements from callback
    return this.values.map(convert);
}

makeDeque.sort = function(compare) {
	// reorder deque values with callback
    this.values.sort(compare);
}

makeDeque.shuffle = function() {
    // shuffle cards in values using ineffective random way
    // use our sort method
    this.sort(badShuffle);
}

makeDeque.shuffleProperly = function() {
    // shuffle cards properly using in-place Knuth-Fisher-Yates
    // http://bost.ocks.org/mike/shuffle/
    var len = this.values.length, t, i;
    while (len) {
        i = Math.floor(Math.random() * len--);
        t = this.values[len];
        this.values[len] = this.values[i];
        this.values[i] = t;
    }
}

// 2b callbacks
var alphOrder = function(a,b) {
    // alphabet comparison by name(), bottom to top
    if (a.name() < b.name()) return 1;
    if (a.name() > b.name()) return -1;
    return 0;
}

var suitOrder = function(a,b) {
    // sort by suit and rank ascending
    if (a.suit() < b.suit()) return 1;
    if (a.suit() > b.suit()) return -1;
    if (a.suit() === b.suit()) {
        if (a.rank() < b.rank()) return 1;
        if (a.rank() > b.rank()) return -1;
    }
    return 0;
}

// 2c callbacks
var nameOrder = function(a,b) {
    // sort names by second letter, bottom to top
    if (a.substr(1) < b.substr(1)) return 1;
    if (a.substr(1) > b.substr(1)) return -1;
    return 0;
}

// 2d callbacks

var badShuffle = function(cardA, cardB) {
    // shuffle deck "randomly" using Math.random
    return Math.floor(Math.random() * 3 - 1);   
}

var viewId = function(card) {
    // display cards from shuffledDeck by ID
    return card.id;
}

var viewName = function(card) {
    // display cards from shuffledDeck by name
    return card.name();
}
// test below for part 2e
