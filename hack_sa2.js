// Execerses 1

function lesserNum(num1, num2) {
  if (num1 < num2) return num1;
  return num2
}

console.log(lesserNum(9, 5))
console.log(lesserNum(2, 3))

// Exer2

function isHotdogASandwich(input) {
  if(input) return `Alright, MAYBE. Who's to say?`
  return true
}

console.log(isHotdogASandwich('lolo'))
console.log(isHotdogASandwich())


//Exerci3

function billTotal(subTotal) {
  let saleTax = 0
  let tipAmount = 0
  saleTax = (subTotal * 9.875)/100;
  tipAmount = (subTotal * 20)/100;
  return subTotal + saleTax + tipAmount
}

console.log(billTotal(120))

// Exers4

function budgetStatus(cost) {
  if(cost < 250){
    return `Under budget by ${250 - cost} dollar(s)`
  }else{
    return `Over budget by ${cost - 250} dollar(s)`
  }
}

console.log(budgetStatus(155))
console.log(budgetStatus(411))

// Exer5
function secondsConverter(seconds) {
  //If it is greater than 60 minutes, do not worry about converting it to hours. Cause 60 seconds = 1min
  if (seconds < 60 ){
    return `0 minutes and ${seconds} seconds`
  }else{
    return `${seconds/60} minutes and ${seconds % 60} seconds`
  }
}

console.log(secondsConverter(300))
console.log(secondsConverter(5225))

// Exer6
function arrayInfo(arr){
  return `Length: ${arr.length}, index of last element: ${arr.length - 1}`
}

console.log(arrayInfo([true]))
console.log(arrayInfo(['true', 'falsy','lolo']))

// Exerc7
function acronymMaker(wordBank) {
  //You can assume the first letter of each string in the array is capitalized
  let strWord = '';
  wordBank.forEach(element => {
    strWord += element[0].toUpperCase()
  });
  return strWord
}

console.log(acronymMaker(["World", "Health", "Organization"]))

// Exerc8
function getCurrentLocation(person) {
  // let strLocation = ''
  return `${person['city']}, ${person['state']}`
}

let locateMe = {
  name: "Lana Bartlett",
  age: 48,
  work: {
    title: "Product Manager",
    tenure: "3 years"
  },
  city: "Redmond",
  state: "Washington"
}
console.log(getCurrentLocation(locateMe))

// Exerc9
function multiplyBy(numberArray, factor) {
  // YOUR CODE HERE
  let resultArrFactor = [];
  for (let i = 0; i < numberArray.length; i++) {
    let newValue = numberArray[i] * factor
    resultArrFactor.push(newValue) ;
  }
  return resultArrFactor
}

console.log(multiplyBy([2,4,6,8], 2))

// Exerc10
function iValidatedThis(objectToCheck) {
  objectToCheck['dataChecked'] = true;
  objectToCheck['checkedBy'] = 'Yenisbel' 
}

let objYeni = { 'lastname': 'Valle', 'age': 34 , 'color': 'blue'}
iValidatedThis(objYeni)  
console.log(objYeni)


// Additional Exercises
// Exercise 1
// Write a function countInstancesOf which takes in a letter (string) and a sentence (string), and 
// returns the number of occurences of that letter

function countInstancesOf(letter, sentence) {
  // YOUR CODE HERE
  let arrSentence = sentence.split('');
  let count = 0;
  arrSentence.forEach(element =>{
    if (element === letter) count ++
  });
  return count
}
// Your function's results would look like:

console.log(countInstancesOf("a", "mississippi is the best river ever")); //0
console.log(countInstancesOf("i", "mississippi is the best river ever")); //6
console.log(countInstancesOf("b", "mississippi is the best river ever")); //1
// Exercise 2
// Write a function titleCase which takes in a string, and returns a title-cased string.

function titleCase(str) {
  // YOUR CODE HERE
  let resultStr = [];
  let words = str.split(' ');
  // str.toLowerCase();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let initialLe = word[0].toUpperCase();
    let restWord = word.slice(1).toLowerCase();
    let newWord = initialLe + restWord;
    resultStr.push(newWord)
  };

  return resultStr.join(' ');
}
// Your function's results would look like:

console.log(titleCase('peter piper')); //"Peter Piper"
console.log(titleCase('teXt mEssAge')); //"Text Message"
console.log(titleCase('more to me than meets the eye')); //"More To Me Than Meets The Eye"
// Hint: Explore the string methods toUpperCase and toLowerCase on MDN.

// Exercise 3
// Given an object with this structure:

var person = {
  name: {
    first: "Richard",
    last: "Loeb"
  },
  birthDay: {
    month: "July",
    day: 12,
    year: 1957
  }
}
// Write a function getNameAndBirthday which returns the name and birthday in one line:

function getNameAndBirthday(person){
  return `${person.name.first} ${person.name.last}: ${person.birthDay.month} ${person.birthDay.day}, ${person.birthDay.year}`
}; //"Richard Loeb: July 12, 1957"
// Hint: Pay attention to the extra characters in the sample output.
console.log(getNameAndBirthday(person))
// Exercise 4
// Someone who recorded these people's names and birthdays wasn't meticulous with their data entry, and input information with inconsistent capitalizations.

var anotherPerson = {
  name: {
    first: "kylA",
    last: "liVingSton"
  },
  birthDay: {
    month: "octobeR",
    day: 20,
    year: 1961
  }
}
// Write a function 'renderInfoNeatly' which takes in a person object similar to the previous example, and returns the person's name and birthday with proper casing.

function renderInfoNeatly(anotherPerson){
  let firstName = anotherPerson.name.first;
  let lastName = anotherPerson.name.last;
  let monthBirth = anotherPerson.birthDay.month;
  // let personBirthday = getNameAndBirthday(anotherPerson);
  // return titleCase(personBirthday)
  return `${firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()}: ${monthBirth[0].toUpperCase() + monthBirth.slice(1).toLowerCase()} ${anotherPerson.birthDay.day}, ${anotherPerson.birthDay.year}`
};
console.log(renderInfoNeatly(anotherPerson))
//"Kyla Livingston: October 20, 1961"

// Exercise 5
// Write a function getPeopleBornIn which takes in an array and string month, and returns a new array of people and their birthday information who were all born in the given month.

// A sample input array would look like:

var staff = [
  {name: {first: "Alyssa", last: "Hacker"}, birthDay: {month: "June", day: 5, year: 1987}},
  {name: {first: "Ben", last: "Bitdiddle"}, birthDay: {month: "August", day: 19, year: 1984}},
  {name: {first: "Eva", last: "Ator"}, birthDay: {month: "March", day: 29, year: 1980}},
  {name: {first: "Lem", last: "Tweakit"}, birthDay: {month: "August", day: 11, year: 1989}},
  {name: {first: "Louis", last: "Reasoner"}, birthDay: {month: "November", day: 17, year: 1992}}
];
// A call to your function getPeopleBornIn(staff, 'August');

function getPeopleBornIn(staff, month) {
  let resultPeople = [];
  staff.forEach(element => {
    if(getMonthDate(element) === month){
      let strPerson = getNameAndBirthday(element);
      resultPeople.push(strPerson)
    };
  });
  return resultPeople;
}

function getMonthDate(itemPerson){
  return itemPerson.birthDay.month
}

console.log(getPeopleBornIn(staff, 'August'))
// Would return:["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"]