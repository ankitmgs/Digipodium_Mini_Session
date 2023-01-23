// old way
const addNums = function (a, b) {
  console.log(a + b);
};

addNums(435, 54);

// new way - es6
const addNumsv2 = (x, y) => {
  console.log(x + y);
  var line = "var keyword only works with the function";
  console.log(line);
};

addNumsv2(345, 56);

const multiply = (a) => console.log(a * a);

multiply(34);

console.log(line);
