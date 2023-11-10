const mongoose = require('mongoose');

const headerFormSchema = new mongoose.Schema({
  yard: 
  { 
    type: String, 
    required: true
 },

  customerName: 
  { 
    type: String, 
    required: true 
 },

  agent: 
  { 
    type: String, 
   
 },

  unitNumber: 
  { 
    type: Number, 
    required: true
 },

  usage: 
  { 
    type: String,
     required: true
 },

  type: 
  { 
    type: String, 
    required: true 
},

  size: 
  { 
    type: Number,
     required: true
 },

  estimateDate: 
  { 
    type: Date, 
    required: true 
},

  uom: 
  { 
    type: Number, 
    required: true 
},

  billTo:
   {
     type: String, 
     required: true 
    },

  lessee: 
  {
     type: String, 
     required: true 
    },

  amount: 
  { 
    type: Number, 
    required: true 
},

  paymentType: 
  { 
    type: String, 
    required: true 
},

  active: 
  { 
    type: Boolean,
   
 },
  remark: 
  { type: String, 
    required: true 
},
});

const HeaderForm = mongoose.model('HeaderForm', headerFormSchema);

module.exports = HeaderForm;
