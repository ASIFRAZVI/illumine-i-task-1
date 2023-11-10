const express= require('express')
//router object
const router=express.Router();


router.get('/',(req,res)=>{
    res.render("frontpage")
  })

  
  router.get('/successfull',(req,res)=>{
    res.render("successfull")
  })

  
module.exports=router;