// this function will reverse the words in a string

module.exports = function reverseWordsInString (string) {
  return string.split(' ').reverse().join(' ');
};

// so for instance it will take the string 'this is the string to be reversed'
// and return 'reversed be to string the is this'