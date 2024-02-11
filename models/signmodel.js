const mongoose=require("mongoose")
const usermodel=mongoose.Schema(
    {
        name:String,
        age:String,
        mobno:String,
        adrs:String,
        emailid:String,
        password:String

    }
)
module.exports=mongoose.model("resumes",usermodel)