"use strict";

var fs = require('fs');

var genderArr = ['male', 'female'];
var maleNamesArr = ['Igor', 'Robert', 'Maksymilian', 'Aleksander', 'Krystian', 'Artur', 'Maciej', 'Paweł', 'Rafał', 'Marcin'];
var femaleNamesArr = ['Aleksandra', 'Alina', 'Sandra', 'Klaudia', 'Weronika', 'Adrianna', 'Julia', 'Karolina', 'Maja', 'Monika'];
var lastNamesArr = ['Kowalski', 'Malinowski', 'Krab', 'Chyba', 'Wagner', 'Klose', 'Sikora'];
var people = [];

var randChoice = function randChoice(arr) {
  var randomIndex = arr[Math.floor(Math.random() * arr.length)]; //const item = arr[randomIndex];

  return randomIndex;
};

for (var i = 0; i < 20; i++) {
  var genderChoice = randChoice(genderArr); // nie pojawia się

  var nameChoice = void 0;
  var maleNamesChoice = randChoice(maleNamesArr);
  var femaleNamesChoice = randChoice(femaleNamesArr); // nie ma prawa pojawić się imię bo go nie przypisałem

  if (genderChoice === 'male') {
    nameChoice = maleNamesChoice;
  } else if (genderChoice === 'female') {
    nameChoice = femaleNamesChoice;
  }

  var randomLastName = lastNamesArr[Math.floor(Math.random() * lastNamesArr.length)]; // null

  var randomAge = Math.floor(Math.random() * 78) + 18; // poprawnie

  var person = {
    gender: genderChoice,
    firstName: nameChoice,
    lastName: randomLastName,
    age: randomAge
  };
  people.push(person);
}

var peopleFile = JSON.stringify(people);
fs.writeFile('people.json', peopleFile, function (err) {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});