'use strict';

angular.module('myApp', [
  'lumx',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.component1'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
