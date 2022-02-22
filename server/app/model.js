// Weather model
let mongoose = require('mongoose')
// Setup Schema
let productSchema = mongoose.Schema({
    name: String,
    brand: String,
    desc: String,
    color: String,
    price: Number,
    amount: {
        type: Number,
        default: 0
    }
})

// Export the model
let Product = module.exports = mongoose.model('product', productSchema)

module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit)
}