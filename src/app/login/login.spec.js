
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
    $scope,
        $window,
        $location,
    dataService,

    path = '/welcome';

    beforeEach( module( 'dataService'));
    beforeEach( module( 'simpleApp.login'));


    beforeEach(inject(function($rootScope, $window, $location, $controller, _dataService_) {
        $scope = $rootScope.$new();
        dataService = _dataService_;
        $window = $window;
        $location = $location;
        $scope.credentials = userDetails;

        $scope.validateUser(remoteUserDetails);

        $controller('LoginCtrl', {
            $scope: $scope,
            dataService: _dataService_,
            $window: $window,
            $location: $location
        });
    }));

    it( 'should initialise $scope', function() {
        expect( $scope.name ).toBe('login');
    });

    it( 'ensures path has changed', function() {
      expect( $scope.isLoggedIn ).toBeTruthy();
    });
});