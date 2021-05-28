const express = require('express')
require('../db/localdb')
const registerRoute = require('../routes/register')

const app = express();

const port = process.env.port || 3000

app.use(express.json())
app.use(express.urlencoded({ extended : false }))



app.set('views','./view/html/')
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('registerPage');
})

app.use(registerRoute)

app.listen(port,()=>{
    console.log("server started at port ",port);
})