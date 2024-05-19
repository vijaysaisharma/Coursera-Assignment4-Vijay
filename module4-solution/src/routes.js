(function(){
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');
      
        // *** Set up UI states ***
        $stateProvider
      
        // Home page
        .state('home', {
          url: '/',
          templateUrl: '/src/menuapp/templates/home.template.html'
        })
        
        // Premade list page
        .state('categories', {
            url: '/menu-categories',
            templateUrl: 'src/menuapp/templates/menu-categories.template.html',
            controller: 'MenuCategoriesController as menuCategoriesCtrl',
            resolve: {
                menuCategories: ['MenuDataService', function (MenuDataService) {
                    console.log('inside resolve');
                    return MenuDataService.getAllCategories()
                        .then(function(response){
                            console.log('in then resolve');
                            return response;
                        });                    
                }]
            }
        });
    };

})();