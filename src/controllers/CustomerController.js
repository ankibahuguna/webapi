const Service = require('../services');


module.exports = {
    getCustomers : async (req,res)=>{
       try {
           const customers = await Service.CustomerService.fetch({},{},{})
           res.json(customers);
       } catch(err) {
           res.send(err);
       }
    },
    saveCustomer : async (req,res) => {
        try {
            console.log("CUsotmer",req.body);
             const customerData = Object.assign({},req.body);
            const savedCustomer = await Service.CustomerService.save(customerData);

            res.json(savedCustomer);
        } catch(err) {
            res.send(err);
        }
    },
    deleteCustomer : async (req,res)=>{
        try {
            const customer = req.params.customer.trim();
            const deletedCustomer = await Service.CustomerService.removeCustomer({"_id":customer},{});
            res.json(deletedCustomer);
        } catch(err) {
            res.send(err);
        }
    }
}