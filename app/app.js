'use strict';

angular.module('myApp', [
  'lumx',
  'ngRoute',
  'myApp.views',
  'myApp.components',
  'myApp.filters'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
