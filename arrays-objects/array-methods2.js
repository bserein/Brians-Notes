const students = [
    {
      name: "Megan",
      frustrated: true,
      age: 33,
    },
    {
      name: "Emil",
      frustrated: true,
      age: 32,
    },
    {
      name: "Malibu",
      frustrated: false,
      age: 19,
    },
  ];
  
  const isAFrustratedStudent = students.some(student => student.frustrated)
  console.log(isAFrustratedStudent)
  //is there at least one element in this array that matches our criteria 
  //always return a boolean
  const isAStudentofAge = students.some(student => student.age >=21)
  console.log(isAStudentofAge)
  
  // (student) => {
  //     const isFrustrated = student.frustrated //this would be the long way of doing the method above
  //     if (isFrustrated === true){ 
  //         return true
  //     } else {
  //         return false
  //     }
  // }
  
  const areAllFrustrated = students.every(student => student.frustrated)
  console.log(areAllFrustrated)
  // // always return boolean
  const areAllStudentsofAge = students.every(student => student.age >=21)
  console.log(areAllStudentsofAge)
  
  const oneFrustratedStudent = students.find(student => student.frustrated)
  console.log(oneFrustratedStudent)
  // //this only gives the first one that it finds
  // //will return an object, the first one that it finds
  const oneStudentofAge = students.find(student => student.age >= 21)
  console.log(oneStudentofAge)
  
  const frustratedStudents = students.filter(student => student.frustrated)
  console.log(frustratedStudents)
  //gives all the students with parameters that you are looking for
  //this will return an array
  //returns a subset of the new array
  const studentsNotofAge = students.filter(student => student.age <= 21)
  console.log(studentsNotofAge)



students.forEach(student => {
  console.log('Name: ', student.name)
  console.log('Age: ', student.age)
})
//will bring out the value of the object that you are looking for in the array
// let student = []
// students.forEach(student => {
//     studentList.push({

//     })
// })
//^Would need to do this to be equivalant to .map to add data


const studentList = students.map(stud => stud.name)
// const studentList = students.map(stud => [{name: stud.name,
//                                           school: "Boca Code",
//                                           term: "Winter 2022",
//                                           course: "Swecc",
//                                           age: stud.age}])
console.log(studentList)
//^This is how you would add data to the array
//always returns a new aray, with the same number of elements - always an array, always the same elements of the 
//original array, and you can change the shape of the array adding or taking things out

//const studentList = students.sort(stud => stud.name) this wouldnt work at all
const studentAtoZ = students.sort((a,b) => {
  if (a.name < b.name){
      return -1
  } 
  return 1
})
console.log(studentAtoZ)
// this is the parameter needed to use the sort method to show how you want it to look sorted
// sorting an array is either way A-Z (-1, 1) or Z-A (1, -1)

const sumOfAges = students.reduce(( accumulator, student) => {
  return  student.age + accumulator // this would be returning the students age, and then where accumulator was at
                                   // so at the first round it adds up megans age at 33 then emils at 65 - LOOK AT WRITTEN NOTES and pictures
},0)
//first argument is the function, second argument is the inital value for the accumulator "0"
const sumOfNames = students.reduce(( accumulator, student) => {
  return  student.name + " "  + student.age + " "+ accumulator 
},"")

console.log(sumOfNames)

//---------------------------------------------------------------------------------------------------------------
const numbers = [10, 20, 30, 30, 20, 60, 40, 40, 50, 50];


function filterDupes(arr) {
  const cleanArray = arr.reduce((accumulator, element) => {
      if (!accumulator.includes(element)){
          return [...accumulator,element]
      }
      return accumulator

  }, [])
  return cleanArray
}
console.log(filterDupes(numbers))
//the reduce starts with an empty bracket and the if statement says if it is not inside the accumulator then push the element inside
//if it is inside then return the accumulator where it is at the moment and continue until finish looping the array, then return the variable 
