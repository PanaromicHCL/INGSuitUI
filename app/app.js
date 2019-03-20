'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.overview',
  'myApp.productDetails',
  'myApp.monitoring'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.otherwise({redirectTo: '/overview'});
}]).
controller('mainCtrl', function($scope, $window){
  $scope.scrollTop = function() {
    console.log("Process");
    $window.scrollTo(0, 0);
  }
});
