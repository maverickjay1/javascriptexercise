//Javascript Homework Tues 3 Oct 2023//

//1- Create a function that accepts two numbers, adds them and returns the result.//
function addNumbers(num1, num2) {
  var result = num1 + num2;
  return result;
}

var number1 = 5;
var number2 = 10;
var sum = addNumbers(number1, number2);
console.log("Equals: " + sum);

//2- Write a function with the following behaviour
//-    takes an array as a parameter
//-    reverses the order of the array
//-    returns the reversed array

function reverse(numbers) {
  return numbers.reverse();
}

var original = [1, 2, 3, 4, 5];
reverse(original);

console.log("Reversed:", original);

//3- Create an array with 10 items//
var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];
for (let i = 0; i < luckyNumbers.length; i++) {
  console.log(luckyNumbers[i]);
}

//4- Update one of the items//

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var indexToChange = luckyNumbers.indexOf(50);

if (indexToChange !== -1) {
  luckyNumbers[indexToChange] = 45;
} else {
  console.log("Value 50 not found.");
}

console.log(luckyNumbers);

//5- Delete half of the array//
var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var elementsToRemove = Math.ceil(luckyNumbers.length / 2);

luckyNumbers.splice(Math.floor(luckyNumbers.length / 2), elementsToRemove);

console.log(luckyNumbers);

//6- Write out each of the array methods so you become familiar with the syntax (use the array you made):  //

//Pop - Removes and returns the last element of the array.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

luckyNumbers.pop();
console.log(luckyNumbers);

//Push - Adds one or more elements to the end of the array.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

luckyNumbers.push(52);
console.log(luckyNumbers);

//Shift - Removes and returns the first element of the array.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

luckyNumbers.shift();
console.log(luckyNumbers);

//Unshift - Adds one or more elements to the beginning of the array.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

luckyNumbers.unshift(1);
console.log(luckyNumbers);

//Concatenating - Combines two or more arrays.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var moreNumbers = [60, 70, 80];
var combined = luckyNumbers.concat(moreNumbers);
console.log(combined);

//Splicing - Changes the contents of an array by removing or replacing existing elements.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

luckyNumbers.splice(4, 1);
console.log(luckyNumbers);

//Slicing - Returns a portion of the array into a new array.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var sliced = luckyNumbers.slice(2, 5); // Retrieves elements from index 2 to 4
console.log(sliced);

//Reverse - Reverses the order of the elements in the array.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

luckyNumbers.reverse();
console.log(luckyNumbers);

//Join - Joins all elements of an array into a string.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var joined = luckyNumbers.join(", "); // Joins with a comma and space
console.log(joined);

//forEach - Executes a provided function once for each array element.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

luckyNumbers.forEach((number) => console.log(number * 2));

//Includes - Checks if an array includes a certain element.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var includes40 = luckyNumbers.includes(40);
console.log(includes40); // true

//indexOf - Returns the first index at which a given element can be found.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var index40 = luckyNumbers.indexOf(40);
console.log(index40); // 7

//Every - Checks if all elements in an array pass a test.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var allGreaterThan10 = luckyNumbers.every((number) => number > 10);
console.log(allGreaterThan10); // false

//Some - Checks if at least one element in an array passes a test.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var someGreaterThan30 = luckyNumbers.some((number) => number > 30);
console.log(someGreaterThan30); // true

//Filter - Creates a new array with all elements that pass a test.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var greaterThan20 = luckyNumbers.filter((number) => number > 20);
console.log(greaterThan20);

//Find - Returns the first element in an array that passes a test.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var firstGreaterThan20 = luckyNumbers.find((number) => number > 20);
console.log(firstGreaterThan20);

//findIndex - Returns the index of the first element that passes a test.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var firstIndexGreaterThan20 = luckyNumbers.findIndex((number) => number > 20);
console.log(firstIndexGreaterThan20);

//Sort - Sorts the elements of an array in place.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

luckyNumbers.sort((a, b) => a - b);
console.log(luckyNumbers);

//Map - Creates a new array by applying a function to each element.

var luckyNumbers = [2, 3, 7, 11, 20, 22, 24, 40, 41, 50];

var squared = luckyNumbers.map((number) => number * 10);
console.log(squared);
