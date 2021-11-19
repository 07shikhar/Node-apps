const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Mumbai', (error, data)=>{
    console.log('Error', error)
    console.log('Data', data)

})
forecast(18.96667,72.83333,(error,data)=>{
    console.log('Error', error)
    console.log('Data', data)
})