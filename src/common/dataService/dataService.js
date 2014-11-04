'use strict';

angular.module('dataService', [])

    .factory('dataService', ['$http', '$q', function($http, $q) {
        var fileService = {};

        fileService.getUsers = function() {
            var defer = $q.defer();

            $http
                .get("http://localhost:9000/app/data.json") // making http get request to load the json file
                .then(function(response) {
                    defer.resolve(response.data.users);
                });

                return defer.promise;
            };

            /* this.getUser = function (id) {
                var defer = $q.defer();

                $http
                    .get("productDetails.json")
                    .then(function (response) {
                        defer.resolve(response.data);
                    });

                return defer.promise;
            };*/

        return fileService;
    }]);
