const request = require('request');

const url ='https://api.darksky.net/forecast/04b7a140f48a161bab606bc04471c4fe/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})