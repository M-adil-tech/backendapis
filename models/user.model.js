const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

    
   
    email: {    
        type: String,
        lowercase: true,
        required: [true, "email can't be empty"],
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "userName format is not correct",
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },

    confirmPassword: {
        type: String,
       
    },

    username:{
        type:String,
        required: [true , "UserName can't be empty"]

    },
    role:{
        type:String,
        required: [true , "role can't be empty"]

    }
},{timestamps:true});

userSchema.pre("save",async function(){
    var user = this;
    if(!user.isModified("password")){
        return
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password,salt);

        user.password = hash;
    }catch(err){
        throw err;
    }
});



userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        console.log('----------------no password',this.password);
        
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};

const UserModel = mongoose.model('user',userSchema);
module.exports = UserModel;