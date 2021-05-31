const express = require('express')
const viewList =  require('../models/addNewNewsModels')
const route = express.Router()

route.get('/dataviewlist', async (req,res)=>{
    const dataView = new viewList()

    try{
        const vies = await viewList.find({})
        console.log(vies)
        return res.render('dataviewlist',{
            'userData' : vies
        })
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = route
