const mongoose=require('mongoose')

// schema

const userSchema={
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true
    }

}

// modal

const users=mongoose.model("users",userSchema)

// exports

module.exports=users