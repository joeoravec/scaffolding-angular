/**
 * models.myApp
 *
 */

(function(angular) {
    'use strict';

    var models = angular.module('myApp.common.models', ['lib.models.ModelOne', 'lib.models.ModelTwo']);

    models.factory('myApp.common.models', ['lib.models.ModelOne', 'lib.models.ModelTwo', function (ModelOne, ModelTwo) {
        var models = {};

        models.ModelOne = ModelOne;
        models.ModelTwo = ModelTwo;

        return models;
    }]);

})(angular);