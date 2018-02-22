// this method will return an array of
// every string that can be formed by
// removing one or more string from the initial string
// NOTE: this will not change the order of any of the characters, just remove them

let removeDoubles = require('./removeDoubles');

module.exports = function recursiveSubString (string) {
  let out = [];
  
  if (string.length === 1) {
    return [];
  }
  
  for (let i = 0; i < string.length; i++) {
    let subString = string.slice(0,i) + string.slice(i + 1);
    out = out.concat([subString], recursiveSubString(subString));
  };

  return removeDoubles(out);
};

// so this:
// recursiveSubString('abcd');
// returns this: [ 'bcd', 'cd', 'd', 'c', 'bd', 'b',
// 'bc', 'acd', 'ad', 'a', 'ac', 'abd', 'ab', 'abc' ]