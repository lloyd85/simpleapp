'use strict';

describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Julie!');
    });
});

/* https://github.com/angular/protractor/blob/master/docs/toc.md

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  it("should display the correct title", function () {
    // in the video, I used the protractor.getInstance() which was removed shortly thereafter in favor of this browser approach
    expect(browser.getTitle()).toBe('My AngularJS App');
  });

  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

    it('should let me save what I have written', function() {
        element(by.model('user.name')).sendKeys("Lloyd");
        element(by.model('user.email')).sendKeys("kwame23@gmail.com");

        element.all(by.model('user.gender')).get(0).click();
        element(by.model('user.agree')).click()

            .then( function () {
                browser.sleep(2500);
                element(by.model('user.agreeSign')).sendKeys("Agreed upon");
            })
            .then(function () {
                browser.sleep(2500);
                expect(element(by.id('saveButton')).getAttribute('disabled')).toBeFalsy();
            });
    });

  });

  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });

    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });

});*/
