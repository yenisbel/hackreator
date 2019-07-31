
var each = function(collection, callback) {
    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++) {
       callback(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        callback(collection[key], key, collection);
      };
    };
  };

var array = [1,2,3];
var obj = {a:1, b:2, c:3};

each(array, function(element){
    console.log(element);
});

each(obj, function(element){
    console.log(element);
});
//   console.log(each([1,2,3,'banana'],function(val){return val}))
//   console.log(each({1:1,2:2,3:3,'whatever':4,'junk':'banana'},function(val){return val}))
  /*
  Issues with 'each'
  1)typeof collection === 'array'
  2)iterator(collection[key], key, collection)
  3) no semi-colon ?
  etc..
  */
  
  
  //Write a function addRandomAgeInclusive that takes in a name string, or an object with a name property, and two numbers. 
//  This function should generate a random number within the range of the two input numbers, and return an object with an added 
// age property along with the randomly generated number.
  
  //Edge cases to consider:
  
  //If input object does not have a name property, return original object.
  //If 2nd input is larger than 3rd input, return original first argument.
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

// if string
  // create and obj with key name and value string
// else if obj
  // check for key name, if don't have return original obj
//if num1 > num2
  // return first arg with no change (string or obj)
//else 
  // do random age generation
  // add age to obj
  // return obj

  function addRandomAgeInclusive(person,num1,num2){
    let obj
    if(typeof person === 'string'){
      obj = {'name': person};
    }else if(typeof person === 'object'){
      obj = person;
      if (!obj.hasOwnProperty('name')){
        return person
      };
    }
    if(num1 > num2){
      return person
    }else{
      obj.age = getRandomInt(num1, num2);
      return obj; 
    };
  }


  console.log(addRandomAgeInclusive('Mayor', 20, 25) /*=== { name: 'Mayor', age: 25 }*/);
  console.log(addRandomAgeInclusive({ name: 'Sean', id: 10330293 }, 30, 40) /*=== { name: 'Sean', id: 10330293, age: 39 }*/);
  console.log('trish',addRandomAgeInclusive({ firstName: 'Trish' }, 30, 40)/*=== { firstName: 'Trish' }*/)
  console.log(addRandomAgeInclusive('Kai', 20, 18)/*=== 'Kai'*/);
  
//   assignGroup('Harold'); // { name: 'Harold', group: 'B' }
//   assignGroup({ name: 'Kyla'}); // { name: 'Kyla', group: 'C' }
//   assignGroup('Cynthia'); // { name: 'Cynthia', group: 'B' }
  function assignGroup(person){
    let obj
    var groups = ['A',' B','C','D']
    if(typeof person ==='string'){
      obj = {'name': person};
    }else if(typeof person === 'object'){
      obj = person;
      if(!obj.hasOwnProperty('name')){
        return person
      }else if (obj.hasOwnProperty('group') && groups.indexOf(obj['group']) !== -1){
        return person
      };
    };
    obj.group = groups[getRandomInt(1,4)];
    return obj;
  }

  console.log(assignGroup('Harold')); // { name: 'Harold', group: 'B' }
  console.log(assignGroup({ name: 'Kyla'})); // { name: 'Kyla', group: 'C' }
//   assignGroup('Cynthia'); // { name: 'Cynthia', group: 'B' }