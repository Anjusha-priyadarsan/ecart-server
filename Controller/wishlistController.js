const wishlists = require('../Models/wishlist');



exports.addToWishList=async(req,res)=>{
    const {userId,id,title,price,description,category,image,rating}=req.body



    try{
        const item=await wishlists.findOne({userId,id})
        if(item){
            res.status(406).json("product already exist in your wishlist")
        }
        else
        {
            const newItem=new wishlists({userId,id,title,price,description,category,image,rating})
            await newItem.save()
            res.status(200).json(`${title} added to wishlist`)

        }
    }
    catch{
        res.status(400).json("add to wish list api failed")
        
        

    }

}


exports.getWishList=async(req,res)=>{

    const {userId}=req.params


   try{
        const products=await wishlists.find({userId})
        if(products){
            res.status(200).json(products)
            
        }
        else
        {
            res.status(400).json("empty wishlist")
        }

    }
    catch{
        res.status(400).json("get wishlist api failed")
        
    }
   

}

exports.removeWishListItem=async(req,res)=>{

    const {_id}=req.params
    try{
        await wishlists.deleteOne({_id})
        res.status(200).json("products deleted from wishlist")

    }
    catch{
        res.status(400).json("delete wishlist api failed")


    }

}