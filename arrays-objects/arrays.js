// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
const testArray = [
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
  ];
  let counts = 0;
  
  testArray.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1; // another way to do the same function
  });
  console.log(counts)
//--------Another way of doing the same thing
  function countTrues(testArray) {
    for (let i = 0; i < testArray.length; i++) {
      if (testArray[i]) {
        // you could search for true this way because it was a boolean and dont need to put === true because
        counts++; // it's already looking for it, unless its any other variable or in " " then you have to put the ===
      } // it works because you are looking for it to be true, but since it is a boolean we are looking for we don't have to put anything
    }
    return counts;
  }
  console.log(`We found ${countTrues(testArray)} trues`);
  
  //-----------------------------------------------------------------------
  // 3. Write a function to get the first element in an array
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Strawberry",
    "Blueberry",
  ];
  
  function myFruits(fruits) {
    console.log(fruits[0]); //Another way of doing the function
  }
  myFruits(fruits);
  
  function myFruits(fruits) {
    return fruits[0];
  }
  console.log(myFruits(fruits));
  //-----------------------------------------------------------------------
  //Write a function to calculate and return the total tips and then out the total
const tips = [5, 8, 13, 2, 14, 27, 9, 18];
function addUpTotal(arry) {
  let sumTotal = 0;
  for (i = 0; i < arry.length; i++) {
    sumTotal += arry[i];
  }
  console.log(sumTotal);
}
addUpTotal(tips);
 //-----------------------------------------------------------------------
const fruits = ['apple','banana', 'orange']; // This is an array, these begin at zero and arrays use square brackets
console.log(fruits[0]) // apple
console.log(fruits[1]) // banana
console.log(fruits[2]) // orange
//-----------------------------------------------------------------------
const arrayOfAnything = [ 
    true,
    [],
    'banana',
    () => console.log('hello'),
    { first: 'Manny', job: 'Telling Zach what to do'},
];
console.log(arrayOfAnything)
//----------------------------------------------------------------------------
//Arrays
//A collection of elements that are ordered (index position of the element in the array)

let myArray1 = [6, 1819]; //this array contains 2 elements that are of type number

let myArray2 = ["hi", "hello", "aloha"]; // this array contains 3 elements that are of type string

let myArray3 = [{ greeting: "hi" }, { greeting: "hola" }];

console.log(myArray2[0]); // prints out hi

console.log(myArray2[2]); // prints out aloha

console.log(myArray2[3]); // prints out undefined because there is no such element at index 3 in the array

console.log(myArray1[1]); //

//---------------------------------------------------------------------------------
const hello = "Hi Mom"

console.log(hello[3])
console.log(hello.length)

const array = [11,12,13,14,15,16,17,18]  
function returnFirstElement(arr){ // instead of using .shift
    console.log(arr[0])
}

function returnLastElement(arr){ // instead of using .pop
    let lastIndex = arr.length - 1
    console.log((arr[lastIndex]));

}
returnFirstElement(array)
returnLastElement(array)

function returnAnyElement(arr,n){ 
    console.log(arr[n])
}
returnAnyElement(array,4)
 
function returnIndex(arr,target) // instead of using .indexOf()
{
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
}
console.log(returnIndex(array,12))
//-----------------------------------------------------------------------------------
