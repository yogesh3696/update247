const express = require('express')
const route = new express.Router()

route.get('/addnewNews',(req,res)=>{
    res.render('addnewnews')
})

module.exports = route