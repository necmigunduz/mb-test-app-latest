const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number
    },
    amount: {
        type: Number,
        default: 0
    }
});

const Product = mongoose.model('Product', productSchema);