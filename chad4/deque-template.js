// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
	return {
	// return an instance object which has the following methods:
    array: values,
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
    shuffle: makeDeque.shuffle
    }
}

// The factory's instance methods:
makeDeque.arrLength = function() { 	// can't use property named length;
    // as a function, makeDeque has a predefined length property.
	return this.array.length;
}

makeDeque.top = function() {
	return this.array[this.array.length - 1];
}

makeDeque.bottom = function() {
	return this.array[0];
}

makeDeque.pop = function() {
	if (this.array.length > 0) {
      return this.array.pop();
    } else {
        return undefined;
    }
}

makeDeque.push = function(val) {
	return this.array.push(val);
}

makeDeque.shift = function() {
	if (this.array.length > 0) {
      return this.array.shift();
    } else {
        return undefined;
    }
}

makeDeque.unshift = function(val) {
	return this.array.unshift(val);
}

makeDeque.cut = function() {
	if (this.array.length > 1) {
      var left = this.array.splice(0, Math.floor(this.array.length / 2)); // cuts off left half of array
      var cutArray = this.array.concat(left); // pastes left half onto the end of the right half
      return this.array = cutArray; // sets instance array to the new, re-ordered array
    }
}

function convertValFn(val) {
  return val * 2;
}

makeDeque.map = function() {
	return this.array.map(convertValFn);
}

function compareValsFn(a,b) {
  return a - b;
}

makeDeque.sort = function(compareValsFn) {
	return this.array.sort(compareValsFn);
}
//*** bad shuffle fn
//function shuffleValsFn(a,b) {
//  return .5 - Math.random();
//}

function shuffle(array) {
  var random = array.map(Math.random);
  array.sort(function(a, b) {
    return random[a] - random[b];
  });
}

makeDeque.shuffle = function() {
  return shuffle(this.array);
}









// Feel free to write tests for your code!

