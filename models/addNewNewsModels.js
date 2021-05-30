const mongoose = require('mongoose')

const addnewNews = new mongoose.Schema({
    title :{
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    url : {
        type : String,
        required : true,
        trim : true
    },
    urltoimage : {
        type : String,
        required : true,
        trim : true
    },
    publishedAt : {
        type : String,
        required : true,
        trim : true
    }
})

const AddNewNews = mongoose.model('addnewNews',addnewNews)

module.exports = AddNewNews 