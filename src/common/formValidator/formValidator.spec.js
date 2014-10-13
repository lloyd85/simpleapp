describe('Form Validation Service', function () {
    var username = 'lloyd85',
        usernameTooShort = 'lloyd',
        phone = '020 30404 4040',
        email = 'kesm@gsa.com',
        formValidator;

    beforeEach(module('formValidator')); // loads necessary module
    beforeEach(inject(function(_formValidator_){ // injects service in each test block
        formValidator = _formValidator_;
    }));

    it('ensures that login name is at least 6 letters long and has one number', function () {
       expect(formValidator.validateUsername(username).toBeTruthy );
    });

    it('should return false as username is not long enough', function () {
        expect(formValidator.validateUsername(usernameTooShort).toBeFalsy );
    });

    it('ensures right format for telephone number', function () {
        expect(formValidator.validatePhone(phone).toBeTruthy );
    });

    it('ensures right format for telephone number', function () {
        expect(formValidator.validateEmail(email).toBeTruthy );
    });
});