app.factory("RestApiService", ['$http', function($http){

    var _get = function(path) {

        return $http.get(path).success(function(data){
            return data;
        }).error(function(err){
            console.log("An error ocurred sending request");
        });

    };

    var _post = function() {

    };

    return {
        get: _get,
        post: _post
    }

}]);