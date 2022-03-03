//databases

/**
 * 0. `npm init -y`
 * 1. Install Firebase Packages
 * 2. Import Firebase
 * 3. Connect / Initialize the database
 * 4. Access the collections
 * 5. Read Documents
 * 6. Insert Documents
 * 7. Edit/Update Documents
 * 8. Edit/ Update Documents
 */

// 2. Import Firebase
const {initializeApp, applicationDefault, cert} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
const { double } = require("webidl-conversions");

const serviceAccount = require("./firebase_keys.json");

// 3a. Initialize the app
initializeApp({
  credential: cert(serviceAccount),
});

// 3b. Connect to the database (i.e. Firestore)
const db = getFirestore();

// 4. Access Users collection; collection reference
const usersCollection = db.collection("Users");

async function readUserDocuments() {
  // 5a. Read Documents
  const snapshot = await usersCollection.get();

    let allUsersDocument = []

  // 5b. Iterate through snapshot documents
  snapshot.forEach(function (document) {
    const documentObject = document.data();
    //console.log(documentObject);
    allUsersDocument.push(documentObject) //storing so that we can access it again
  });
  return allUsersDocument // this returns the value 
}

// readUserDocuments();

/**
 * Create 2 functions reading documents from the following collections
 * - my_shows
 * - content
 */
const myShowsCollection = db.collection("my_shows"); // to create a variable to reference the collection in firebase
const contentCollection = db.collection("content");

async function readMyShowsDocuments() {
  const snapshot = await myShowsCollection.get();
  let myShowsDocument = []
  snapshot.forEach(function (document) {
    const myShowsObjects = document.data();
   myShowsDocument.push(myShowsObjects)
    // console.log(myShowsObjects);
  });
  return myShowsDocument;
}

 //readMyShowsDocuments();

async function readContentDocuments() { // you are using the async and await to make the function synchronous
  const snapshot = await contentCollection.get(); // you use await to get the info from the firebase without holding back the rest of the info from being held back and continue with the rest
    let contentDocuments = []
  snapshot.forEach(function (document) { //you could also use => // you use for each to read each document in the collection
    const contentObject = document.data(); // you need to add .data() because you need to retrieve all the fields in the object
    contentDocuments.push(contentObject)
    //console.log(contentObject);
  });
  return contentDocuments;
}

 //readContentDocuments();

//6. insert a document 

async function registerUser(userObject){ //this is the parameter you use for the function
  // collection reference 
  const usersCollection = db.collection('Users')

  // Create a document
  const newUserDocument = usersCollection.doc()//for the .doc() doing this will automatically give it a unique ID

  //set the document  
  await newUserDocument.set(userObject)//you have it take the userObject to make this more dynamic 

  console.log(`User of document id: ${newUserDocument.id}
      \nhas been added\tyay!`)
}

const newUserObject = {
  name: "Peter",
  phone: 1234451234,
  email: "peter@bocacode.com",
  isAnAdult: true
}
//registerUser(newUserObject)

//Search/Find the Document

async function updateUserFullName(inputEmail, name){
    //Collection reference  
  const usersCollection = db.collection('Users')

    // Finding the document with a given email (using .get method)

  const snapshot = await usersCollection.where('email', '==', inputEmail).get() //you use .where to retrieve multiple documents that meet the same requirement

  snapshot.forEach(function (document) {
    //This is the document found 
    const documentReference =  document.ref //you use the .ref to get the document reference to call the update method or set if we wanted
    // 8. update document
     documentReference.update({'name': name}) //look at what it says over update (you use CMD and hover over it)

        //we can console log to check if it is working
    // console.log(`We've update document of id: ${document.id} name to: ${name}`)
      //another way of doing this, but is more for the computer
      // const userDocRef = userCollection.doc(document.id)
      // userDocRef.update({'name': name})


     // console.log('ahmeds doc: ' + //this is just to check if it works
      //JSON.stringify(document.data())) //you use Json.stringy to be able to read the file
  })
}

 //updateUserFullName('peter@bocacode.com', 'pioter') // you use the first parameter to find the document in the collection and the second parameter to change the name you wanted

module.exports = {
  updateUserFullName,
  registerUser,
  readMyShowsDocuments,
  readUserDocuments,
  readContentDocuments
}

