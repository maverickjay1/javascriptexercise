//Javascript Homework Wed 4 Oct 2023//

//1.	Create a defensive check inside a function that handles if the inputs to the function are invalid/non existent.//

function greet(name) {
  if (typeof name === "string") {
    return `Hello ${name}`;
  } else {
    return "Please provide a valid name.";
  }
}

console.log(greet("John"));
console.log(greet()); //
console.log(greet(378)); //

//2.	Create a timer that console.logs a message after 5 seconds

setTimeout(function () {
  console.log("You have won a prize");
}, 5 * 1000);

//3.	Create a timer that consoles.logs a message every 5 seconds

let count = 0;
const maxRepetitions = 5;

const intervalId = setInterval(function () {
  console.log("Buy Now");
  count++;

  if (count === maxRepetitions) {
    clearInterval(intervalId);
    console.log("Offer Expired");
  }
}, 5 * 1000);

//4.	Create a function, inside the function add a second function, and again add a third function into the second function

function function1() {
  console.log("Here is function1.");

  function function2() {
    console.log("Here is function2.");

    function function3() {
      console.log("Here is function3.");
    }

    function3();
  }

  function2();
}

function1();

//5.	Create 3 variables, then define 3 the variables in the correct place so that:

//6.	The first variable is accessible inside every function

let globalVariable = "I'm accessible everywhere.";

function functionOne() {
  console.log(globalVariable);

  let variableOne = "I'm only accessible in functionOne.";
}

function functionTwo() {
  console.log(globalVariable);

  let variableTwo = "I'm only accessible in functionTwo.";
}

functionOne();
functionTwo();

//7.	The second variable is accessible inside the second and third function only

let mainVariable = "I'm accessible everywhere.";

function functionA() {
  console.log(mainVariable);
}

function functionB() {
  let variableTwo = "I'm accessible in functionB and functionC.";
  console.log(variableTwo);
}

function functionC() {
  let variableThree = "I'm accessible only in functionC.";
  console.log(variableThree);
}

functionA();
functionB();
functionC();

//8.	The third variable is accessible inside the third function only

//As above//

//9.	Define a 4th variable inside the 3rd function. This variable should be accessible by every function

//Don't know//

//10.	Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope

//Don't know.//

//11.  Write out a try catch block with finally

try {
  console.log(undefinedVariable);
} catch (error) {
  console.error("An error occurred");
} finally {
  console.log("This code always runs.");
}

//12.  Duplicate an object so mutating the original does not mutate the copy

// Original shopping cart
const shoppingCart = {
  items: [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 15 },
  ],
  total: 25,
};

const copiedCart = { ...shoppingCart };

shoppingCart.items.push({ id: 3, name: "Product C", price: 12 });
shoppingCart.total = 37;

console.log("Original Cart:", shoppingCart);
console.log("Copied Cart:", copiedCart);
