'use strict';

angular.module('myApp')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
    .when('/view1', {
    	templateUrl: 'views/view1/view1.html',
    	controller: 'View1Ctrl'
  	})
    .when('/view2', {
    	templateUrl: 'views/view2/view2.html',
    	controller: 'View2Ctrl'
  	})
    .otherwise({redirectTo: '/view1'});
}]);

/*(function() {

    function config($routeProvider) {
        $routeProvider
            .when('/view1', {
               templateUrl: 'views/view1/view1.html',
               controller: 'View1Ctrl'
            })
            .when('/view2', {
               templateUrl: 'views/view2/view2.html',
               controller: 'View2Ctrl'
            })
            .otherwise({redirectTo: '/view1'});
    }

    angular.module('myApp')
        .config('config', config);    
        
})();*/