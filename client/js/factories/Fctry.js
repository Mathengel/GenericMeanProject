app.factory('Fctry', ['$http', Fctry])

function Fctry($http){
    console.log("_____ factory loaded!!!.. ")

    return {

        // index: function(success){
        //     console.log("orderFctry.index fired!!!")
        //     $http.get('/orders').then(success);
        // },

        // create: function(newOrder, success){
        //     console.log("orderFctry.create fired!!!!", newOrder)
        //     $http.post('/orders', newOrder).then(success);
        // },

    }
}