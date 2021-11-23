const path = require('path')
const express =  require('express')
const hbs = require('hbs')

const publicDirectoryPath = path.join(__dirname, '../public') //to get the path in a variable
const viewsPath = path.join(__dirname, '../templates/views')//path for the changed name of Views
const partialPath = path.join(__dirname,'../templates/partials')

const app = express()
app.use(express.static(publicDirectoryPath)) //static ditrectory that gonna make up for all our websites. It will load index.html at localhost:3000/index.html

app.set('view engine', 'hbs')
app.set('views', viewsPath)//setting the path to the changed name
hbs.registerPartials(partialPath)//path for patials



app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Shikhar'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About',
        name:'Shikhar'
    })
})
app.get('/help', (req, res)=>{
    res.render('help',{
        title: 'Help',
        message: 'How may I help you!!',
        name: 'Shikhar'
    })
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

app.get('/help/*', (req, res)=>{ //must come at the end. * is for any route except mentioned routes
    res.render('404',{
        title: '404',
        errMsg: 'Help Data Page Not Found',
        name: 'Shikhar'
    })
})

app.get('*', (req, res)=>{ //must come at the end. * is for any route except mentioned routes
    res.render('404',{
        title: '404',
        errMsg: 'Page Not Found',
        name: 'Shikhar'
    })
})
app.listen(3000,()=>{
    console.log('Server is running')
})