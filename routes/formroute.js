const express = require('express');
const router = express.Router();
const headerformController = require('../controllers/formController');

// router for creating
router.get('/formpage',(req,res)=>{
    res.render("formpage")
  })

//rout to post
router.post('/createheaderform', headerformController.createHeaderForm);
router.get('/clientsform', headerformController.getclientsform);

module.exports = router;