function isDrinkingAge(age) {
  if (age >= 21) {
    return true + ' he can get drunk';
  } else {
    return false + " he can't drink";
  }
}
console.log(`Let's check and its ${isDrinkingAge(20)}`);
//------------------------------------------------------------------------------
let age = 20
if (age >= 21){
    return  console.log('Person is of age')
} else {
    return console.log('Do Not Serve')
//------------------------------------------------------------------------------
let age = 24
if (age >= 21){
    return  true + console.log("Give wristband, serve alcohol, take keys")
} else {
    return false + console.log("Put red x on forehead, kick to curb, and ban from club")
}
//------------------------------------------------------------------------------
let age = 20;
let ofAge = false; // just to show the difference between let and const

if (age >= 21) {
  ofAge = true;
  console.log("Person is of age");
  console.log(ofAge); //true
} else {
  return console.log("Do Not Serve")
}
}
//------------------------------------------------------------------------------
let animal = 'cat'

if (animal === 'dog') {
    console.log('woof')
} else {
    console.log('meow')
}
//------------------------------------------------------------------------------
let hour = 12
if (hour < 11) {
    console.log('Good morning!')
} else if (hour < 17) {
    console.log('Good Afternoon!')
} else {
    console.log('Good Evening!')
}
//---------------------------------------------------------------------------------
let a = 40
let b = 20

if (a > 10 && b > 10){
    console.log('a and b are greater than 10')
}
if (a > 60 && b > 60) {
console.log('a and b are greater than 10')
}

if (a > 60 || b < 60) {
    console.log('b is less than 60')
    }
//-----------------------------------