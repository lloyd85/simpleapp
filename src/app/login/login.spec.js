
describe( 'login page', function() {
    var userDetails =
    {
        username: 'lloyd23',
        password: 'password'
    },
    remoteUserDetails = [
        {
            username: 'admin@admin.com',
            password: 'admin'
        },
        {
            username: 'lloyd23',
            password: 'password'
        },
        {
            username: '',
            password: ''
        }
    ],
    $scope,
    mockWindow = {
        location: ''
    },
    dataService,

    path = '/welcome';

    beforeEach( module( 'dataService'));
    beforeEach( module( 'simpleApp.login'));

    beforeEach(inject(function($rootScope, $controller, _dataService_) {
        $scope = $rootScope.$new();
        dataService = _dataService_;

        $controller('LoginCtrl', {
            $scope: $scope,
            dataService: dataService,
            $window: mockWindow
        });
    }));

    it( 'should initialise $scope', function() {
        expect( $scope.name ).toBe('login');
    });

    it( 'should be lloyd23', function() {
        $scope.credentials = userDetails;
        expect( $scope.credentials.username ).toBe('lloyd23');
        expect( $scope.credentials.password ).toBe('password');
    });

    it( 'ensures path has changed', function() {
        $scope.validateUser(remoteUserDetails);
        expect( $scope.isLoggedIn ).toBeTruthy();
    });

});