const express = require('express')
const route = express.Router()

route.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})

module.exports = route