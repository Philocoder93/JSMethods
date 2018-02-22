// this method will take a string and return an array of every character that
// is present more than once in that string

module.exports = function duplicateCharacters (string) {
  let splitAndSort = string.split('').sort();
  return Object.keys(splitAndSort.reduce((acum, crntVal, crntInd) => {
    crntVal === splitAndSort[crntInd + 1] ? acum[crntVal] = true : '';
    return acum;
  }, {}));
};

// so this:
// duplicateCharacters('aaaeebbcdde');
// returns this: [ 'a', 'b', 'd', 'e' ]