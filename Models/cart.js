const mongoose=require('mongoose')

// schema

const cartSchema={
    userId:{
        type:String,
        required:true

    },
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
     rating:{
            rate:{
                type:Number,
                required:true

                },
            count:{
                type:Number,
                required:true

            }
        
    },
    quantity:{
            type:Number,
            required:true
    },
    grantTotal:{
            type:Number,
            required:true

    }

}


// modal

const carts=mongoose.model("carts",cartSchema)

// exports

module.exports=carts