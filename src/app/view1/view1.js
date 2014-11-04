angular.module( 'simpleApp.view1', [
    'ui.router',
    'ui.bootstrap'
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'view1', {
        url: '/view1',
        views: {
            "main": {
                controller: 'View1Ctrl',
                templateUrl: '/view1.tpl.html'
            }
        },
        data:{ pageTitle: 'List of Users' }
    });
})

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(user) {
      return angular.equals(user, $scope.master);
    };

    $scope.reset();
}]);
