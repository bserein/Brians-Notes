
// First things first. An array is an ordered collection of values. The values can be strings, numbers, booleans, 
// and even other arrays (this would lead to a nested array). 

// Arrays are indexed; the index dictates the order and begins at 0. Arrays come with built-in methods 
// that allow you to modify them and access their values.

// To access a specific element in an array use bracket notation along with its index value.


//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"]

//shoppingList[0] // returns celery

//1. use the shoppingList array to practice your array methods. 
//example:
//Array.push() //adds an element to the end of the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"]

shoppingList.push("salt")
//shoppingList is now ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
console.log(shoppingList.pop())
console.log(shoppingList.unshift("tomatoes") + " " + shoppingList)
console.log(shoppingList.shift())

// Array.pop() → removes the last element in the array and returns that element.
// Array.unshift() → adds a new element at the beginning of the array.
// Array.shift() → removes the first element in an array and returns that element.
// Array.forEach() → calls a function once for each element in the array.
// Array.map() → transforms the elements in the original array by calling the given function once for each element in the array.
// Array.filter() → creates a new array with only the elements that pass the test in a given function.
// Array.find() → returns the first element in an array that passes a test given as a function.
// Array.reduce() → executes a given function for each value of the array and returns a single value.
// Array.includes() → determines whether an array has a specific element.
// Array.indexOf() → search the array for a specific element and returns its first index.
// Array.findIndex() → returns the index of the first element in an array that passes the test in a given function.
// Array.every() → checks if all elements in an array pass a test given as a function
//-----------------------------------------------------------------------------------------------------------------

//square the numbers in the array
const number = [2, 4, 8];
const square = (array) => {
     const squared = array.map(num => num * num);
     return squared;
};
const squared = square(number);
console.log(squared);
//-----------------------------------------------------------------------------------------------------------------

const numbers = [10, 20, 4,30, 30, 20,1,2];
// create a function that returns the array without duplicates
function duplicates(array){
  let arr = [];
for (let i = 0; i < array.length; i++)  {
  if (!arr.includes(array[i])) {
  arr.push(array[i])
  }
} 
return arr
}
console.log(duplicates(numbers))
//if the new arr does not include the numbers in the array add it 
//---------------------------------------------------------------------------------------------
const arr = [
  "Aurelie",
  "Brian",
  "Farrukh",
  "Ronny",
  "Zhuopu",
  "Todd",
  "Vitoria",
  "Manny",
];
let longestName = arr.reduce(
  (name1, name2) => (name1.length >= name2.length ? name1 : name2),
  ""
);

console.log(longestName);
//--------------------------------------------------------------------------------------------------
function deDupe(arr) {
  return arr.filter((elem, index) => {
    return arr.indexOf(elem) === index
  })
}
console.log(deDupe(numbers))

/*This works because it compares the number it found in the array at the index it found it in so if it finds another similar number 
but at another index (because its at another index it is not the same) it will reject the duplicated number
It's like a boolean finding which one is true and which is false
[10, 20, 10, 30, 20, 30, 40, 40, 10]
 |   |    |  |   F   F   T    T   F
 0   1    2  3   4   5   6    7   8
[10, 20, 30, 40]
*/
//----------------------------------------------------------------------------------------------------

let shoppingLists = ["wine", "steak", "eggs","chips","cucumbers","milk","beer"]

let cart = ["eggs", "beer", "wine"]

let newShoppingList = shoppingLists.filter(item => item.includes(!cart))
console.log(newShoppingList)