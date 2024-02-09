const express=require("express")
const resumerouter=require("../models/signmodel")

const router=express.Router()

router.post("/signup",async(req,res)=>{
    let {data}={data:req.body}
    let password=data.userpassword
    let resumes=new resumerouter(data)
    let response=await resumes.save()
    res.json(
        {
            status:"Success"
        }
    )

    
})
module.exports=router