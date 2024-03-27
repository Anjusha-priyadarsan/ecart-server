const products=require('../Models/product.');

exports.getAllProducts=async(req,res)=>{

    var searchQuery=req.query.search
    const query={
        // i=case sensitive
        title: { $regex: searchQuery, $options: "i" }  
    }

    try{

        const allproducts=await products.find(query)
        res.status(200).json(allproducts)
    }
    catch{

        res.status(400).json("get product api failed")


    }

}

// get single product

exports.getSingleProduct=async(req,res)=>{

    const _id=req.params.id

    try{

        const product=await products.findOne({_id})
        res.status(200).json(product)
    }
    catch{

        res.status(400).json(" product api failed")


    }

}





