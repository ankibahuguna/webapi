const { CustomerService }= require('../services');
const BaseController = require('./BaseController');


class CustomerController extends BaseController {

    constructor() {
        super();
    }

    getCustomers(req,res) {
        return this.sendResponse(req,res,CustomerService.fetch({},{},{}))
    }

    async getSingleCustomer(req,res) {
	return this.sendResponse(req,res,CustomerService.fetchOne({_id:req.params.customer},{},{}))
    }

    async saveCustomer(req,res) {
        const customerData = Object.assign({},req.body);
        return this.sendResponse(req,res,CustomerService.save(customerData));
    }

    async deleteCustomer(req,res) {
        const customer = req.params.customer.trim();
        return this.sendResponse(req,res,CustomerService.removeCustomer({"_id":customer},{}));
    }
}

module.exports = new CustomerController();
