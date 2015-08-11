// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
	// ...
	// return an instance object which has the following methods:
	// length
	// top
	// bottom
	// pop
	// push
	// shift
	// unshift
	// cut
	// map
	// sort

	return instance = {
		arrlength: makeDeque.arrlength,
		top : makeDeque.top,
		bottom : makeDeque.bottom,
		pop : makeDeque.pop,
		push : makeDeque.push,
		shift : makeDeque.shift,
		unshift : makeDeque.unshift,
		cut : makeDeque.cut,
		map : makeDeque.map,
		sort : makeDeque.sort
	};
}
var values = [values];  //?? is this how I should complete line 65 in readme?

	
// The factory's instance methods:
makeDeque.arrLength = function(val) { 	// can't use property named length;
				// as a function, makeDeque has a predefined length property.
	//...
	return val.length;
};

makeDeque.top = function() {
	//...
	return this.values[this.values.length[-1]];
};


makeDeque.bottom = function() {
	//...
	return this.values[this.values.length[0]];
};

makeDeque.pop = function() {
	//...
	return this.values.pop();	
};

makeDeque.push = function(val) {
	//...
	return this.values.push(val);
};

makeDeque.shift = function() {
	//...
	return this.values.shift();
};

makeDeque.unshift = function(val) {
	//...
	return this.values.unshift(val);
};

makeDeque.cut = function() {
	//...
	var half1 = this.values[Math.ceil(this.values.length)];
};

makeDeque.map = function(convertValFn) {
	//...

};

makeDeque.sort = function(compareValsFn) {
	//...
};

// Feel free to write tests for your code!

var mj = makeDeque(23,24,25);