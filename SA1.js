// Execerses 1
function convertTo(units, num) {
  //Do not worry about formatting your output to round to the nearest 2nd decimal number.
  if (units === 'cm'){
    return num * 2.54
  }else if(units === 'in'){
    return num / 2.54
  };
}




console.log(convertTo('cm', 100)); //254
console.log(convertTo('in', 50.8)); //20

// Excercises 2

var cityZBusSchedules = {
  bus12Schedule: [9, 18, 27, 36],
  bus15Schedule: [11, 22, 33, 44],
  bus22Schedule: [15, 30, 45]
};

function displayBusTimes(busScheduleObj, busLine) {

  for (let key in busScheduleObj) {
    if (key === busLine){
      value = busScheduleObj[key]
    };
  };
  return `The bus will arrive in the next ${value} minutes.`
}

console.log(displayBusTimes(cityZBusSchedules, "bus15Schedule"));
console.log(displayBusTimes(cityZBusSchedules, "bus22Schedule"));

// Exercises 3

function addGenre(song, genre) {
  song['genre'] = genre
  return song;
}
var favoriteSong = {title: "Countdown", artist: "Beyonce", durationInSeconds: 212};

console.log(addGenre(favoriteSong, "Contemporary R&B"));

// Exercises 4

function executiveSummary(email) {
  if (email.length < 15){
    return email
  }else{
    return email.slice(0,15)
  }
}

console.log(executiveSummary('URGreat!!!'));
console.log(executiveSummary('URGENT: the lobby is rapidly filling'));

// Exercises 5

// var awesomePlaylist = [
//   {
//     title: "Hay Day",
//     artist: "Robo-Crop",
//     durationInSeconds: 378
//   }, {
//     title: "10,000 Pounds",
//     artist: "L-Ton Jonn",
//     durationInSeconds: 498,
//   }, {
//     title: "Caesar's Salad",
//     artist: "DJ Dinner Julius",
//     durationInSeconds: 600,
//   }, {
//     title: "The British Are On Their Way",
//     artist: "Raul Pevere",
//     durationInSeconds: 1095,
//   }, {
//     title: "13th",
//     artist: "The Doctors",
//     durationInSeconds: 185,
//   }
// ];

// function removePartyKillers(playlist) {


// }

// Exercises 6

function onlyPayForHealthyThings(foodList) {
  let sumPdtos = 0;
  foodList.forEach(element => {
    if (typeof element ==='object'){
      value = element['nutritionalValue'];
      console.log(value)
      if (value['lowSugar']==='true' && value['lowSodium']==='true'){
        priceT = element['price'];
        sumPdtos += priceT
      };
    };
  });
  return sumPdtos
}
var myCart = [ 
  { name: 'chips',
    nutritionalValue: { lowSugar: true, lowSodium: false },
    price: 0.75 },
  { name: 'carrots',
    nutritionalValue: { lowSugar: true, lowSodium: true },
    price: 1.5 },
  { name: 'cookies',
    nutritionalValue: { lowSugar: false, lowSodium: true },
    price: 2.5 },
  { name: 'apples',
    nutritionalValue: { lowSugar: true, lowSodium: true },
    price: 0.6 },
  { name: 'soda',
    nutritionalValue: { lowSugar: false, lowSodium: true },
    price: 1.1 },
  { name: 'avocados',
    nutritionalValue: { lowSugar: true, lowSodium: true },
    price: 0.75 } 
  ];

  console.log(onlyPayForHealthyThings(myCart));