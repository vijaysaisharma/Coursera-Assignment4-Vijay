(function(){
    'use strict';

    angular.module('data')
        .component('categories', {
        templateUrl: 'src/menuapp/templates/menu-categories-template.html',
        bindings: {
            menuCategories: '<'
        }
    });
})();