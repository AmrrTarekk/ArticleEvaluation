import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch'
const port = 8081

/* App setup */
const app = express()
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* Cors */
app.use(cors());
app.use(express.static('dist'))
/* API */ 
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
const key = process.env.API_KEY
console.log(`Your key is ${key}`)

app.post('/apiUrl', async function(req,res) {
    const { url } = req.body // {url: formText} in formHandler
    const fullAPI = `${baseURL}?key=${key}&url=${url}&lang=en`
    const result = await fetch(fullAPI)
    const myData = await result.json()
    console.log("My Data in server.js is: ", myData)
    return res.send(myData)
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Example app listening on port 8081!')
})

