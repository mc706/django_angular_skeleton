app.service('DefaultService',function($http, $q, $rootScope){
    //var market = $rootScope.market;
    //var user = $rootScope.user;
    return {
        listDefaults:function(){
            var defer = $q.defer();
            var url = '/api/objects/' + filter;
            $http({
                method:'GET',
                url:'/api/objects/'
            }).success(function (data, status, headers, config){
                defer.resolve(data);
            }).error(function(data, status, headers, config){
                defer.reject(status);
            });
            return defer.promise;
        },
        createDefault:function(data){
            var defer = $q.defer();
            $http({
                method:'POST',
                url:'/api/objects/new/',
                data:data
            }).success(function (data, status, headers, config){
                defer.resolve(data);
            }).error(function(data, status, headers, config){
                defer.reject(status);
            });
            return defer.promise;
        },
        getDefault:function(object_id){
            var defer = $q.defer();
            $http({
                method:'GET',
                url:'/api/objects/' + object_id + '/'
            }).success(function (data, status, headers, config){
                defer.resolve(data);
            }).error(function(data, status, headers, config){
                defer.reject(status);
            });
            return defer.promise;
        }
    }
});