const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch')
const apiKey = process.env.API_KEY
let userUrl =[]

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(8090, function () {
    console.log('App successfully listening on port 8090!')
})


app.post('/api', async function(req, res) {
    let userUrl = req.body.name;
    console.log(userUrl)
    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1?key=' + apiKey + '&lang=en&url=' + userUrl)
    console.log('Your API key is ' + apiKey)
    const addData = await response.json()
    console.log(addData)
    res.send(addData)
})
