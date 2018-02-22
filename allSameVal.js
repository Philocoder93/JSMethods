// this method will accept an array
// of strings or non zero numbers
// and return a boolean representing whether or not all the values in
// the array are equivalent

module.exports = function allSameVal (array) {
  return !!array.reduce((acum, crnt) => {
    return acum === crnt ? acum : NaN; 
  });
};

// so these:
// allSameVal([5, 5, 5, 5, 5]);
// allSameVal([5, 5, 5, 6, 5]);
// allSameVal([5, 5, 5, undefined, 5]);
// allSameVal([5, 5, 5, 5, null]);
// will return
// true
// false
// false
// false
// respectively