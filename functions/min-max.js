//2. create a function that takes an array of numbers & return both min and max in that order. (use a loop)
const newArray = [1,2,3,4,5,6,7,8,9]
function getTheNumbers(arg) {
    for (i = 0; i <= 0 ; i ++){
        console.log(Math.min(...newArray))
        console.log(Math.max(...newArray))
    }
}
getTheNumbers(newArray)
//-------------------------------------------------------------------------------
const arrOfNumbers = [5, 3, 1, 8, 12, 43, -12, 91, 83, 75, 8,]

function returnMinAndMax(arr) {
    let minValue = Infinity
    let maxValue = -Infinity
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
        }
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    console.log(minValue)
    console.log(maxValue)
}

returnMinAndMax(arrOfNumbers)

//-------------------------------------------------------------------------------


const thatArray = [1,2,3,4,5,6,7,8,9]
const thatArray1 = [234, 21, 64,88]
const thatArray2 = [0 , 1, -15]
const thatArray3 = [5, 1000, 31, 56, "nine"]

function getTheNumbers(array) {
    let theNewArray = [];
    let smallOne = array[0];
    let bigOne = array[0];
    
   for (let i = 0; i < array.length; i++){
        if (array[i] < smallOne){
            smallOne = array[i]; 
        }
         if (array[i] > bigOne){
            bigOne = array[i];
        }
   }
   theNewArray.push(smallOne, bigOne);
   console.log(theNewArray);
}

getTheNumbers(thatArray2)