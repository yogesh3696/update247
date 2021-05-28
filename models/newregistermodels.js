const mongoosee = require('mongoose')
const bcrypt = require('bcryptjs')

const registerSchema = new mongoosee.Schema({
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

registerSchema.statics.findByCredentials = async(emaild,password) =>{

    const user = await registerUser.findOne({ emaild })

    if(!user){
        throw new Error('Unable to login') 
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error('Unable to login') 
    }

    return user  

}

registerSchema.pre('save',async function(next) { 

    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }

    next()
})

const registerUser = mongoosee.model('registerUser',registerSchema)

module.exports = registerUser