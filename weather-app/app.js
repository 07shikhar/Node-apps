// const request = require('request')
// const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=43177dbf4b6067a4a2ae4fb41bfcdfe6&query=37.8267,-122.4233'
// // request({url: url}, (error, response)=>{ //response is string representation of JSON
// //     const data = JSON.parse(response.body)
// //     console.log(data.current)
// // }) manual parsing of JSON data received by API

// request({url: url, json: true}, (error, response)=>{
//     if (error){
//         console.log("Unable to connect to the API")
//     }
//     else if(response.body.error){
//         console.log("Unable to find Location")
//     }
//     else{
//         const rBdy = response.body.current
//         console.log("The temperatue is " + rBdy.temperature + " and there are " + rBdy.feelslike + "% chances of rain.")

//     }
    
// }) // auto-parsing
// geocode('Mumbai', (error, data)=>{
//     console.log('Error', error)
//     console.log('Data', data)

// })
forecast(18.96667,72.83333,(error,data)=>{
    console.log('Error', error)
    console.log('Data', data)
})