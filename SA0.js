// Write a function addOdds which receives an array of numbers, and sums up only the odd numbers.
// For example: let numArray = [1, 11, 20, 21, 30];
function addOdds(numArray) {
    //implement this function
    let sum = 0
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] % 2 !== 0)  sum += numArray[i];
    }
    return sum
  }
// Write another function addOdds -- no longer assume that the array will only contain number values.
// For example, the input array could now contain non-number data: let inputArray = ["hello", true, 1, 5, false, 20, 21];
  function addOdds(numArray) {
    //implement this function
      let sum = 0
      for (let i = 0; i < numArray.length; i++) {
        if ((typeof numArray[i] ==='number') && (numArray[i] % 2 !== 0))  sum += numArray[i];
      }
    return sum
  }
// Modify your function addOdds one more time -- have the function take in a 2nd input boolean argument. If the boolean input is true, it will sum only odd numbers. If the boolean input is false it will sum even numbers.
// For example: let newInputArray = ["hi", 10, 11, true, 32, false, 23];
  function addOdds(numArray, boolean) {
    //implement this function
    let sum = 0
      for (let i = 0; i < numArray.length; i++) {
          if (boolean){
              if ((typeof numArray[i] ==='number') && (numArray[i] % 2 !== 0))  sum += numArray[i];
          }else{
              if ((typeof numArray[i] ==='number') && (numArray[i] % 2 === 0))  sum += numArray[i];
          }    
      }
    return sum
  }
// Write a function indexesOnly which takes in an array, and replaces each element with their corresponding index values then returns that array.
// Your function should not create a new array, but replace the values of the original input array.
function indexesOnly(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = i
    };
    return arr
}
// Write a function sayFavoriteFood which takes in an object with a name and favoriteFood property. The function will return a string stating the person's name and favorite food. You can assume that the input object will always have these two properties.
// let person = { name : "Kevin", favoriteFood : "tacos" };
  function sayFavoriteFood(person) {
    //implement this function
    let strMessage = '';
    let name = person.name;
    let food = person.favoriteFood;
    strMessage = `${name}'s favorite food is ${food}`;
    return strMessage
  }