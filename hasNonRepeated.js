// this method will return true if there are any non repeated characters in
// a passed string

function hasNonRepeated (string) {
  let splitAndSort = string.split('').sort();
  let SASLength = splitAndSort.length;
  let answer = false;
  
  if (SASLength >= 2 && splitAndSort[0] !== splitAndSort[1] || splitAndSort[SASLength - 2] !== splitAndSort[SASLength - 1]) {
    answer = true;
    return answer;
  }
  
  for (let i = 2; i < splitAndSort.length; i++) {
    if ((splitAndSort[i - 2] !== splitAndSort[i - 1]) && (splitAndSort[i - 1] !== splitAndSort[i])) {
      answer = true;
      break;
    }
  };
  
  return answer;
};
// so if you run:
// hasNonRepeated('aabbcdc');
// hasNonRepeated('abbcc');
// hasNonRepeated('aaabcccc');
// hasNonRepeated('aabbcc');
// you get 
// true
// true
// true
// false
// respectively