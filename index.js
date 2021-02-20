const express=require("express")
// const app=express()
const mongoose=require("mongoose")
const morgan= require("morgan")
const bodyParser=require("body-parser")
const employeeRoute=require("./routes/router")
mongoose.connect("mongodb://localhost:27017/curd",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("db is connected");
    }else{
        console.log("db is not connected");
    }
})
const app=express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use("/api/employee",employeeRoute)

app.listen(3000,(req,res)=>{
    console.log("server is running on port:3000");
})







