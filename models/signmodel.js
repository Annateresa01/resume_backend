const mongoose=require("mongoose")
const signSchema=new mongoose.Schema(
    {
        username:String,
        useremail:String,
        userno:String,
        useradrs:String,
        userpassword:String
    }
)
module.exports=mongoose.Schema("resumes",signSchema)