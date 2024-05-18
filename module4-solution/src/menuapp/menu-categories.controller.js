(function () {
    'use strict';
    
    angular.module('data')
    .controller('MenuCategoriesController', MenuCategoriesController);
    
    
    MenuCategoriesController.$inject = ['menuCategories'];
    function MainShoppingListController(menuCategories) {
      var menuCategoriesCtrl = this; 
      menuCategoriesCtrl.menuCategories = menuCategories;
    };
    
})();