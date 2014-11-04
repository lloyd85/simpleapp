
angular.module( 'simpleApp.events', [
  'ui.router',
  'plusOne'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'events', {
    url: '/events',
    views: {
      "main": {
        controller: 'EventsCtrl',
        templateUrl: 'events/events.tpl.html'
      }
    },
    data:{ pageTitle: 'My Events' }
  });
})

.controller( 'EventsCtrl', function UserDetailsCtrl( $scope ) {
})

;

