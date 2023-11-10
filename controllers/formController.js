const HeaderForm = require('../models/formschema');

// Create a new header form entry
exports.createHeaderForm = async (req, res) => {
  try {
    const {yard, customerName, agent, unitNumber, usage, type,size,estimateDate, uom, billTo, lessee, amount, paymentType, active, remark,} = req.body;
      // Convert 'active' to a boolean
      const isActive = active === 'on';
    const headerForm = new HeaderForm({yard, customerName, agent, unitNumber, usage, type, size, estimateDate, uom, billTo, lessee,  amount,  paymentType,  active: isActive,  remark,});

    await headerForm.save();
    res.redirect('/successfull'); 
  } catch (error) {
    console.error(error);
    res.render('error1'); 
  }
};


// Get all expenses
exports.getclientsform = async (req, res) => {
  try {
   const clientsform = await HeaderForm.find();
    res.json(clientsform);
  } catch (error) {
    res.render('error1')
  }
};

// // Delete an expense
// exports.deleteexpence = async (req, res) => {
//     try {
//       const expenceId = req.params.id;
//       const deletedexpence = await expence.findByIdAndDelete(expenceId);
//       if (!deletedexpence) {
//         return res.status(404).json({ error: 'Expense not found.' });
//       }
//       //res.render('homepage')
//     } catch (error) {
//       console.log(error);
  
//     }
//   };
  

