'use strict'
describe('Form Validation Directive', function () {
    var scope,
        username = 'lloyd85',
        phone = '020 30404 4040',
        email = 'kesm@gsa.com';

    beforeEach(module('formValidator'));

    beforeEach(inject( function($controller, $rootScope ) {
        scope = $rootScope.$new();
        scope.usernameConfig = {
          minLength: 4,
          maxLength: 10,
          hasNum: true,
          hasCaps: false,
          hasSpecChar:false
        };
        $controller(function () {
            $scope: scope
        });
    }));

    it('ensures that login name is at least 6 letters long and has one number', function () {
       expect(scope.validateUsername(username).toBeTruthy );
    });

    it('ensures right format for telephone number', function () {
        expect(scope.validatePhone(phone).toBeTruthy );
    });

    it('ensures right format for telephone number', function () {
        expect(scope.validateEmail(email).toBeTruthy );
    });
});