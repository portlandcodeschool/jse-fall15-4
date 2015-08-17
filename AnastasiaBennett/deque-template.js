// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
  return {

    values: values.slice(),
    length: makeDeque.arrLength,
    top: makeDeque.top,
    bottom: makeDeque.bottom,
    push: makeDeque.push,
    pop: makeDeque.pop,
    shift: makeDeque.shift,
    unshift: makeDeque.unshift,
    sort: makeDeque.sort,
    cut: makeDeque.cut,
    map: makeDeque.map,
    shuffleProperly: makeDeque.shuffleProperly, 
    check: makeDeque.check,

  };
}

// The factory's instance methods:
makeDeque.arrLength = function() { 
  return this.values.length;
};

makeDeque.top = function() {
  return this.values[this.values.length - 1];
};

makeDeque.bottom = function(){
  return this.values[0];
};

//return the element
makeDeque.pop = function() {
  return this.values.pop();
};

makeDeque.push = function(val) {
  return this.values.push(val);
};

makeDeque.shift = function() {
  return this.values.shift();
};


makeDeque.unshift = function(val) {
  return this.values.unshift(val);
};

makeDeque.cut = function() {
  var midPoint = this.values.slice(Math.ceil(this.values.length / 2));
  this.values.splice(Math.round(this.values.length / 2));
  this.values = midPoint.concat(this.values);
};

makeDeque.map = function(convertValFn) {
  return this.values.map(convertValFn);
}

makeDeque.sort = function(compareValsFn) {
  return this.values.sort(compareValsFn);
}


makeDeque.shuffleProperly = function() {
    var proper = this.values.length, t, i;
    while (proper) {
        i = Math.floor(Math.random() * proper--);
        t = this.values[proper];
        this.values[proper] = this.values[i];
        this.values[i] = t;
    }
};

//2.e

makeDeque.check = function(val) {
    var dequeIndex = this.deque.indexOf(val);
    var absentIndex = this.dropped.indexOf(val);
    if (dequeIndex !== -1 && absentIndex !== -1) {
        this.dropped.splice(absentIndex,1);
        return true;
    } else {
        return false;
    }
}

