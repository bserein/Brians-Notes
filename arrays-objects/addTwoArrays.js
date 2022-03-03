//Add up each element in the same position and
//create a new array containing the sum of each pair. Assume both arrays are of the same length.
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];

/*
for (let i = 0; i < arr_3.length; i++){
       const sum = arr_3[i] + arr_4[i]
       newArray.push(sum)
   }
console.log(newArray)
*/

function addTheTwoArrays(array, array1) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const sum = array[i] + array1[i];
    newArray.push(sum);
  }
  return newArray;
}
console.log(addTheTwoArrays(arr_3, arr_4));
//------------------------------------------------------------------------------------------------------------
//Get the sum of two arrays…actually the sum of all their elements.
//P.S. Each array includes only integer numbers. Output is a number too.
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

function addTwoArrays(array1, array2) {
  let sums = 0;
  let add = 0;
  let total = 0;
  for (let i = 0; i < array1.length; i++) {
    sums += array1[i];
}
for (let j = 0; j < array2.length; j++) {
  add += array2[j];
}
  total = sums + add;
    return total;
}
console.log(addTwoArrays(arr_1, arr_2));
