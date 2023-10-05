//Question 1- Add a variable, object and function (use fat arrow)//

// Variable
export const greeting = "Hello, ";

// Object
export const person = {
  firstName: "Jake",
  lastName: "Smith",
  age: 30,
};

// Function using fat arrow
export const sayHello = () => {
  return `${greeting}${person.firstName} ${person.lastName}!`;
};

// Calling the function
const message = sayHello();
console.log(message);

//Question 2- Export all three//

//See index4a

//Question 3- Add a fourth variable and make it the default export
