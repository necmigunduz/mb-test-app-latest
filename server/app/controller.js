// Import the model
let Product = require('./model')

// Handle index actions
exports.index = function(req, res) {
    Product.get(function(err, products){
        if(err) {
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            status: "success",
            message: "Product info retrieved successfully!",
            data: products
        })
    })
}

// Handle create product
exports.new = function(req, res) {
    let product = new Product()
    product.name = req.body.name ? req.body.name : product.name
    product.brand = req.body.brand
    product.desc = req.body.desc
    product.color = req.body.color
    product.price = req.body.price
    product.amount = req.body.amount
    // Save the product
        product.save(function(err){
            if (err)
                res.json(err)
            res.json({
                message: 'New product is created!',
                data: product
            })
        })
}

// Handle view product info
exports.view = function(req, res) {
    Product.findById(req.params.product_id, function(err, product){
        if (err)
            res.send(err)
        res.json({
            message: 'Product details are loading...',
            data: product
        })
    })
}

// Handle update product
exports.update = function(req, res) {
    Product.findById(req.params.product_id, function(err, product){
        if (err)
            res.json(err)
        product.name = req.body.name ? req.body.name : product.name
        product.brand = req.body.brand
        product.desc = req.body.desc
        product.color = req.body.color
        product.price = req.body.price
        product.amount = req.body.amount
        // Save the updated product
        product.save(function(err){
            if (err)
                res.json(err)
            res.json({
                message: 'Product is updated successfully!',
                data: product
            })
        })
    })
}

// Handle delete
exports.delete = function(req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function(err, product){
        if (err)
            res.send(err)
        res.json({
            status: 'Success',
            message: 'Product is deleted successfully!'
        })
    })
}