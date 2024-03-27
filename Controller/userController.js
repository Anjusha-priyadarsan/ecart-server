const users=require('../Models/user');
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{

    const  {username,email,password}=req.body

    try{
        const user=await users.findOne({email:email})
        if(user){
            res.status(400).json("user already exist please login")
        }
        else
        {
            const newUser=new users({username:username,email:email,password:password})
            await newUser.save()
            res.status(201).json(newUser)

        }
    }
    catch{
        res.status(400).json("register api failed")
        

    }
}

exports.login=async(req,res)=>{

    const  {email,password}=req.body

    try{
        const user=await users.findOne({email:email,password:password})
        if(user){
            
            // token generation

            const token=jwt.sign({uid:user._id},process.env.JWT_SECRET_KEY)

            res.status(200).json({user,token})
        }
        else
        {
            
            res.status(401).json("incorrect email or password")

        }
    }
    catch{
        res.status(400).json("login api failed")
        

    }
}

