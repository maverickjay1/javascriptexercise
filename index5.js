//Destructure an array//

const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

//Destructure an object//

const person = {
  firstName: "Luke",
  lastName: "Smith",
  age: 40,
};

const { firstName, lastName, age } = person;

console.log(firstName);
console.log(lastName);
console.log(age);

//Change the name of one of the items you pull out of the object//

const person1 = {
  firstName1: "Luke",
  lastName1: "Smith",
  age1: 40,
};

const { firstName1: fName, lastName1, age1 } = person1;

console.log(fName);
console.log(lastName1);
console.log(age1);

//Add a default value to the name above//

const person2 = {
  firstName2: "Luke",
  lastName2: "Smith",
  age2: 40,
};

const { firstName2: fName2, lastName2, age2 = "Unknown" } = person2;

console.log(fName2);
console.log(lastName2);
console.log(age2);

//Use the array method Flat//

const numbers = [1, [2, 3], [4, 5, 6]];
const numbersFlat = numbers.flat();

console.log(numbersFlat);

//Use Array.from//

const greeting = "Hello";
const breakdown = Array.from(greeting);

console.log(breakdown);

//Use Array.isArray//

const arr = [1, 2, 3];

console.log(Array.isArray(arr));

//Use the object property shorthand//

const firstName4 = "Sam";
const lastName4 = "Wilson";

// Without object property shorthand
const person4 = {
  firstName4: firstName4,
  lastName4: lastName4,
};

// With object property shorthand
const person5 = {
  firstName4,
  lastName4,
};

console.log(person4);
console.log(person5);

//Use the function shorthand in an object//

const person6 = {
  firstName6: "Tim",
  lastName6: "Stone",
  getFullName() {
    return `${this.firstName6} ${this.lastName6}`;
  },
};

console.log(person6.getFullName());

//Use Rest on an array//

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);

//Use Rest on an object//

//?

//Use Spread on an array//

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);

//Use Spread on an Object//

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const combinedObject = { ...obj1, ...obj2 };

console.log(combinedObject);

//Create a class//

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const timSmith = new Person("Tim", "Smith");

console.log(timSmith.getFullName());

//Extend the class into two other classes//

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, studentId) {
    super(firstName, lastName);
    this.studentId = studentId;
  }

  getStudentInfo() {
    return `Student ID: ${this.studentId}, Name: ${this.getFullName()}`;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, subject) {
    super(firstName, lastName);
    this.subject = subject;
  }

  getTeacherInfo() {
    return `Subject: ${this.subject}, Teacher: ${this.getFullName()}`;
  }
}

const timSmith1 = new Person("Tim", "Smith");
const aliceJohnson = new Student("Alice", "Johnson", "12345");
const mrBrown = new Teacher("John", "Brown", "Math");

console.log(timSmith1.getFullName());
console.log(aliceJohnson.getStudentInfo());
console.log(mrBrown.getTeacherInfo());
