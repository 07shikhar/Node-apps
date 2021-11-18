const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=43177dbf4b6067a4a2ae4fb41bfcdfe6&query=37.8267,-122.4233'
// request({url: url}, (error, response)=>{ //response is string representation of JSON
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// }) manual parsing of JSON data received by API

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

// const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiOTlzaGlraGFyIiwiYSI6ImNrdzRlNnRiaDA1cHIydWxqNzk5ZzY0dzIifQ.2ZA0e8MygGAl5OTcOMOM9g&limit=1'
// request({url: geoCodeURL, json:true}, (error, response)=>{
//     if(error){
//         console.log("Unable to connect")
//     }
//     else if(response.body.features.length === 0){
//         console.log("Unable to find location")

//     }
//     else{
//         const lat = response.body.features[0].center[1]
//         const lon = response.body.features[0].center[0]
//         console.log(lat, lon)
//     }
    
// })
geocode('Mumbai', (error, data)=>{
    console.log('Error', error)
    console.log('Data', data)

})