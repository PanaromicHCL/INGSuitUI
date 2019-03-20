angular.module('myApp.productDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/productDetails', {
    templateUrl: 'productDetails/productDetails.html',
    controller: 'productDetailsCtrl'
  });
}])

.controller('productDetailsCtrl', function($scope, $http) {

});