var app = angular.module("App", ['ngRoute'])
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        })                                                                
})