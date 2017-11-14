//Do not change any of the function names

function multiplyByTen(num) {
  return num * 10;
}

function subtractFive(num) {
  return num - 5;
}

function areSameLength(str1, str2) {
  if(str1.length === str2.length) {
  return true;
  }
  return false;
}

function areEqual(x, y) {
  if(x === y){
  return true;
  }
  return false;
}

function lessThanNinety(num) {
  if(num < 90){
  return true;
  }
  return false;
}

function greaterThanFifty(num) {
  if(num > 50){
  return true;
  }
  return false;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function getRemainder(x, y) {
  return x % y;
}

function isEven(num) {
  if(num % 2 === 0) {
  return true;
  }
  return false;
}

function isOdd(num) {
  if(num % 2 === 1) {
  return true;
  }
  return false;
}

function square(num) {
  return Math.pow(num, 2);
}

function cube(num) {
  return Math.pow(num, 3);
}

function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
}

function roundNumber(num) {
  return Math.round(num);
}

function roundUp(num) {
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  var exclamation = '!';
  var newStr = str + exclamation;
  return newStr;
}

function combineNames(firstName, lastName) {
  var combined = firstName + ' ' + lastName;
  return combined;
}

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
 
function getRectangleArea(length, width) {
  return length * width;
}

function getTriangleArea(base, height) {
  return 0.5 * base * height;
}

function getCircleArea(radius) {
  return Math.round(Math.PI * Math.pow(radius, 2));
}

function getRectangularPrismVolume(length, width, height) {
  return length * width * height;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
