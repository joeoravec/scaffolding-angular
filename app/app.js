// MAIN APP MODULE

(function (angular) {
    'use strict';

    var app = angular.module('myApp', [
        'myApp.common.ajax',
        'myApp.common.services',
        'myApp.common.filters',
        'myApp.common.directives',
        'myApp.common.models',

        'myApp.app.appController',

        'myApp.app.home.homeController',
        'ui.router'
    ]);

    var ctrl = angular.module('myApp.app.appController', []);

    // MAIN ASSET MANAGER CONTROLLERS
    ctrl.controller('AppController', ['$scope', 'myApp.common.models', function ($scope, models) {

        var init = function () {
            $scope.initialized = true;
            var mod1 = new models.ModelOne();

            console.log(mod1);
        };

        // Initialize....
        init();

    }]);

})(angular);