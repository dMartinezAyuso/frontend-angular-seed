'use strict';

angular.module('myApp.components',[])

.directive('myComponent1', function() {
    return {
        restrict : 'EA',
        templateUrl : 'components/component1/component1.html',
        replace: true,
        controller : function($scope) {
            $scope.textExample = 'This is my component 1';
        }
    };
});
