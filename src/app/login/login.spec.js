describe( 'login page', function() {
  
	var username = 'lloyd23',
		email = 'lloyd.ntim@me.com',
        scope,
		path = '/welcome';

    beforeEach( module( 'formValidator' ) );
	beforeEach( module( 'ngBoilerplate.login' ) ); // this initeatis the module we need for the $controller to have its reference

	beforeEach(inject(function($controller, $rootScope, $location) {
        scope = $rootScope.$new ();
        spyOn($location, 'path').andReturn(path);
        $controller('LoginCtrl', {
            $scope: scope
        });
    }));

    it( 'should iniatise scope', function($location) {
        expect( scope.name ).toEqual('login');
    });

	it( 'ensures path has changed', function($location) {
        expect( scope.path ).toEqual(path);
    });
});

