// let arr = [1,4,6,9,2,11,12]
// function findOdds(array) {
//     for(i=0; i < array.length; i++){
//         if(array[i] % 2 != 0){
//             console.log(array[i])
//         }
//     }
// }
// findOdds(arr) // tells you which numbers are odd
// //-----------------------------------------------------------------------
// function findOdds(array) {
//     let counter = 0
//     for(i=0; i < array.length; i++){  // for loop iterates throughout the entire array
//         if(array[i] % 2 != 0){  // to calculate whether the number is odd
//             counter++ // goes up everytime there is an odd
//         }
//     }
//     return counter
// }
// console.log(findOdds(arr)) // tells you how many numbers are odd
// //-----------------------------------------------------------------------
// let arr = [1,4,6,9,2,11,12]
// function findEven(array) {
//     //let counter = 0
//     for(i=0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             console.log(array[i])
//         }
//     }
// }
// findEven(arr) // tells you which numbers are even
// //-----------------------------------------------------------------------
// let arr = [1,4,6,9,2,11,12]
// function findEven(array) {
//     let counter = 0
//     for(i=0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(findEven(arr)) // tells you how many numbers are even
// //-----------------------------------------------------------------------
// let arr = [1, 4, 6, 9, 2, 11]; //this is the correct answer among all of them
// function findOdds(array) {
//   const newArr = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }
// console.log(findOdds(arr)); // tells you which numbers are odd in a different array
// //-----------------------------------------------------------------------
// let arr = [1, 4, 6, 9, 2, 11]; //this is the correct answer among all of them
// function findEven(array) {
//   const newArr = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }
// console.log(findEven(arr)); // tells you which numbers are even in a different array
// //-----------------------------------------------------------------------
// let arr = [1, 4, 6, 9, 2, 11];
// function findEven(array) {
//    return arr.map(x => x % 2 == 0)
// }
// console.log(findEven(arr)); // tells you which numbers are even in a different array stating the even as true and odd false
// //-----------------------------------------------------------------------
// let arr = [1, 4, 6, 9, 2, 11];
// function findEven(array) {
//    return arr.map(x => x % 2 != 0)
// }
// console.log(findEven(arr)); // tells you which numbers are odd in a different array stating the odd as true and even false
// //-----------------------------------------------------------------------
// //Write a function to add up the even numbers and output the total
// const arr1 = [5, 8, 7, 12, 13, 17, 22];
// function addUpEven(array) {
//   let total = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       total += array[i];
//     }
//   }
//   console.log(total);
// }
// addUpEven(arr1);
// //-----------------------------------------------------------------------
// const arr = [5, 8, 7, 12, 13, 17, 22]

// function filterJustEvens(arr) {
//   let newArr = []
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) { // check if element is even
//       newArr.push(arr[i]) // put it in new array
//     }
//   }
//   return newArr
// }
// console.log(filterJustEvens(arr))

//----------------------------------------------------------------------------------------------

//Using a for loop print all even numbers up to and including n. Don’t include 0.
let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
let string = ""
function nLoops(loop){
for (let i = 2; i <= 22; i++){
  if (i % 2 === 0) {
      string += i + " "
    
  }
}
console.log(string)
}
nLoops(n1)

