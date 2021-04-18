const mongoose = require('mongoose');
const {Schema, model, Types} = mongoose;
const { ObjectId } = Types;

const customerSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        trim:true
    },
    eyeColor: {
        type: String,
        defaul: null
    },
    favouriteFruit: {
        type: String,
        default: null
    }
}, { versionKey: false, timestamps: true })

const Customer = model('customerDetails', customerSchema)
module.exports = Customer;