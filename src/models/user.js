const mongoose = require("mongoose");

const { Schema } = mongoose;



const Users = new Schema({
    deviceToken: { type: String },
    deviceType : { type : String , trim : true },
    name : { type : String , trim : true, lowercase : true },
    phone : { type : String , trim : true ,  unique : true }

},{
    timestamp : true
});



module.exports = mongoose.model("Users", Users);
