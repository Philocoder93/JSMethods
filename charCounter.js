// this method is designed to take in a string and return
// an object that represents how many times various characters 
// were used in that string, it will be used to buff up various other
// string manipulation methods

module.exports = function charCounter(string) {
  return string.split('').reduce((acum, crnt) => {
    acum[crnt] ? acum[crnt]++ : acum[crnt] = 1;
    return acum;
  }, {});
};

// so this:
// charCounter('asuh6fuerbg5uwegjwebr6iwehrg5werhgqerbfw9drugberg');
// returns this:
// { '5': 2,
//   '6': 2,
//   '9': 1,
//   a: 1,
//   s: 1,
//   u: 4,
//   h: 3,
//   f: 2,
//   e: 7,
//   r: 7,
//   b: 4,
//   g: 6,
//   w: 5,
//   j: 1,
//   i: 1,
//   q: 1,
//   d: 1 }