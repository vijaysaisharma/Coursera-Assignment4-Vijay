(function(){
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com');

    MenuDataService.$inject = ['$http', 'ApiBasePath'];

    function MenuDataService($http, ApiBasePath){
        var service = this;
        service.getAllCategories = function(){
            console.log('in getAllCategories()');            
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function(response){
                console.log('data: ', response.data);
                return response.data;
            }).error(function(){
                console.log('error');
            });
        };

        service.getItemsForCategory = function(categoryShortName){

        };
    };
})();