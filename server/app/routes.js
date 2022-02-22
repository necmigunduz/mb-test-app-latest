// API Routes
// Initialize express router
let router = require('express').Router()
// Setup default API routes
router.get('/', function(req, res){
    res.json({
        status: 'API is working!',
        message: 'Welcome to ProductRestAPI'
    })
})

// Import Controller
let productController = require('./controller')

// Weather Routes
router.route('/products')
    .get(productController.index)
    .post(productController.new)

router.route('/products/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);
// Export API routes
module.exports = router