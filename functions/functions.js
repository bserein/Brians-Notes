const team = "Miami Heat";
const team1 = "Dallas Mavericks";

function totalPoints(twos, threes) {
  //you can have the same variable of totalPoints
  const points = twos * 2 + threes * 3;
  return points;
}
let miamiHeat = totalPoints(25, 15);
console.log(miamiHeat);

let dallasMavericks = totalPoints(20, 20); // don't need to put the same function again and you can use the function again
console.log(dallasMavericks);

console.log(
  `What a game betweeen the ${team} and the ${team1} with the Heat losing ${miamiHeat} to ${dallasMavericks}!`
);

console.log("Final Score", { team, miamiHeat, team1, dallasMavericks });

//-----------------------------------------------------------------------

function nextAge(theAge) {
  return theAge + 1;
}
let myAge = 46;
myAge = nextAge(myAge);
console.log(myAge);

//-----------------------------------------------------------------------
function addUp(redBalls, greenBalls){
    const count = redBalls + greenBalls
    return count
}
let myBag = addUp(14, 15)
console.log(myBag)

//-----------------------------------------------------------------------
function addTwoNumbers(num1, num2) {
    return num1 + num2
  } // Another way of writing the function, ask a question 
  let num3 = addTwoNumbers(13, 14)
  console.log(num3)
//-----------------------------------------------------------------------

  //another way of doing this function
function addition(a,b){
    return a + b
}
console.log('4+7=', addition(4,7))
//-----------------------------------------------------------------------

//another way of doing this function
function addition(a,b){
    return a + b
}
console.log('4+7=', addition(4,7))

//-----------------------------------------------------------------------

  // object definition
  var author = {
    firstName: "Brian",
    lastName: "Serein",
    favoriteNumber: 2063,

    getFullName: function () {
        return this.firstName + " " + this.lastName; 
//They reside on the object, and when called directly have access to the object using the this keyword. 
//The this keyword can be used to reference the object and it’s properties.
    }
};
//-----------------------------------------------------------------------

// call the getFullName method on the object
var fullName = author.getFullName();
// return value is "Brian Serein"
console.log(fullName)
//-----------------------------------------------------------------------
// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call that
// function for a few different scores and log the result to make sure it works.

let score = 89;
function assignGrade(score) {
  // console.log(score)
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    case score <= 59:
      console.log("F");
      break;
    default:
      console.log(`That's not a good sign`);
  }
}
assignGrade(score);

let num = 41;
function assignGrade(num) {
  if (num >= 90) {
    console.log("A");
  } else if (num >= 80) {
    console.log("B");
  } else if (num >= 70) {
    console.log("C");
  } else if (num >= 60) {
    console.log("D");
  } else if (num >= 0) {
    console.log("F");
  } else {
    console.log("Don't know what to say");
  }
}
assignGrade(num);
//-----------------------------------------------------------------------
 // Write a function that receives a car object as an argument and outputs the car's make and model.
 let carType = {
  make: "Porsche",
  model: 911,
  interior: "Leather",
  condition: "New",
  color: "Yellow",
  year: 2021,
};
function myCar(carType) {
  console.log(carType.make, carType.model);
}
myCar(carType);
//------------------------------------------------------------------------

//more lines to write the same code
function calcAreaOfTriangle(base, height) {
  const area = 0.5 * base * height;
  return area;
}
// given a triangle w/ base 5 and height 3,
// find the area
const myBase = 5;
const myHeight = 3;
const myArea = calcAreaOfTriangle(myBase, myHeight);
console.log(myArea);

// few lines to write the same code
function calcTriArea(b, h) {
  return (b * h) / 2;
}
console.log(calcTriArea(5, 3));
//----------------------------------------------------------------------
 function calcTax(total, taxRate) {
      const tax = total * taxRate
      return tax
  }
  let mySubTotal = 17.25
  let myTaxRate = 0.07
  let myTax = calcTax(mySubTotal, myTaxRate)
  console.log(myTax)
//-----------------------------------------------------------------------
function calcTax(total, taxRate) {
    const tax = total * taxRate
    return tax
}
let myTax = calcTax(17.25, 0.07)
console.log(myTax)
//---------------------------------------------------------------------
const square = function(num) { return num * num } //showing another function
let x = square(4) // x gets the value 16
console.log(square)

const factorial = function fac(n) { // showing these different functions
    return (n < 2) ? 1 : n * fac(n - 1)
}
console.log(factorial)
//------------------------------------------------------------------

// ES6 big arrow notation, these are two different functions
const square = function(num) { return num * num }
const square = (num) => { return num * num }

//------------------------------------------------------------------
//Functions

//This first function does not have or 'accept' any arguments
//This function does some stuff but does not return a value
function greet() {
  //do some stuff
  console.log('Hi')
  console.log('How are you?')

}

greet() //Calling the functions; telling the function to run
greet()

let number1 = 2
let number2 = 4

function addTwoNums(){
  //let sum = number1 + number2
  // console.log(sum) prints 6
  console.log(number1 + number2)
}

addTwoNums()
//------------------------------------------------------------------------------
/*
Main components of a function:
1. creating the function
  - set of parameters (optional)
    -Parameters are anything in between paranthesis
  - set of instructions (required)
    - Instructions are anything in between braces (aka curly brackets)
2. Calling the function
*/
//create a function that takes in 3 numbers then console log the product of the numbers
//multiply them by eachother

//THIS IS CLEAN CODING
//use verbs when you want the function to do something
//use a noun when you want to return something

//v1 of the standalone function
//no expected return value
//function creation
function multiply(a, b, c) {
  const result = a * b * c;
  console.log(result);
}

//call the function
multiply(10, 87, 53);

//v2 of the standalone function
//return value is expected
//this gives up more freedom to play with the result
// function creation
function product(x, y, z) {
  const answer = x * y * z;
  return answer;
}

//Approach #1
console.log(product(9304, 349, 349));

//Approach #2
const tips = product(160, 0.2, 1);
console.log(tips);

//Approach #3 (same as #2 but different use case/application)
const salesTaxOfMacbookInFL = product(5000, 0.07, 1).toFixed(2);
console.log(salesTaxOfMacbookInFL);

//-------------------------------------------------------------------------------------------------------------------

//Write a function that accepts an array of strings. Return the longest string.
const arr = ["Aurelie", "Brian", "Farrukhws", "Ronny", "Zhuopu", "Todd", "Vitoria", "Manny"]

function longestString(array){
  
  let max_string = array[0].length;
  let result = array[0];
  for (let i = 0; i < array.length; i++) {
      const max = array[i].length;
      if (max > max_string) {
          result = array[i];
          max_string = max;
      }
  }
  return result;
}
console.log(longestString(arr))