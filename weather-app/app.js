const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if(!address){
    console.log('Provide an address')
}
else{
    geocode(address, (error, {lat, lon, name} = {})=>{ // geocode(address, (error, data)
        // if(error){
        //     console.log(error)
        // }
        // else{
        //     console.log(data.name)
        // }
        if(error){
            return console.log(error)
        }
        forecast(lat,lon,(error,forecastData)=>{ // forecast(data.lat,data.lon,(error,forecastData)
            // if(error){
            //     console.log(error)
            // }
            // else{
            //     console.log(forecastData)
            // }
            if (error){
                return console.log(error)
            }
    
            console.log(name) //console.log(data.name)
            console.log(forecastData)
        })
    
    })
}

