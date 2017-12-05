
class DAO {
    constructor(model) {
        this.model = model;
    }

    find(...args) {
        return this.model.find(...args).lean().exec();
    }

    save(data) {
        return this.model.create(data);
    }

    findOne(...args) {
        return this.model.findOne(...args).lean().exec();
    }

    updateOne(...args) {
        return this.model.findOneAndUpdate(...args).lean().exec()
    }

    removeOne(...args) {
        return this.model.findOneAndRemove(...args).lean().exec()
    }

    removeAll(criteria,options={multi:true}) {
        return this.model.remove(criteria,options);
    }
}
module.exports = DAO;