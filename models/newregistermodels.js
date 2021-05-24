const mongoosee = require('mongoose')

const register = new mongoosee.Schema({
    name : {
        required : true,
        type: String,
        trim : true
    },
    emaild : {
        required : true,
        type : String,
        trim : true
    },
    password : {
        required : true,
        type : String,
        trim : true,
        minlength : 7
    }
})

const registerUser = mongoosee.model('registerUser',register)

module.exports = registerUser