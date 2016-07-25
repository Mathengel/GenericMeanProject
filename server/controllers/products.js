console.log("products controller loaded...")
var mongoose = require('mongoose');
var Product = mongoose.model('Product');


module.exports = {

    index: function(req, res){
        console.log('getting from /products')
        Product.find({}, function(err, products){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(products);            
        })
    },

    create: function(req, res){
        console.log('posting to /products', req.body)
        Product.create(req.body, function(err, product){
            if(err){
                res.status(400).json(err);
            }
            res.json(product);
        })
    }
}
