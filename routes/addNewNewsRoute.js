const express = require('express')
const route = new express.Router()
const newNewsModel = require('../models/addNewNewsModels')

route.get('/addnewNews',(req,res)=>{
    res.render('addnewnews')
})

route.post('/addnewNewsForm', async (req,res)=>{
    const News = new newNewsModel(req.body)
    try{
        await News.save()
        res.render('addnewnews')
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
})

module.exports = route