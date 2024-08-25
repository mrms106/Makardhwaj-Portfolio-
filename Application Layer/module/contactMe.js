const { name } = require("ejs")
const mongoose=require("mongoose")
const Schema=mongoose.Schema

const contactScema=new Schema({
    name:String,
    email:String,
    message:String
})

module.exports=mongoose.model("contactme",contactScema)

