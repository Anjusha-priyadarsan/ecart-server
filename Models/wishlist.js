const mongoose=require('mongoose')

// schema

const wishlistSchema={
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
        
    }

}


// modal

const wishlists=mongoose.model("wishlists",wishlistSchema)

// exports

module.exports=wishlists