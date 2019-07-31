// Exercise 
function identity(name) {
    return name
}

console.log(identity("hello world")); //"hello world"
console.log(identity(500)); //500

// Exercise 2 (conditionals)
// Write a function coffeeLover which takes in a boolean value, and returns the string "Enjoy a cup for free!" or "Take a look at our other drinks!" 

function coffeeLover(params) {
    return params === true ? 'Enjoy a cup for free!': 'Take a look at our other drinks!'
}
// ternary conditional

console.log(coffeeLover(true)); //"Enjoy a cup for free!"
console.log(coffeeLover(false)); //"Take a look at our other drinks!"

// Exercise 3 (objects, conditionals)
// Write a function coffeeLoverExtended which takes in an object with the structure like:

var customer001 = {
  name: "John Riley",
  ticketNumber: "A01",
  enjoysCoffee: true
};

var customer002 = {
  name: "Harold Crane",
  ticketNumber: "A02",
  enjoysCoffee: false
};
function coffeeLoverExtended(customer) {
    return customer.enjoysCoffee === true ? 'Enjoy a cup for free!': 'Take a look at our other drinks!'
}

console.log(coffeeLoverExtended(customer001)); //"Enjoy a cup for free!"
console.log(coffeeLoverExtended(customer002)); //"Take a look at our other drinks!"

// Exercise 4 (numbers)
// Write a function convertToKilometers which expects a number of miles passed in.

function convertToKilometers(miles) {
    return miles * 1.60934
}

console.log(convertToKilometers(50)); //80.467
console.log(convertToKilometers(361)); //580.973

// Exercise 5 (conditionals and numbers)
// Write a function isGoodFreethrowShooter which takes in a shooting percentage (a number you can assume will be between 0 and 1 -- exclusive of 1), and returns based on the following criteria:

// number is between 0-0.65, return "Horrible freethrow shooter"
//number is between 0.65-0.80 return "Decent freethrow shooter"
//number is between 0.80-1.00 return "Great freethrow shooter"
//Each range is inclusive of the lower bound, and exclusive of the upper 

function isGoodFreethrowShooter(number){
  if (0 < number < 0.65) return "Horrible freethrow shooter";
  if (0.65 <= number < 0.80) return "Decent freethrow shooter";
  if (0.80 <= number < 1.00) return "Great freethrow shooter";
}

// isGoodFreethrowShooter(0.90); //"Great freethrow shooter"
// isGoodFreethrowShooter(0.09); //"Horrible freethrow shooter"
 console.log(isGoodFreethrowShooter(0.55)); //"Decent freethrow shooter"

// Exercise 6 (strings)
// Write a function dogsIWouldPet which takes in an item (string), and returns a sentence stating dogs you would pet

function dogsIWouldPet(string) {
  return string === 'I do not like dogs' ? `I would not pet dogs`:`I would pet dogs no bigger than an ${string}`
}
console.log(dogsIWouldPet("ottoman")); //"I would pet dogs no bigger than an ottoman"
console.log(dogsIWouldPet("small horse"));
console.log(dogsIWouldPet("I do not like dogs"));
// If your function were passed in a string "I do not like dogs", you can have your function return "I would not pet dogs".

// Exercise 7 (numbers and conditionals)
// function which takes in a height (number) in inches, and returns true or falsei f the input is greater than or equal to 48
function isTallEnough (height) {
  return height >=48 ? true : false
}

console.log(isTallEnough(72)); //true
console.log(isTallEnough(28)); //false

// Exercise 8 (objects)
// Write a function favoriteDessert which no arguments, but returns an object with 3 key-value pairs.

function Dessert(name, color, savor) {
  this.name = name;
  this.color = color;
  this.savor = savor
}

let flan = new Dessert('Flan', 'Brown', 'Sweet')
console.log(flan)
let brownie = new Dessert('Chocolate Brownie', 'Brown', 'Sweet')
console.log(typeof brownie)

// Exercise 9 (loops)
// Write a function countNumOfStrings which takes in an array and returns the number of strings there are in the array.

function countNumOfStrings(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if(typeof element === 'string'){
      count ++
    };
  }
  return count
}

console.log(countNumOfStrings(["hello", "world", 5, true, {}])); //2
// countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
console.log(countNumOfStrings(["There is only one string in this example"])); //1

// Exercise 10 (loops)
// Write a function listLengthOfAllWords which takes in an array of words (strings), and returns an array of numbers representing the length of each word.

function listLengthOfAllWords(array) {
  for (let j = 0; j < array.length; j++) {
    array[j] = array[j].length ;
  };
  return array
}
console.log(listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code'])); //[5, 5, 1, 3, 4];