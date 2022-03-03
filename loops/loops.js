// Pyramid problem:
// function outputPyramid(rows, character) {
//     let row = character;
  
//     for (let i = 0; i < rows; i++) {
//       console.log(row);
//       row += character;
//     }
//   }
//   outputPyramid(5, "#");
//-----------------------------------------------------------------------------
// const array1 = [ 10, 9, 8, `...`, 2, 1, `BLAST OFF!!!`];
// for (const element of array1) {
//   console.log(element);
// }
//-----------------------------------------------------------------------------

//Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.


let str2 = "dont know why";
// Example output: 
// “yes” 

function containY(string){
for (i = 0; i < string.length; i++){
  if (string[i] === "y" ){
    console.log("yes")
  } else if (string[i] !== "y") {
    console.log("no")
  }
}
}
containY(str2)
//-----------------------------------------------------------------------------
/*
A loop is applyting a set of instructions X number of times 
*/

//create a dummy list listing 50 random student names
//declaring an empty
let studentNamesList = [];
//  starting point
for (
  let index = 1;
  //condition of when the loop ends. ends at exactly 50
  index <= 50;
  //incrementing the index variable
  index++
) {
  studentNamesList.push("Ahmed " + index);
}

console.log(studentNamesList);

/**
 *  you can create a list like this
 */

for (let index = 0; index < studentNamesList.length; index++) {
  const studentName = studentNamesList[index];
  //1. store the arrows in a variable
  //2. Add more arrows the bigger the index
  //3 add the final arrow strength as a prefix of the string

  let arrows = "";
  for (let arrowCounter = 0; arrowCounter < index; arrowCounter++) {
    arrows += ">";
  }

  const student = (arrows += studentName);
  console.log(student);
}

