angular.module( 'simpleApp', [
  'templates-app',
  'templates-common',
  'simpleApp.home',
  'simpleApp.about',
  'simpleApp.signup',
  'simpleApp.login',
  'simpleApp.newevent',
  'simpleApp.events',
  'simpleApp.userdetails',
  'simpleApp.userlist',
  'simpleApp.view1',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | simpleApp' ;
    }
  });
})

;

