//Object Array
[
    { first: "Zach", "job": "boss" },
    { first: "Manny", "job": null },
    { first: "Vitoria", "job": "getting stuff done" },
    { first: "Todd", "job": "lead instructor" }
    ,
    
    {
    firstName: "John",
    lastName: "Smith",
    isAlive: true,
    age: 27,
    address: {
        streetAddress: "21 2nd street",
        city: "New York",
        state: "NY",
        postalCode: "100210-3100"
    },
    phoneNumbers: [
        {
           type: "home",
           number: "212 555-1234" 
        },
        {
            type: "office",
            number: "646 555-4567"
        }
    ],
    children: [],
    spouses: null
    }
  ]
//-----------------------------------------------------------------------
  let staff = [{  //object array where you combine both of them
    firstName: 'Daniel',
    subject: 'AI',
    awesome: true,
}, { // this is a collection of multiple objects and info on all the objects
    firstName: 'Zach',
    subject: 'Typescript',
    awesome: true,
}];
console.log(staff)
console.log(staff[0])
console.log(staff[1])
console.log(staff[1].subject) // Typescript
console.log(staff[0].subject) // AI
//-----------------------------------------------------------------------
[
    {
      Make: "Porsche",
      Model: 911,
      Color: "Yellow",
      Condition: "New",
      Year: 2022
    },
    {
      Make: "Ferrari",
      Model: "California",
      Color: "Black",
      Condition: "New",
      Year: 2022
    },
    {
      Make: "Mercedes",
      Model: "E350",
      Color: "White",
      Condition: "Used",
      Year: 2011
    }
  ]