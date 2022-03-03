let str = "Ru is very tall"
let n = str.length
console.log(n) // output is 15

// return the total length of the string
//---------------------------------------------------------
let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes

function changeLetter(string){
    let text = '';
    for (let i = 0; i <string.length; i++){
        if ((i+1) % 2 !== 0) {
        text += string[i] + 'Z' 
        } 
    }
    return text
}

console.log(changeLetter(str1))
