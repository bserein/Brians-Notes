 for (let i = 0; i < 10; i++){
     console.log('This is interation #', i)
 }

 for (let i = 0; i < 10; i++){
     console.log(`${i} times through`); // for loops 
 }

 for (let i = 20; i >= 10; i--){
     console.log('This is interation #', i)
 }


 for (let i = 0; i < 10; i++) {
    if (i === 5){
        break
    }
    console.log('This is iteration #', i);
}

for (let i = 0; i < 10; i++){
    if (i === 5) {
        continue; // this continues the loop for when it stops, so this function skips 5 because it was meant to stop at 5
    }
    console.log(`Iteration number ${i}`);
}
//-------------------------------------------------------------------------------------

let fruits = ['apple', 'banana', 'strawberry']; //counts the array (for in)
for (let i in fruits){
    console.log(i) 
} 

let fruits = ['apple', 'banana', 'strawberry']; // calls the fruits that are in the array (for in)
for (let i in fruits){
    console.log(fruits[i]) 
}

for (const key of Object.keys(instructor)) { // takes in the keys in object, will give you an array of the keys in the object
    console.log(key); // dont forget these variables are called keys
    } 
    
for (let key in instructor) {
    console.log(instructor[key]); // iterate through the keys, shows each key in the object once through, 
                                     // when you use key in square brackets [key] you get the values in the key 
 }
    
let fruits = ['apple', 'banana', 'strawberry'];
for (const fruit of fruits) { 
    console.log(fruit) // for of is another loop and apparently easier to use according to Zach
    // this loop only works with arrays, will not work on objects
}

