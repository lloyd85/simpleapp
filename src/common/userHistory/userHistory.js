/**
 * Created by Lloyd on 11/10/2014.
 */

angular.module('userHistory', [])
.service('userHistory', ['$window', function ($window) {
        var sessionStorage = {};
//        var sessionStorage =  $window.localStorage;

        this.mockStorage = function () {
            sessionStorage = { BOOL: 'YYY'};
        };
        this.getSessionStorage = function () {
              return sessionStorage;
        };
        this.set =  function (key, value) {
            sessionStorage[key] = value;
        };
        this.get = function (key, defaultValue) {
            return sessionStorage[key] || defaultValue;
        };
        this.setObject = function (key, value) {
            sessionStorage[key] = value;
//            sessionStorage[key] = JSON.stringify(value);
        };
        this.getObject = function (key) {
            //return JSON.parse(sessionStorage[key] || '{}');
            return sessionStorage[key];
        };
        this.clear = function () {
            if(sessionStorage != $window.localStorage) {
                sessionStorage = {};
            }
            else {
                sessionStorage.clear();
            }
        };
    }]);