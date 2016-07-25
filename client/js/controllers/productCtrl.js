app.controller('productCtrl', ['$scope', 'productFctry', productCtrl])

function productCtrl($scope, productFctry){
    console.log('product controller loaded!!!!!!!!')

    function getProducts(){
        console.log("getting products...");
        productFctry.index (function (response){
            console.log("response from factory.index", response)
            $scope.products = response.data;
        })
    }
    getProducts();

    $scope.create = function(newProduct){
        console.log('scope.create method fires!!!', newProduct)
        productFctry.create(newProduct, function (response){
            console.log("response from productFctry.create, but from controller call", response)
        })
        getProducts();
        $scope.newProduct = {};
    }
}
