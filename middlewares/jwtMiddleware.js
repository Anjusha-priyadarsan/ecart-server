const jwt=require('jsonwebtoken')

// middleware function - token verification



exports.middlewareFunction=(req,res,next)=>{
    console.log("-----inside missileware-----");
    // token
    // try {

        const token=req.headers['access_token'].split(" ")[1] 
        // `Bearer ${token")`
        // verify
        const jwtResponse=jwt.verify(token,process.env.JWT_SECRET_KEY)


        // store the user id payload in request payload

        req.payload = jwtResponse.uid  
        next()
        
    // } catch {

    //     res.status(401).json("authentication failed plaese login again")
        
    // }
}