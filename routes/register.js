const express = require('express')
const router = express.Router();
const registerModel = require('../models/newregistermodels')

router.post('/register',async (req,res)=>{
    const newUser = new registerModel(req.body)

    try{
        await newUser.save()
        res.send(newUser)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }

})

module.exports = router