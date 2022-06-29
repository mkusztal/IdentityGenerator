"use strict";

var fs = require('fs');

var genderArr = ['male', 'female'];
var maleNamesArr = ['Igor', 'Robert', 'Maksymilian', 'Aleksander', 'Krystian', 'Artur', 'Maciej', 'Paweł', 'Rafał', 'Marcin'];
var femaleNamesArr = ['Aleksandra', 'Alina', 'Sandra', 'Klaudia', 'Weronika', 'Adrianna', 'Julia', 'Karolina', 'Maja', 'Monika'];
var lastNamesArr = ['Kowalski', 'Malinowski', 'Krab', 'Chyba', 'Wagner', 'Klose', 'Sikora'];
var people = [];

var randChoice = function randChoice(arr) {
  var randomIndex = Math.floor(Math.random() * arr);
  var item = arr[randomIndex];
  return item;
};

for (var i = 0; i < 20; i++) {
  var genderChoice = randChoice(genderArr); // nie pojawia się
  // nie ma prawa pojawić się imię bo go nie przypisałem

  if (genderChoice === 'male') {
    var maleNamesChoice = randChoice(maleNamesArr);
  } else if (genderChoice === 'female') {
    var femaleNamesChoice = randChoice(femaleNamesArr);
  }

  var randomLastName = Math.floor(Math.random() * lastNamesArr); // null

  var randomAge = Math.floor(Math.random() * 78) + 18; // poprawnie

  var person = {
    gender: genderChoice,
    lastName: randomLastName,
    age: randomAge
  };
  people.push(person);
}

var peopleFile = JSON.stringify(people);
fs.writeFile('people.JSON', peopleFile, function (err) {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});