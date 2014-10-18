
angular.module( 'ngBoilerplate.newevent', [
  'ui.router',
  'plusOne'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'newevent', {
    url: '/newevent',
    views: {
      "main": {
        controller: 'NewEventCtrl',
        templateUrl: 'newevent/newevent.tpl.html'
      }
    },
    data:{ pageTitle: 'Sign up to this App' }
  });
})

.controller( 'NewEventCtrl', function SignUpCtrl( $scope ) {
})

;

