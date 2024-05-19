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
            });
        };

        service.getItemsForCategory = function(categoryShortName){
            console.log('in getItemsForCategory()' );
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items/" + categoryShortName + ".json")
                //url: ('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L.json')
            }).then(function(response){
                console.log('categoryShortName: ', categoryShortName);
                console.log('data: ', response.data.menu_items);
                return response.data.menu_items;
            });
        };
    };
})();