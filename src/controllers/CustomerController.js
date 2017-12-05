const Service = require('../services');
const BaseController = require('./BaseController');


class CustomerController extends BaseController {

    constructor() {
        super();
    }

    getCustomers(req,res) {
        const customers = Service.CustomerService.fetch({},{},{})
        return this.sendResponse(req,res,customers)
    }

    async getSingleCustomer(req,res) {
        const customer =  Service.CustomerService.fetchOne({_id:req.params.customer},{},{});
        return this.sendResponse(req,res,customer)
    }

    async saveCustomer(req,res) {
        const customerData = Object.assign({},req.body);
        const savedCustomer = await Service.CustomerService.save(customerData);
        return this.sendResponse(req,res,savedCustomer);
    }

    async deleteCustomer(req,res) {
        const customer = req.params.customer.trim();
        const deletedCustomer = await Service.CustomerService.removeCustomer({"_id":customer},{});
        return this.sendResponse(req,res,deletedCustomer);
    }
}

module.exports = new CustomerController();
