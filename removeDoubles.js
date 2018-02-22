// this function will accept an array and return an array with all duplicate
// values removed

module.exports = function removeDoubles (array) {
  return array.reduce((acum, crnt) => {
    !acum.includes(crnt) ? acum.push(crnt) : '';
    return acum;
  }, []);
};

// so this:
// removeDoubles([1, 2, 'h', 4, 3, 't', 3, 3, 3, 'h', 4, 4, 4]);
// returns this [ 1, 2, 'h', 4, 3, 't' ];