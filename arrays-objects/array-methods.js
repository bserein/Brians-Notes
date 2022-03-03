const arr = [1,2,3,4,5,6,7,8]

arr.push(20)
arr.push("mango")
//------------------------------------------------------------------------------------------------------------
let myPancake = arr.pop()
console.log(...arr)
console.log(`THIS IS THE POPPED EL ${myPancake}`)
//------------------------------------------------------------------------------------------------------------
let shift = arr.shift()
console.log(...arr, "\ntook this out",shift)
//------------------------------------------------------------------------------------------------------------
arr.unshift(11)
console.log(...arr)
//------------------------------------------------------------------------------------------------------------
let thenumber = [1,2,3,4];

thenumber.push(5);
console.log(thenumber); // the push in the code adds to the array 
//------------------------------------------------------------------------------------------------------------
let numbers = [1,2,3,4];

let num = numbers.pop()
console.log(num);
console.log(numbers); // the pop takes it out and returns it, only takes out the last one from the array
//------------------------------------------------------------------------------------------------------------
let numbers = [1,2,3,4];

let num = numbers.shift()
console.log(num);
console.log(numbers); // the shift takes out the one from the beginning and returns it
//------------------------------------------------------------------------------------------------------------
let numbers = [1,2,3,4];

let num = numbers.unshift(0)
console.log(num);
console.log(numbers); // the unshift adds a value to the beginning of the array
//------------------------------------------------------------------------------------------------------------
let fruits = ['apple', 'banana', 'orange'];
let moreFruits = ['kiwi', 'lime'];
fruits.push(...moreFruits) // this powerful to add to the arrays
console.log(fruits) 


//------------------------------------------------------------------------------------------------------------
let fruits = ['apple', 'banana', 'orange'];// this adds an array into the array, depending where placed can put in front or in back depending where you put 
                                            //keys if in front of the ... or behind it
                                            // when you have it like this console.log(['kiwi', ...fruits, 'lime']) without the ... it will look messy 
                                            //adding the array within an array with the square brackets in it
console.log(['kiwi', ...fruits, 'lime'])


console.log(Math.max(1,2,5)); //max number
console.log(Math.min(1,2,5)); // lowest number
console.log(Math.sqrt(9)); // square root of a number
console.log(Math.random()); // random number generator
console.log(Math.round(5.7)); // round to the nearest whole number
console.log(Math.floor(3.9)); // round down to the whole number
console.log(Math.ceil(5.4)); // round up to the nearest whole number
//------------------------------------------------------------------------------------------------------------
const myName = "Brian"
const myNameArray = ['b', 'r', 'i', 'a', 'n'];
console.log(myName.indexOf('B')); // so the index for brian is b=0, r=1, i=2, a=3, n=4
console.log(myNameArray.indexOf('i')); //returns the first index of the matching string, it will return a -1 if not found
//------------------------------------------------------------------------------------------------------------
//you can change the numbers within an array like this
let numbers = [1, 4, 6, 8, 0]
numbers[1] = 88 // the number 4 is stored at index 1 which is why it is changed to 88
console.log(numbers)

//------------------------------------------------------------------------------------------------------------

let numbers = [14, 56, 78]
numbers[2] = 93
console.log(numbers)