const mongoose=require("mongoose")
const Schema=mongoose.Schema
const employeeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    created_on:{
        type:Date,
        default:new Date().getTime()
    }

},{timestamps:true})
const employee=mongoose.model("employee",employeeSchema)
module.exports=employee