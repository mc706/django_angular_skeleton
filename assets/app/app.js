
var app = angular.module('default',["ngCookies"], function($interpolateProvider){
    $interpolateProvider.startSymbol("{[{");
    $interpolateProvider.endSymbol("}]}");
});

app.run(function ($http, $cookies) {
    $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
});
/*
app.run(function ($rootScope, $cookies){
    $rootScope.market = $cookies['market_id'];
    $rootScope.user = $cookies['user_id']
})
*/

app.config(function($routeProvider){
    $routeProvider
        .when('/default/',
            {
                //home page
                controller:'DefaultController',
                templateUrl:'/static/app/views/default.html',
                resolve:{}
            })
        .when('/default/:id',
            {
                controller:'DefaultController',
                templateUrl:'/static/app/views/default.html',
                resolve:{
                    object: function($route, DefaultService){
                        var objectId= $route.current.params.id;
                        return DefaultService.getObject(objectId)
                    }
                }
            })
        .otherwise({redirectTo:'/'});

});