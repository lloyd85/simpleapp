angular.module( 'ngBoilerplate.welcome', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'welcome', {
    url: '/welcome',
    views: {
      "main": {
        controller: 'WelcomeCtrl',
        templateUrl: 'welcome/welcome.tpl.html'
      }
    },
    data:{ pageTitle: 'Welcome to the new app!' }
  });
})

.controller( 'WelcomeCtrl', function WelcomeCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "Good",
    "Better",
    "The Best"
  ];
})

;
