/**
 * Key components of an API
 *  1. Request (provided by the client/user)
 *     - types of requrests can be : GET POST PUT... etc.
 *  2. Response (provided by the backend)
 *      - always returns a reponse code: 200s are successful
 *      - 400s failed due to client error
 *      - 500s failed due to server error
 */

//importing the database file
const { database, app } = require('firebase-admin')
const databaseHandler = require('./database')

//importing the express package (aka module library)
const express = require('express'); 

//initialize express
const api = express();
const port = 3000

/*
Connect to Firestore
Create API points to:
Read a whole collection
Read a single doc
Add a doc to a collection
Update a doc
*/

//call the GET method to handle GET API requests
// Specify ina  string, the endpoints of the API
// an endpoint is the path of the URL that allows us to acces the API
api.get('/users', async function (request,response) {
const users = await databaseHandler.readUserDocuments()
response.send(users)
})

api.get('/content', async function (request, response) {
    const content = await databaseHandler.readContentDocuments()
    response.send(content)
})

api.get('/myshows', async function (request, response) {
    const noShow = await databaseHandler.readMyShowsDocuments()
    response.send(noShow)
})

//listen to the API port
api.listen(port, function() {
    console.log(`API is not connecting and listening at port ${port}`)
});


