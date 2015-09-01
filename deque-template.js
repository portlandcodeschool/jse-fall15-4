// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {//values parameter is an array
	var deque ={
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

		arr: []
	};
	
	for(var i=0; i< values.length; i++)
	{
		var arrayValue = values[i];
		//deque.push(arrayValue);
		deque.arr[i] = arrayValue;


		//PROBLEM 1: makeDeque(values) accepts an array, not an integer
		//PROBLEM 2: this loop is supposed to get each element in the values array and add it to the deque object
		//QUESTION: how do you get each element of values array?
				//then push it on to the deque object by calling push(val) function of deque object 
		
		//this probably would run but is not right
		
	}
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

	return deque;

}

// The factory's instance methods:
makeDeque.arrLength = function() { 	// can't use property named length;
				// as a function, makeDeque has a predefined length property.
	return this.arr.length;//...
}

makeDeque.top = function() {
	//...

	return this.arr[this.arr.length - 1];
}

makeDeque.bottom = function() {
	//...
	return this.arr[0];
}

makeDeque.pop = function() {
	//...

	//get the top element
	var x = this.top();
	//remove the top element
	this.arr.pop();
	//return the top element
	return x;
}
makeDeque.push = function(val) {
	this.arr.push(val);
	return this.length;
}

makeDeque.shift = function() {
	//...
	var y = this.bottom();
	this.arr.shift();
	return y;
}

makeDeque.unshift = function(val) {
	//...
		this.arr.unshift(val);
		return this.arr.length;
}

makeDeque.cut = function() {
	//...

	//less than 2 items in array, no change
	if(this.arr.length < 2){
		return;
	}
	//find the middle index
	var middleIndex= this.arr.length / 2;
	//if length is odd, round up
	middleIndex=Math.round(middleIndex);
	//get the elements up to middle
	var arrayMiddle = this.arr.slice(0,middleIndex);

	//remove those elements from the array
	this.arr.splice(0, middleIndex);
	//add the elements to the end of the array
	var newArrayConcat= this.arr.concat(arrayMiddle);
	this.arr = newArrayConcat;
}

makeDeque.map = function(convertValFn) {
	//...
	return this.arr.map(convertValFn);
}

makeDeque.sort = function(compareValsFn) {
	//...
	this.arr.sort(compareValsFn);

}

// Feel free to write tests for your code!

