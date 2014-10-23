/**
 * Created by Lloyd on 10/10/2014.
 */
angular.module('formValidator', [])
    .service('formValidator', function () {

        function testInputValue (regEx, inputValue) {
            var pattern = regEx;
            return pattern.test(inputValue);
        }

        this.usernameConfig = {
            minLength: 4,
            maxLength: 10,
            hasNum: true,
            hasCaps: false,
            hasSpecChar:false
        };

        this.validateUsername = function (userName) {
            var config = this.usernameConfig,
                strLength = userName.length,
                isValid = false,
                userNamePattern,
                regExString = 'a-z';

            if (strLength < config.maxLength && strLength > config.minLength) {

                if (config.hasCaps) {
                    regExString+= 'A-Z';
                }

                if (config.hasSpecChar) {
                    regExString+= '^A-Za-z0-9_';
                }

                if (config.hasNum) {
                    regExString+= '0-9';
                }
                userNamePattern = new RegExp('[' + regExString + ']');
                isValid = testInputValue(userNamePattern, userName);

                return isValid;
            }
        };

        this.validateEmail = function (email) {
            var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                result = testInputValue(emailPattern, email);
            return result;
        };
        this.validatePhone = function (phone) {
            var phonePattern = /(00\d+\s*|\+\d+\s*|0\s*)(\d+\s*)*(\/)\s*(\d+\s*)*/g,
                result = testInputValue(phonePattern, phone);
            return result;
        };
        // Can this be done better?

    });
