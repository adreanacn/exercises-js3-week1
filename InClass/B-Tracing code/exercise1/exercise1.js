const greetPeople = people => {
  let greeting = "He";
  greeting = greeting + "llo";
  greeting = greeting + " ";

  people.forEach(person => {
    //greeting = greeting + person;
    greeting = `Hello ${person}`;
    console.log(greeting);
  });

  return greeting;
};

/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
var mentors = ['Irina', 'Ashleigh', 'Etza'];
var result = greetPeople(mentors)
