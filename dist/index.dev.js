"use strict";

var fs = require('fs');

fs.writeFile('people.JSON', people, function (err) {
  if (err) {
    console.log('File has been successfully generated! Check people.json');
  } else {
    console.log('Something went wrong');
  }
});
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
  var genderChoice = randChoice(gender);

  if (genderChoice === 'male') {
    var maleNamesChoice = randChoice(maleNames);
  } else if (genderChoice === 'female') {
    var femaleNamesChoice = randChoice(femaleNames);
  }

  var randomLastName = Math.floor(Math.random() * lastNames);
  var randomAge = Math.floor(Math.random() * 78) + 18;
  var person = {
    gender: genderChoice,
    lastName: randomLastName,
    age: randomAge
  };
  people.push(person);
}

var peopleFile = JSON.stringify(people);