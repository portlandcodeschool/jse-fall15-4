// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
	return {
		values: values.slice(),
		length: makeDeque.arrLength,
		top: makeDeque.top,
		bottom: makeDeque.bottom,
		pop: makeDeque.pop,
		push: makeDeque.push,
		shift: makeDeque.shift,
		unshift: makeDeque.unshift,
		cut: makeDeque.cut,
		map: makeDeque.map
	}
}
//Factory creates multiple new deques.


// The factory's instance methods:
makeDeque.arrLength = function() { 	// can't use property named length;
	return this.values.length;
}

makeDeque.top = function() {
	return this.values[0];
}

makeDeque.bottom = function() {
	return this.values[this.values.length -1];
}

makeDeque.pop = function() {
	return this.values.pop()
}

makeDeque.push = function(val) {
	 this.values.push(val);
	 return this.values.length;
}

makeDeque.shift = function() {
	return this.values.shift();
}

makeDeque.unshift = function(val) {
	return this.values.unshift(val);
}


makeDeque.cut = function() {
	var fullLength = this.values.length;
	var counter = Math.ceil(fullLength/2);
	var backHalf =this.values.slice(counter);
	var frontHalf =this.values.slice(0, counter);
	this.values= backHalf.concat(frontHalf);
}


makeDeque.map = function(convertValFn) {  //
	return this.values.map(convertValFn);
}


makeDeque.sort = function(compareValsFn) {	
	return this.values.sort(compareValsFn);
	
}
