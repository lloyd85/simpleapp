
angular.module( 'simpleApp.userdetails', [
  'ui.router',
  'plusOne'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'userdetails', {
    url: '/userdetails',
    views: {
      "main": {
        controller: 'UserDetailsCtrl',
        templateUrl: 'userdetails/userdetails.tpl.html'
      }
    },
    data:{ pageTitle: 'My Details' }
  });
})

.controller( 'UserDetailsCtrl', function UserDetailsCtrl( $scope ) {
})

;

