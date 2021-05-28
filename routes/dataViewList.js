const express = require('express')
const route = express.Router()

route.get('/dataviewlist',(req,res)=>{
    res.render('dataviewlist')
})

module.exports = route
