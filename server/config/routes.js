console.log("module routes loaded...")
var products = require('../controllers/products.js')
// var customers = require('../controllers/customers.js')
// var orders = require('../controllers/orders.js')

module.exports = function(app){

    app.get('/products', products.index)
    app.post('/products', products.create)

    // app.get('/customers', customers.index)
    // app.post('/customers', customers.create)
    // app.delete('/customers/:id', customers.delete)

    // app.get('/orders', orders.index)
    // app.post('/orders', orders.create)


}