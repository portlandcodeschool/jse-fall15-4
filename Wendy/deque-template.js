// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
	var Obj = {
	length: makeDeque.length,
	top: makeDeque.top,
	bottom: makeDeque.bottom,
	pop:makeDeque.pop,
	push: push,
	shift: shift,
	unshift: unshift,
	cut: cut,
	map: map,
	sort: sort,
	};
	return Obj;
}

// The factory's instance methods:
makeDeque.arrLength = function() { 	// can't use property named length;
	return 	???;		// as a function, makeDeque has a predefined length property.//...
} //if you cna't use .length then what CAN you use?

makeDeque.top = function() {
	return 
}

makeDeque.bottom = function() {
	return this.Obj.slice(0);
}

makeDeque.pop = function() {
	return this.Obj.slice(-1);	//...
}

makeDeque.push = function(val) {
	//...
}

makeDeque.shift = function() {
	//...
}

makeDeque.unshift = function(val) {
	//...
}

makeDeque.cut = function() {
	//...
}

makeDeque.map = function(convertValFn) {
	//...
}

makeDeque.sort = function(compareValsFn) {
	//...
}

// Feel free to write tests for your code!

