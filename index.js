//1- Variables//
var name = "Jim"; //String//
var age = "18"; //Number//
var isAdult = age >= 18; //Boolean - true or false//
console.log(isAdult);

//2- Add two numbers//
var num1 = 3; //Number//
var num2 = 4; //Number//
var sum = num1 + num2; //Sum//
console.log(sum);

//3- Concatenate two string//
var firstName = "Jim";
var lastName = "Smith";
var fullName = firstName + " " + lastName;
console.log(fullName);

//4- Create an IF statement which checks if a variable matches another variable//
var number1 = 4;
var number2 = 4;

if (number1 === number2) {
  console.log("numbers match!");
}

//5- Extend the IF statement to have an ELSE IF to show an alternative message if the first comparison fails//
var number1 = 4;
var number2 = 8;

if (number1 === number2) {
  console.log("numbers match!");
} else {
  console.log("numbers do not match");
}

//6- Extend one of the IF statements to check if two things are true, if so show a message
var deliveryAddressEntered = true;
var paymentDetailsEntered = true;

if (deliveryAddressEntered && paymentDetailsEntered) {
  console.log("Complete Purchase");
} else {
  console.log("Please fill in missing details");
}

//7- Convert the IF statement to a Switch statement//
var paymentMethod = "creditCard";

switch (paymentMethod) {
  case "creditCard":
    console.log("Please enter your credit card information.");
    break;
  case "paypal":
    console.log("You will be redirected to the PayPal website.");
    break;
}

//8- Store name, age and height in an Object//
var person = {
  firstName: "Jim",
  age: 25,
  heightCM: 180,
};
console.log(person);

//9- Create a FOR loop that shows a message 10 times//
for (var repeat = 0; repeat < 10; repeat++) {
  console.log("This is the same message repeated 10 times.");
}
