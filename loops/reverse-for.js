//Using a for loop output the elements in reverse order
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
//console.log(arr.reverse())
console.log(arr.reverse())


let arr1 = []
for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
}
console.log(arr1);
//---------------------------------------------------------------------------------
//Given a sentence reverse order: "the sky is blue" -> "blue is sky the". 
let string = "the sky is blue"
const reverseWords = str => str.trim().split(/\s+/).reverse().join(' ')
//trim is saying if there is space in the beginning or end trim it
//the center of split is the spaces or another way of saying space
//you use s.split(" ") so it would look like //["the","sky","is","blue"]
let arrs = string.split(" ")
let reverseArr = arrs.reverse()
let res = reverseArr.join(" ")
//console.log(reverseArray.join(" ")) couldve solved it this way to
//console.log(res) -> this also solves it as well
//console.log(...reverseArr)// you can do it this way finish with it this way
console.log(reverseWords(string))