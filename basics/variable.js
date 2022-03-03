const country = "United States";
const continent = "North America";
const population = 329_500_000;

console.log(
  `I live in the ${country}, which is in ${continent}, and it has ${population} people.`
);
console.log("stats", {country, continent, population})

//---------------------------------------------------------------------------------------

let gamingStation = "Xbox"
const firstName = "Brian"
let age = 24

console.log("My name is " + firstName + ", I am approximately " + age + " and I prefer the PS5 over the " + `${gamingStation}.`)

//---------------------------------------------------------------------------------------
let age = 46

const firstName = 'Todd'

console.log(firstName)
// concatenate:
console.log('Hello, my name is ' + firstName + '. I am ' + age + ' years old.')
// template literal:
console.log(`Hello, my name is ${firstName}. I am ${age} years old.`)
//---------------------------------------------------------------------------------------

const name = 'brian serein'
age = 24
console.log(`my name is ${name}, I am ${age} years old.`)

//---------------------------------------------------------------------------------------
let myNumbers = 3
myNumbers = myNumbers * 8
console.log(myNumbers)
//---------------------------------------------------------------------------------------
let firstName = 'Brian'
let str =(
  `How are you doing${(firstName) ? `, ${firstName}` : ''}?`) //something may be wrong with this one
console.log(str)
//---------------------------------------------------------------------------------------
let hour = 16;
let msg = hour < 11 ? "Good morning!" : "Good Afternoon!";
console.log(msg);
//--------------------------------------------------------------------------------
////Variables
//

//String - Collection of characters
let name1 = "Farrukh";
let name2 = "Malibu";
let name3 = `Ruben`;

const name4 = "Peter";
const name5 = "Zhuopu";
const name6 = `Stella`;

//Numbers

const num1 = 9;
const num2 = 0.12341248748751;

//Booleans - true or false values

const didHaveBreakfast = false;
console.log(didHaveBreakfast);

const woreBocaShirt = true;

//let vs const when declaring variables

name1 = "Frank";

//name4 = 'Piotr' //cannot reassign a value to a constant variable

let msg1 = "Let's go to the beach";
let msg2 = "Let's go to \"Johnny's\"";
let msg3 = "Let's go to the beach";
let book = '"The Road Less Traveled" by M.Scott Peck';

console.log(book);

// this is a comment on a single line this is a comment on a single line this is a comment on a single line
// this is another comment
// and here's a third

let age; //declaring the variable but not assigning a value
console.log(age); //prints undefined

age = 10;
console.log(age); //prints 10

//String concatenation
const course = "Software Engineering Career Course";

console.log("I am studying in the" + course);
console.log("I am studying in the " + course);
console.log("I am studying in the", course); //the comma adds a space

const city = "Boca Code";
//Template Literals
console.log(`I am studying in the ${course} in ${city}`); //each variable should be printed using ${}

//null vs undefined

const a = null;
console.log(a);
//---------------------------------------------------------------------------
