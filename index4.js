//Question: Add a variable, object and function (use fat arrow)//

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

//Question- Export all three//

//See index4a

//Question: Add a fourth variable and make it the default export

const greeting1 = "Hello";

const person1 = {
  firstName: "Jake",
  lastName: "Smith",
  age: 30,
};

const sayHello1 = () => {
  return `${greeting}${person.firstName} ${person.lastName}!`;
};

const defaultGreeting1 = "Hi";

export { greeting1, person1, sayHello1, defaultGreeting1 as default };

//Question: Create a function with default parameters

function greetCustomer(greeting = "Hello", name = "Customer") {
  console.log(`${greeting}, ${name}!`);
}*/

//Create a template literal string

const firstName = "Jake";
const age = 30;

const greeting2 = `Hello, my name is ${firstName} and I am ${age} years old.`;

console.log(greeting2);

//Use Trim

const hello = "   Hello World   ";
const trimmedHello = hello.trim();

console.log(trimmedHello);

//Use a function to create an object

function createPerson(name, age) {
  const person = {
    name: name,
    age: age,
  };

  return person;
}

const jake = createPerson("Jake", 30);

console.log(jake);

//Create a constructor function & Create an instance of the function//

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const mary = new Person("Mary", 28);

console.log(mary);

//Extend the prototype with a new function//

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a new function to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

const sam = new Person("Sam", 30);
sam.greet();

//Create an object with a method and Invoke the method using Call, Apply and Bind

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  startEngine: function () {
    console.log("Engine started!");
  },
};

// Call the method
car.startEngine();

//call
car.startEngine.call(car);

//apply
car.startEngine.apply(car);

//bind
const startCarEngine = car.startEngine.bind(car);
startCarEngine();
