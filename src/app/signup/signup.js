
angular.module( 'ngBoilerplate.signup', [
  'ui.router',
  'plusOne'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'signup', {
    url: '/signup',
    views: {
      "main": {
        controller: 'SignUpCtrl',
        templateUrl: 'signup/signup.tpl.html'
      }
    },
    data:{ pageTitle: 'Sign up to this App' }
  });
})

.controller( 'SignUpCtrl', function SignUpCtrl( $scope ) {
})

;

