// this method takes in two strings and 
// return a boolean indicating whether or not they are 
// anagrams

module.exports = function areAnagrams (string1, string2) {
  return string1.split('').sort().join('') === string2.split('').sort().join('');
};

// so this:
// console.log(areAnagrams('georgebush', 'hebugsgore'));
// returns true while this:
// console.log(areAnagrams('this', 'that'));
// returns false