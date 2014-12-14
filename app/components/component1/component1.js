'use strict';

(function() {

	function myComponent1() {
		return {
	        restrict : 'EA',
	        templateUrl : 'components/component1/component1.html',
	        replace: true,
	        controller : function($scope) {
	            $scope.textExample = 'This is my component 1';
	        }
	    };
	}

	angular.module('myApp.components.myComponent1')
		.directive('myComponent1', myComponent1);

})();



