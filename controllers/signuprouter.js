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
    let password=data.password
    hashpasswordgenerator(password).then(
        (hashedpassword)=>
    {
        console.log(hashedpassword)
        data.password=hashedpassword
        console.log(data)
          
    let resumes=new resumerouter(data)
    let response=resumes.save()
    res.json(
        {
            status:"Success"
        }
    )

    })})

router.post("/login",async(req,res)=>{
    let input=req.body
    let emailid=req.body.emailid
    let data=await resumerouter.findOne({"emailid":emailid})
    console.log(data)
    let dbpassword=data.password
    let inputpassword=req.body.password
    console.log(dbpassword)
    console.log(inputpassword)
    const match=await bcrypt.compare(inputpassword,dbpassword)
    if(!match)
        {
         return res.json(
            {
                status:"Incorrect"
            }
        )
        }
        else{
        res.json(
            {
                status:"Success"
            }
        )
        }
    })
module.exports=router