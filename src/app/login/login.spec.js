
describe( 'login page', function() {
    var userDetails =
    {
        username: 'lloyd23',
        email: 'password'
    },
    remoteUserDetails = {
        users: [
            {
                username: 'admin@admin.com',
                password: 'admin'
            },
            {
                username: 'lloyd23',
                password: 'password'
            }
        ]
    },
    scope,
    path = '/welcome';

    beforeEach( module( 'simpleApp.login')); // this initeatis the module we need for the $controller to have its reference

    beforeEach(inject(function($controller, $rootScope, $location) {
        scope = $rootScope.$new ();
        scope.credentials = userDetails;

        scope.validateUser(remoteUserDetails);

        /*var deferred = $q.defer();
        deferred.resolve(remoteUserDetails); //  always resolved, you can do it from your spec

        spyOn(dataService, 'getUsers').andReturn(deferred.promise);*/

        spyOn($location, 'path').andReturn(path);

        $controller('LoginCtrl', {
            $scope: scope
        });
    }));

    it( 'should iniatise scope', function() {
        expect( scope.name ).toEqual('login');
    });

    it( 'ensures path has changed', function() {
        expect( scope.isLoggedIn ).toBeTruthy();
    });
});