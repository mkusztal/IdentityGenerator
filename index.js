const fs = require('fs');

fs.writeFile('people.JSON', data, (err) => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');

  const genderArr = ['male', 'female'];
  const maleNamesArr = [
    'Igor',
    'Robert',
    'Maksymilian',
    'Aleksander',
    'Krystian',
    'Artur',
    'Maciej',
    'Paweł',
    'Rafał',
    'Marcin',
  ];
  const femaleNamesArr = [
    'Aleksandra',
    'Alina',
    'Sandra',
    'Klaudia',
    'Weronika',
    'Adrianna',
    'Julia',
    'Karolina',
    'Maja',
    'Monika',
  ];
  const lastNamesArr = [
    'Kowalski',
    'Malinowski',
    'Krab',
    'Chyba',
    'Wagner',
    'Klose',
    'Sikora',
  ];

  const people = [];
  const randChoice = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr);

    const item = arr[randomIndex];
    return item;
  };

  for (let i = 0; i < 20; i++) {
    const genderChoice = randChoice(genderArr);

    if (genderChoice === 'male') {
      const maleNamesChoice = randChoice(maleNamesArr);
    } else if (genderChoice === 'female') {
      const femaleNamesChoice = randChoice(femaleNamesArr);
    }

    const randomLastName = Math.floor(Math.random() * lastNamesArr);
    const randomAge = Math.floor(Math.random() * 78) + 18;

    const person = {
      gender: genderChoice,
      lastName: randomLastName,
      age: randomAge,
    };

    people.push(person);
  }

  const peopleFile = JSON.stringify(people);
});
