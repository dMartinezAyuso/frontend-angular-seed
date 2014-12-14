'use strict';
(function() {
	
	function View1Ctrl($scope) {
		$scope.message = 'This is the partial for view 1.';
	}

	angular.module('myApp.views.view1')
		.controller('View1Ctrl', View1Ctrl);
})();
