app.factory('productFctry', ['$http', productFctry])

function productFctry($http){
    console.log("product factory loaded!!!.. ")

    return {

        index: function(success){
            console.log("productFctry.index fired!!!")
            $http.get('/products').then(success);
        },

        create: function(newProduct, success){
            console.log("productFctry.create fired!!!!", newProduct)
            $http.post('/products', newProduct).then(success);
        },

    }
}