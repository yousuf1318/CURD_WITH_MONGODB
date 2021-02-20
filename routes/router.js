const express=require("express")
const router=express.Router()

const employeecontroler=require("../controllers/aip")
const { modelName } = require("../models/Schema")

router.get("/get",employeecontroler.index)
router.get('/show',employeecontroler.show)
router.post("/store",employeecontroler.store)
router.put('/update',employeecontroler.update)
router.delete('/delete',employeecontroler.destroy)


module.exports=router
