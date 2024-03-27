require('dotenv').config()


const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')



cartServer=express()



cartServer.use(cors())

// convert json data comming from front to js code

cartServer.use(express.json())

require('./Connections/connection')
cartServer.use(router)


// cartServer.post('/postexc',(req,res)=>{
//     res.json(123)
// })


const PORT=8000 || process.env.port
cartServer.listen(PORT,()=>{
    console.log(`--------------------cart-server started at port ${PORT}-------------`);
})