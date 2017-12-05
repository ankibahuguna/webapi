process.env.NODE_CONFIG_DIR = "./config";
const Bluebird = require("bluebird");
const Express = require("express");
const Mongoose = require('mongoose');
const Config = require('config');
const Http = require('http');
const Https = require('https');
const BodyParser = require('body-parser');
const Controllers = require("./src/controllers");


const App = Express();
Mongoose.Promise = Bluebird;
global.Promise = Bluebird;


App.use(BodyParser.urlencoded({ extended: false }))

// parse application/json
App.use(BodyParser.json());

const Server = createServer(App);

Mongoose.connect(Config.get("DB_CONFIG.MONGO.URI"), { useMongoClient: true }).then(
    () => {
        console.log("Mongodb connected");
    },
    (err) => {
        console.error(err, "Could not connected to mongo");
        process.exit(1);
    },
);

const Listener = Server.listen(Config.get("PORT"), (err) => {
    if (err) {
        console.error(err, "Couldn't start server");
        process.exit(0);
    } else {

        console.log(`Server successfully started on port : ${Listener.address().port}`);
    }
});

// Returns HTTP or HTTPS server based on environment variable
function createServer(app) {
    if (loadSSL()) {
        return Https.createServer(Config.get("SSL_CONFIG"), app);
    }
    return Http.createServer(app);
}

/*
    If NODE_ENV is set and is not equal to development then load SSL config
  */
function loadSSL() {
    console.log(process.env.NODE_ENV, "Environment");
    return (process.env.NODE_ENV && process.env.NODE_ENV !== "development");
}

/*
    Routes
 */
App.get('/',(req,res)=>res.send('Hello'));
App.get('/customers',Controllers.CustomerController.getCustomers.bind(Controllers.CustomerController));
App.get('/customers/:customer',Controllers.CustomerController.getSingleCustomer.bind(Controllers.CustomerController));
App.post('/customers',Controllers.CustomerController.saveCustomer.bind(Controllers.CustomerController));
App.delete('/customers/:customer',Controllers.CustomerController.deleteCustomer.bind(Controllers.CustomerController));
// Log all uncaught errors in log file and terminal
process
    .on("unhandledRejection", (reason, p) => {
        console.error(reason, "Unhandled Rejection at Promise", p);
    })
    .on("uncaughtException", (err) => {
        console.error(err, "Uncaught Exception thrown");
    });
/*
 Bluebird promise rejection handler
 */
Promise.onPossiblyUnhandledRejection((error) => {
    console.error(error);
});



