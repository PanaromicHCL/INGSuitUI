angular.module('myApp.overview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'overview/overview.html',
    controller: 'overviewCtrl'
  });
}])

.controller('overviewCtrl', function($scope, $http) {
    $scope.productGroupList = products;
    console.log("Products List:" + $scope.productGroupList);
    //     // $http.get("http://10.117.189.212:8081/ISmart/api/makeTransaction" + paymentObject)
    //     // .then(function(response) {
    //     //     // console.log(JSON.stringify(response.data.textualDescription));
    //     //    // $scope.polDetails = response.data;
    //     //    alert("Data has been submitted successfully:" + response);
    //     // });

    //     // $http.post("http://13.234.59.233:8085/ISmart/api/makeTransaction", paymentObject)
    //     // .then(function (response) {
    //     //     alert("Data has been submitted successfully:" + JSON.stringify(response));
    //     // });
    // }

    $scope.selectedProduct = function($event) {
      console.log("Selected Product:" + $event.target.id);
    }
});