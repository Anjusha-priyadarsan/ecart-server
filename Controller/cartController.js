const carts=require('../Models/cart')

exports.addToCart=async(req,res)=>{
    const {id,title,price,description,category,image,rating,quantity}=req.body
    const userId=req.payload
    try{
      const existingProduct=  await carts.findOne({userId,id})
      if(existingProduct){
        existingProduct.quantity+=1
        existingProduct.grantTotal=existingProduct.price*existingProduct.quantity
        await existingProduct.save()
        res.status(200).json("cart item quantity incremented")

      }
      else{

        const newCart=new carts({
            userId,id,title,price,description,category,image,rating,quantity,grantTotal:price
        })
        await newCart.save()
        res.status(200).json(`${title} added to the cart`)


      }
    }
    catch{
        res.status(400).json("added to cart api failed")
    }


   
  
  }

  exports.getCart=async(req,res)=>{

    const userId=req.payload


   try{
        const products=await carts.find({userId})
        if(products){
            res.status(200).json(products)
            
        }
        else
        {
            res.status(400).json("empty cart")
        }

    }
    catch{
        res.status(400).json("get cart api failed")
        
    }
  }

  exports.removeCartItem=async(req,res)=>{

    const {_id}=req.params
    try{
        await carts.deleteOne({_id})
        res.status(200).json("products deleted from wishlist")

    }
    catch{
        res.status(400).json("delete wishlist api failed")


    }

}


exports.incrementCount=async(req,res)=>{
  const {_id}=req.params

  try{

    var existingProduct=await carts.findOne({_id})
    if(existingProduct){

      existingProduct.quantity+=1
      existingProduct.grantTotal=existingProduct.quantity*existingProduct.price
      await existingProduct.save()
      res.status(200).json("cart item incremented")


    }
    else{
      res.status(400).json("product not found")
    }

  }
  catch{
    res.status(400).json("cart increment api failed")
  }
}


exports.decrementCount=async(req,res)=>{
  const {_id}=req.params

  try{

    var existingProduct=await carts.findOne({_id})
    if(existingProduct){

      existingProduct.quantity-=1
            if(existingProduct.quantity==0){
              await carts.deleteOne({_id})
              res.status(200).json("item removed")
            }
            else{
              existingProduct.grantTotal=existingProduct.quantity*existingProduct.price
              
              await existingProduct.save()
              res.status(200).json("cart item incremented")
            }
      


    }
    else{
      res.status(400).json("product not found")
    }

  }
  catch{
    res.status(400).json("cart increment api failed")
  }
}


exports.emptyCart=async(req,res)=>{

  const userId=req.payload

  try{

     await carts.deleteMany({userId})
     res.status(200).json("cart items removed")

  }
  catch{
    res.status(400).json("cart delete api failed ")

  }
}
   
  
