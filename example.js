function countOccurrences(array, item) {
    let lastIndex = 0;
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      if(element === item){
        lastIndex = i
      };
    }
    return lastIndex
  }

function countOccurrences(array, item) {
    let lastIndex = -1;
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      if(element === item){
        lastIndex = i
      };
    }
     if(lastIndex > 0){
      return lastIndex
    }else {
        return -1
    } 
  }

  console.log(countOccurrences([1,1,2], 2))

  function findSmallestNumberAmongMixedElements(array) {
    // your code here
    let lessNumber = 100;
    for (let i = 0; i < array.length; i++) {
        if((typeof array[i] === 'number') && (array[i] < lessNumber)){
            lessNumber = array[i]
        };
    }
    if(lessNumber !== 100){
        return lessNumber
    }else {
        return 0
    }
    
}

var output = findSmallestNumberAmongMixedElements([4, 'pepe', 9]);
console.log(output); // --> 4
