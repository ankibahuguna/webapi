const User = require('../models').User;



module.exports = {
    fetch  : (criteria,projection,options)=>{
        return User.find(criteria,projection,options).lean().exec();
    },
    save : (customer) => User.create(customer),

    fetchOne  : (criteria,projection,options)=>{
        return User.findOne(criteria,projection,options).lean().exec();
    },
    update  : (criteria,fieldsToUpdate,options)=>{
        return User.findOneAndUpdate(criteria,fieldsToUpdate,options).lean().exec();
    },
    removeCustomer : (criteria,options={}) => {
        return User.findOneAndRemove(criteria,options).lean().exec();
    }

}