// this method checks to see if, after removing a single character
// from a string, that string now has an equal number of each one of its characters
// for instance, aaabbcc would return true because if you remove a then it has an equal
// number of A's B's and C's.

function equalFrequency(s){
  s = s.split('');
  let subsets = [];
  
  // first we create a subsets array and fill it with the characters
  // from subset minus 1
  for (let i = 0; i < s.length; i++) {
    subsets.push(s.slice(0,i).concat(s.slice(i+1)).sort());
  }
  
  // next we map that array of subsets to an array of arrays that represent
  // how many times a particular character was used in a particular string
  subsets = subsets.map((subStr) => subStr.reduce((acum, curVal) => {
    if (acum[0] && acum[0][0] === curVal) {
      acum[0][1]++;
    } else {
      acum.unshift([curVal, 1]);
    }
    return acum;
  }, []));
  
  // then we map that array to an array of booleans representing whether or not
  // removing that particular character resulted in a string that meets our
  // specifications
  subsets = subsets.map((subStr) => !!subStr.reduce((acum, curVal) =>
    (acum[1] === curVal[1]) ? acum : NaN
  ));
  
  // finally we reduce that array to a single boolean representing whether or not
  // there was a single true in the array
  return subsets.reduce((acum, curVal) => {
    return curVal ? true : acum;
  }, false)
};