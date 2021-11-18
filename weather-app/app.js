const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=43177dbf4b6067a4a2ae4fb41bfcdfe6&query=37.8267,-122.4233'
// request({url: url}, (error, response)=>{ //response is string representation of JSON
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// }) manal parsing of JSON data received by API

request({url: url, json: true}, (error, response)=>{
    console.log(response.body.current)
}) // auto-parsing