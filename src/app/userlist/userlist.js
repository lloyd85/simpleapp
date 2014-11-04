  'use strict';

  angular.module( 'simpleApp.userlist', [
    'ui.router',
    'ui.bootstrap'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'userlist', {
      url: '/userlist',
      views: {
        "main": {
          controller: 'UserListCtrl',
          templateUrl: '/userlist.tpl.html'
        }
      },
      data:{ pageTitle: 'List of Users' }
    });
  })

  .controller('UserListCtrl', ['$scope', 'dataService' , function ($scope, dataService ) {
    var promise = dataService.getUsers();
    $scope.users = {};

    promise.then(function (data) {
      $scope.users = data;
    });
  }]);