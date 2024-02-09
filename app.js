const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const signuproute=require("./controllers/signuprouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anna07:anna@cluster0.a7na4kg.mongodb.net/resumesDb?retryWrites=true&w=majority",
{
  useNewUrlParser:true
}
)
app.use("/api/resume",signuproute)
app.listen(3001)
