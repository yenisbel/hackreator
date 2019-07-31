var groupA = [
    {
      name: "Mia",
      age: 10,
      heightInInches: 52
    },
    {
      name: "Jaya",
      age: 9,
      heightInInches: 45
    },
    {
      name: "Kiana",
      age: 10,
      heightInInches: 55
    },
    {
      name: "Alex",
      age: 11,
      heightInInches: 48
    }
  ]
  
  function tallEnoughToRide(array) {
     let arrayPersons = []; 
     array.forEach(element => {
        if(element.heightInInches >= 48){
            arrayPersons.push(element.name)
        }
     });
     return arrayPersons
  }

  console.log(tallEnoughToRide(groupA)); //["Mia", "Kiana", "Alex"];

//   Exerc 2

function tallestPerson(people) {
    let measureTallest = 0;
    for (let i = 0; i < people.length; i++) {
        let currentPerson = people[i];
        if (currentPerson.heightInInches > measureTallest){
            measureTallest = currentPerson.heightInInches
            personName = currentPerson.name
        };  
    };
    return `${personName} at ${measureTallest} inches`
}

console.log(tallestPerson(groupA)); //"Kiana at 55 inches"

// Exerc 3

var staffA = [
    {
      name: "Lia",
      department: "Human Resources",
      dietaryRestrictions: [],
      mealPreferences: "no preferences"
    },
    {
      name: "Sebastian",
      department: "Engineering",
      dietaryRestrictions: ["dairy free", "gluten free"],
      mealPreferences: "vegetarian"
    },
    {
      name: "Ari",
      department: "Executive",
      dietaryRestrictions: ["dairy free"],
      mealPreferences: "vegetarian"
    },
    {
      name: "Martha",
      department: "Legal",
      dietaryRestrictions: ["nut allergies"],
      mealPreferences: "non-vegetarian"
    }
  ];
  
  function orderAVegetarianDish(array) {
    for (let j = 0; j < array.length; j++) {
        let element = array[j];
        if(element.mealPreferences === 'vegetarian'){
            return true
        };
    };
    return false
  }
  
  console.log(orderAVegetarianDish(staffA)); //true

//   Exerc 4

var shoppingList = [
    {
      item: "rice",
      price: 12.75,
      weightInPounds: 20
    },
    {
      item: "chicken",
      price: 6.99,
      weightInPounds: 1.25
    },
    {
      item: "cookware",
      price: 79.99,
      weightInPounds: 35
    },
    {
      item: "celery",
      price: 3.99,
      weightInPounds: 2
    },
    {
      item: "carrots",
      price: 2.85,
      weightInPounds: 2
    },
    {
      item: "green beans",
      price: 2.55,
      weightInPounds: 2
    }
  ];
  
  function shoppingSummary(arrayPdtos) {
      let totalPrice = 0;
      let countPdtos = 0;
      arrayPdtos.forEach(pdto => {
          if((totalPrice + pdto.price)< 100){
              totalPrice += pdto.price
              countPdtos ++
          };
      });
      return `I got ${countPdtos} items at ${totalPrice}`
  }

  console.log(shoppingSummary(shoppingList)); //"I got 3 items at $99.73"

//   Exer 5

function removeMostExpensive(arry) {
    // choose a value to compare could be 0 or 100, why 100 check refrence prior exercises 4 
    let mostExpensive = 0;
    let arryLessExpensive = arry.slice();
    for (let i = 0; i < arryLessExpensive.length; i++) {
        let item = arryLessExpensive[i];
        if (item.price > mostExpensive){
            mostExpensive = item.price
            indexItem = i
        };  
    };
    arryLessExpensive.splice(indexItem,1);
    return arryLessExpensive
}







console.log(removeMostExpensive(shoppingList));

/*resultArry[
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];
*/
