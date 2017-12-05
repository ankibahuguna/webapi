class BaseController {

    constructor () {
        if (new.target === BaseController) {
            throw Error('BaseController is an abstract class and cannot be instantiated directly');
        }
    }

    async sendResponse(req,res,fn) {
        try {
                const response = await fn;
                return res.json(response);
        }catch(err) {
            return res.send(err);
        }
    }

}

module.exports = BaseController;