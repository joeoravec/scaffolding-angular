

(function(angular) {
    'use strict';

    var modelName = 'ModelTwo';
    var nsModelName = 'lib.models.' + modelName;
    var di = [];
    var definition = function() {
        // model definition
        function ModelTwo() {
            this.id		= 0;
            this.name	= '';
        }

        ModelTwo.prototype.modelTwoFunction = function () {
            // model function
        };

        return ModelTwo;
    };

    angular.module(nsModelName, di).
    factory(nsModelName, di.concat(definition));

})(angular);