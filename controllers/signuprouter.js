const express=require("express")
const resumerouter=require("../models/signmodel")
const bcrypt=require("bcrypt")

const router=express.Router()

hashpasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    let {data}={data:req.body}
    let password=data.userpassword
    hashpasswordgenerator(password).then((hashedpassword)=>
    {
        data.userpassword=hashedpassword
        console.log(data)
          
    let resumes=new resumerouter(data)
    let response=resumes.save()
    res.json(
        {
            status:"Success"
        }
    )

    })
    

    
})
router.get("/login",async(req,res)=>
{
    
})
module.exports=router