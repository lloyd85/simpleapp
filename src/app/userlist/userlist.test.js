'use strict';

describe('simpleApp.userlist module', function() {

  var scope,
      $rootScope,
      mockedFactory,
      UserListCtrl;

  beforeEach(module('simpleApp.userlist', function($provide) {
    mockedFactory = {
      save: jasmine.createSpy()
    };
    $provide.value('dataService', mockedFactory);
  }));

  beforeEach(inject(function(_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    UserListCtrl = _$controller_;

    scope = $rootScope.$new();
  }));

  it('should ... .', function() {
    expect(UserListCtrl).toBeDefined();
  });

});