(function (angular) {
    'use strict';

    var service = angular.module('myApp.common.ajax', []);

	service.factory('ajax.App', ['$http', function($http) {
		return {
			get : function(url) {
				return $http.get(url);
			},
            post: function(url, data) {
                return $http.post(url, data);
            }
		};
	}]);

})(angular);