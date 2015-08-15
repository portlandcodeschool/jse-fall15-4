// Problem 2a): build a deque factory
//-------


// The factory itself:
var makeDeque = function(values) {

	return{
		length: makeDeque.arrLength,
		top: makeDeque.top,
		bottom: makeDeque.bottom,
		pop: makeDeque.pop,
		push: makeDeque.push,
		shift: makeDeque.shift,
		unshift: makeDeque.unshift,
		cut: makeDeque.cut,
		map: makeDeque.map,
		sort: makeDeque.sort,
		values: values.slice(),
		shuffle: makeDeque.shuffle,
		goodShuffle: makeDeque.inPlaceShuffle
	}

}


// The factory's instance methods:
makeDeque.arrLength = function() { 	// can't use property named length;
				// as a function, makeDeque has a predefined length property.
	return this.values.length;
}

makeDeque.top = function() {
	return this.values[this.values.length-1];
}

makeDeque.bottom = function() {
	return this.values[0];
}

makeDeque.pop = function() {
	return var popped=this.values.pop();
}

makeDeque.push = function(val) {
	if val = popped;//this was meant to be for part e...can .push access the popped variable from .pop??
	return this.values.push();
}

makeDeque.shift = function() {
	return var shifted = this.values.shift();
}

makeDeque.unshift = function(val) {
	if val = shifted; //this was meant to be for part e...?
	return this.values.unshift();
}

makeDeque.cut = function() {
		var middle;
		if (this.values.length<2) {
			return values;
		} else {
			middle = Math.ceil(this.values.length/2);
		}

		var halfA = this.values.slice(middle, this.values.length);
		var halfB = this.values.slice(0, middle);
		this.values = halfA.concat(halfB);

}


makeDeque.map = function(convertValFn) {
	return this.values.map(convertValFn);
}


makeDeque.sort = function(compareValsFn) {
	return this.values.sort(compareValsFn);
}

// var compareValsFn = function(a,b){
// 	if (a>b) return -1;
// 	if (a<b) return 1;
// 	return 0;
// }

makeDeque.shuffle = function(randomOrderFn){
	return this.values.sort(randomOrder);

}

makeDeque.inPlaceShuffle = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
//above function is "in-place Knuth-Fisher-Yates algorithm"

// Feel free to write tests for your code!

