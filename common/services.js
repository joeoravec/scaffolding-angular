//SERVICES MODULE

(function (angular) {
    'use strict';

    var services = angular.module('myApp.common.services', []);

    services.service('MyConfig', [function () {
        this.config = {
           appSettings: {desc: 'some app', type: 'an angularjs app', title: 'AngularJS Application'}
        };
    }]);

    services.factory('MyService', ['$http', function($http) {
		var myService = {
			serviceFunction: function () {
                // function definition
            }
		};

		return {
			serviceFunction: myService.serviceFunction
		};
	}]);

})(angular);