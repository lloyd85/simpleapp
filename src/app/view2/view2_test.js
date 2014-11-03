'use strict';

describe('myApp.view2 module', function() {

  var scope,
      $rootScope,
      mockedFactory,
      view2Ctrl;

  beforeEach(module('myApp.view2', function($provide) {
    mockedFactory = {
      save: jasmine.createSpy()
    };
    $provide.value('dataService', mockedFactory);
  }));

  beforeEach(inject(function(_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    view2Ctrl = _$controller_;

    scope = $rootScope.$new();
  }));

  it('should ... .', function() {
    expect(view2Ctrl).toBeDefined();
  });

});