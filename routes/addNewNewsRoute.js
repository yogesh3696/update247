const express = require('express')
const route = new express.Router()

route.get('/addnewNews',(req,res)=>{
    res.send('Addnewnews')
})

module.exports = route