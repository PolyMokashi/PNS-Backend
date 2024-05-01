const express = require("express")
const router = express.Router()
const Tracker = require("../models/tracker")



router.post("/post",async(request,response)=>{
    await Tracker.updateOne(
        {_id:"643e6d864cfb5d4497df3d2a"},{
        trackerId:"DSFSAPR18042023gsgs146"
       })
   })


  


router.get("/get",async(request,response)=>{
   await Tracker.find().then((data)=>{response.json(data)}).catch((error)=>{response.json(error)});
   })

module.exports = router;