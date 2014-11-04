angular.module( 'simpleApp.login', [
  'ui.router',
  'plusOne',
  'formValidator'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'LoginCtrl', ['$scope', '$window', '$location', 'dataService', function LoginCtrl( $scope, $window, $location, dataService) {
  var promise = dataService.getUsers();
  $scope.name = 'login';
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.isLoggedIn = null;
  $scope.login = function (credentials) {
    promise.then(function (data) {
      $scope.validateUser(data);
    });
  };

  $scope.validateUser = function (users) {
    angular.forEach(users, function (user) {
      if(user.username == $scope.credentials.username && user.password == $scope.credentials.password) {
        $window.location = '/#/welcome';
        $scope.isLoggedIn = true;
      }
      else {
        $scope.isLoggedIn = false;
      }
    });
  };

}]);

