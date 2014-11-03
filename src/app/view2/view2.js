'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html'
  });
}])

.controller('View2Ctrl', ['$scope', 'dataService' , function($scope, dataService ) {
  var promise = dataService.getUsers();
  $scope.users = {};

  promise.then(function (data) {
    $scope.users = data;
  });
}]);