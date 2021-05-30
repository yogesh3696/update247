const express = require('express')
const hbs = require('hbs')
const path = require('path')
require('../db/localdb')
const registerRoute = require('../routes/register')
const addNewNewsRoute = require('../routes/addNewNewsRoute')
const dashboard = require('../routes/dashboard')
const dataviewlist = require('../routes/dataViewList')

const app = express();

const port = process.env.port || 3000

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../view')
const viewsPath = path.join(__dirname, '../view/html')
const partialsPath = path.join(__dirname, '../view/html/common')


// Setup handlebars engine and views location
app.set('view engine', 'ejs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/',(req,res)=>{
    res.render('registerPage');
})

app.use(registerRoute)
app.use(addNewNewsRoute)
app.use(dashboard)
app.use(dataviewlist)

app.listen(port,()=>{
    console.log("server started at port ",port);
})