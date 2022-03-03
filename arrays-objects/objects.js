let instructor = {
    first: "Manny",
    last: "Tribio",
    job: "Teacher Assistant",
};
console.log(Object.keys(instructor));
//----------------------------------------------------------------
const car = {        // This is an object
    make: 'Lexus',
    model: 'IS 350 f Sport',
    year: 2022, 
    color: 'black',
}
console.log(car)

console.log(car.color)  
car.color = 'purple'
console.log(car.color)
console.log(car.year)
console.log(car.make)
console.log(car.model)

car.selfDriving = false // adding a new property
car.color = undefined // removing an existing property
console.log(car)

console.log(car['make']) // square brackets 
//------------------------------------------------------------------
let instructor = {
    firstName: 'Todd',
    lastName:  'Albert',
    age: 46,
    amazing: true,
    //no equal sign when in the curly brackets, add a comma at the end "trailing comma, good practice"
}
console.log(instructor.lastName) // dot notation
            //[firstName]       // bracket notation
console.log(instructor)
//---------------------------------------------------------------------
//Objects:

let laptop = { 
    name: "Apple MacBook Air",
    color: "Space Gray",
    price: 1100
 };

console.log(laptop.name) //Dot notation
console.log(laptop["name"]) //Bracket notation - be sure to wrap the property name in quotes

console.log(laptop.memory) //Will print undefined because no such property was defined in the object

console.log(laptop) //Will print the whole object

console.log(laptop.name, laptop.color)

console.log(`My ${laptop.name} is ${laptop.color}`)
//------------------------------------------------------------------------------------------
//objects and arrays
//represent forms and data
//objects have keys and values, so you need the keys to access the values
//arrays is a form to list the set of data, whether its strings, numbers or booleans
//backend uses snake_case
//frontend uses camelCase

//example of a TV show object on netflix
const tvShowObjectA = {
  title: "Squid Games",
  genre: "Thriller",
  // Epoch Unix Timestamo
  // counts seconds form Jan 1s, 1970 12: am GMT (Greenwich Timezone)
  //google epochconverter.com
  release_date: 1630517205,
  is_series: true,
  thumbnail_url:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F19%2Fdb%2F31%2F19db31732931019b73bedcf17924f814.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F962644489070298652%2F&tbnid=rM0O-ex3FXNaMM&vet=12ahUKEwjf2PLqjen1AhUDO98KHSeHBg4QMygHegUIARDmAQ..i&docid=7QryglgxlmnQ0M&w=1920&h=1080&q=thumbnail&ved=2ahUKEwjf2PLqjen1AhUDO98KHSeHBg4QMygHegUIARDmAQ",
};

const tvShowObjectB = {
  title: "Coded Bias",
  genre: "Documentary",
  release_date: 1630517305,
  is_series: false,
  thumbnail_url:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F19%2Fdb%2F31%2F19db31732931019b73bedcf17924f814.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F962644489070298652%2F&tbnid=rM0O-ex3FXNaMM&vet=12ahUKEwjf2PLqjen1AhUDO98KHSeHBg4QMygHegUIARDmAQ..i&docid=7QryglgxlmnQ0M&w=1920&h=1080&q=thumbnail&ved=2ahUKEwjf2PLqjen1AhUDO98KHSeHBg4QMygHegUIARDmAQ",
};

const tvShowObjectC = {
  title: "Ozark",
  genre: "Thriller",
  release_date: 1630517405,
  is_series: true,
  thumbnail_url:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F19%2Fdb%2F31%2F19db31732931019b73bedcf17924f814.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F962644489070298652%2F&tbnid=rM0O-ex3FXNaMM&vet=12ahUKEwjf2PLqjen1AhUDO98KHSeHBg4QMygHegUIARDmAQ..i&docid=7QryglgxlmnQ0M&w=1920&h=1080&q=thumbnail&ved=2ahUKEwjf2PLqjen1AhUDO98KHSeHBg4QMygHegUIARDmAQ",
};

const tvShowList = [tvShowObjectA, tvShowObjectB, tvShowObjectC];

console.log(tvShowList);

//access title from Show C
//Dot notation
console.log(tvShowObjectC.title);

//bracket notation
console.log(tvShowObjectC["title"]);

//checking if name exists
// if key `name` exists in the object
// or if there is a value under key `name`
if (tvShowObjectC.name) {
  console.log(tvShowObjectC.name);
}

