angular.module('myApp.monitoring', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/monitoring', {
    templateUrl: 'monitoring/monitoring.html',
    controller: 'monitoringCtrl'
  });
}])

.controller('monitoringCtrl', function($scope, $http) {

});