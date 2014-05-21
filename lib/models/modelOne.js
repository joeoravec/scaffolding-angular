

(function(angular) {
    'use strict';

    var modelName = 'ModelOne';
    var nsModelName = 'lib.models.' + modelName;
    var di = [];
    var definition = function() {
        // model definition
        function ModelOne() {
            this.id		= 0;
            this.name	= '';
        }

        ModelOne.prototype.modelOneFunction = function () {
            // model function
        };

        return ModelOne;
    };

    angular.module(nsModelName, di).
    factory(nsModelName, di.concat(definition));

})(angular);