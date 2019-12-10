const mongoose = require ('mongoose')

const usersSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        unique: true
    },

    staffID: {
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    }

})

usersSchema.statics.findByCredentials = async (staffID, password)=>{
    var isMatch
    const user = await User.findOne({staffID})

    if(!user){
       return 'No user'
    }else{
        if(password === user.password){
            isMatch = true
            return user
        }

        if(isMatch !== true){
            // throw new Error('No User from the model 2')
            return 'No user'
        }
    }
}

const users = mongoose.model('Users', usersSchema)

module.exports = users