const employee=require("../models/Schema")

// show the list of employees
const index= async(req,res,next)=>{
    try{
        employee.find()
        .then((data)=>{
            res.send(data)
            console.log(data);
        }) 
    }catch(e){
        console.log(e);
    }
}


// show single employee
const show=(req,res,next)=>{
    // res.send("hello wrold"/p )
    try {
    let id=req.body.id
    employee.findById(id)
    .then((data)=>{
        res.send(data)
        console.log(data);
    })
    .catch((err)=>{
    console.log(err);
    })
    } catch (error) {
        console.log(error);
    }
}

// add the employee
const store=(req,res,next)=>{
    try {
        let employee1=new employee(
            req.body
        )
        employee1.save((err,data)=>{
            if (err){
                res.send(err)
                // console.log(err);
            }else{
                res.send(data)
                console.log(data);
            }
            
    
        })
    } catch (error) {
        console.log(error);
        
    }
}


// update an employee
const update=(req,res,next)=>{
    try {
        let id=req.body.id
        let updateData={
        title:req.body.title,
        description:req.body.description
    }
        employee.findByIdAndUpdate(id,{$set:updateData})
        .then((data)=>{
        res.send(data)
        console.log("data update succfully");
    })
        .catch((err)=>{
            res.json({
                message:"data update faield"
        })
    })
    } catch (error) {
        console.log(error);
        
    }
}

// delete the employee

const destroy=(req,res,next)=>{
    try {
    let employeeID=req.body.employeeID
    employee.findByIdAndRemove(employeeID)
    .then((data)=>{
        res.send(data)
        console.log("delete emp successfully");
    }).catch((err)=>{
        console.log("unabale to delete emp");
    })
} catch (error) {
    console.log(error);
    
}
}

module.exports={
    index, show, store, update, destroy
}
