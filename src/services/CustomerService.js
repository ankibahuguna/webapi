const User = require('../models').User;

const DAO = require('../DAO');

const DB = new DAO(User);

module.exports = {
    fetch  : (criteria,projection,options)=>{
        return DB.find(criteria,projection,options)
    },
    save : (customer) => DB.save(customer),

    fetchOne  : (criteria,projection,options)=>{
        return DB.findOne(criteria,projection,options);
    },
    update  : (criteria,fieldsToUpdate,options)=>{
        return DB.updateOne(criteria,fieldsToUpdate,options);
    },
    removeCustomer : (criteria,options={}) => {
        return DB.removeOne(criteria,options);
    }

}