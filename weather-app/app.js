const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Mumbai', (error, data)=>{
    // if(error){
    //     console.log(error)
    // }
    // else{
    //     console.log(data.name)
    // }
    if(error){
        return console.log(error)
    }
    forecast(data.lat,data.lon,(error,forecastData)=>{
        // if(error){
        //     console.log(error)
        // }
        // else{
        //     console.log(forecastData)
        // }
        if (error){
            return console.log(error)
        }

        console.log(data.name)
        console.log(forecastData)
    })

})
