//write a function that has a loop that creates a new array with the sqaure of each number
 
const numbers = [2,4,9,12,7,18,22,3]
const anotherSetofNumbers = [4,5]

function squareNumbers(arr){
    let newArray = [];
for (let i = 0; i < arr.length; i++){
   const result = arr[i] ** 2;
   newArray.push(result)
}
return newArray
}
console.log(squareNumbers(numbers))



