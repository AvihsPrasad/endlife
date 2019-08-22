const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let registerschema = new Schema({
    username: {type: String},
    age: {type: Number, maxlength: 2, min:18, max: 65},
    gender: {type: String },
    email: {type: String, unique: true},
    password: { type: String },
    phone: {type: Number, unique: true, maxlength: 10},
    aadhar_no: { type: Number, unique: true, maxlength: 16, minlength: 16 }
});

module.exports = mongoose.model('Register', registerschema);