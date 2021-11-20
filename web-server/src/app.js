const path = require('path')
const express =  require('express')

const publicDirectoryPath = path.join(__dirname, '../public') //to get the path in a variable

const app = express()
app.use(express.static(publicDirectoryPath)) //static ditrectory that gonna make up for all our websites. It will load index.html at localhost:3000/index.html

app.get('/help', (req, res)=>{
    res.send('How we can help you?')
})


app.get('/weather',(req, res)=>{
    res.send([{
        name: 'Shikhar',
        age: 27
    },{
        name: 'Mridul',
        age: 18
    }])
})

app.listen(3000,()=>{
    console.log('Server is running')
})