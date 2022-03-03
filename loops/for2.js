//Create an object, myObj, with unknown properties & values, console.log each property and its value
//use for of loop
let myObj = { 
    firstName: "brian",
    lastName: "Serein",
    age: 24
}

function usingForOf(object){
    for (let property in object){
        console.log(`${property}: ${object[property]}`);
    }
}
usingForOf(myObj)

//----------------------------------------------------------------------------------------
//Create an array, with unknown keys & values, console.log each key and its value
// let array = ["brian", "serein", 24]

// function usingForIn(key){
//     for (let element of key){
//         console.log(element);
//     }
// }
// usingForIn(array)
//------------------------------------------------------------------------------------------
// const myObject = {
//     first: "one",
//     second: "two",
//   };
  
//   for (const [key, value] of Object.entries(myObject)) {
//     console.log(key, value);  // first one, second two
//   }

//--------------------------------------------------------------------------------------------------

const arr = [1,3,8,9,19,24,52,65,4,7,100,25]

function highestNumber(array){
    let largest = " ";
for (let i= 0; i <= largest; i++){
    if (array[i] > largest) {
    largest = array[i];
    }
}
console.log(largest);
}
highestNumber(arr)
//-----------------------------------------------------------