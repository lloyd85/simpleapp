describe( 'User History Service', function() {

    var userDetails = {
        name: 'lloyd23',
        password: 'password'
    },
    userHistory,
    mockTickEvent;

    beforeEach( module( 'userHistory' ) ); // this initeatis the module we need for the $controller to have its reference

    beforeEach(inject(function( _userHistory_) {
        userHistory = _userHistory_;
        //userHistory.mockStorage();
        mockTickEvent = function (bool) {
            var sbool = bool;
            if(sbool) {
                userHistory.setObject('userDetails', 'lloyd');
            }
            else {
                userHistory.clear();
            }
        };
        spyOn(userHistory, 'setObject');
        spyOn(userHistory, 'clear');
    }));

    it( 'should save user details in sessionStorage', function() {
        mockTickEvent(true);
        expect( userHistory.setObject ).toHaveBeenCalled();
    });

    it( 'ensures user details are stored in sessionStorage', function() {
        mockTickEvent(true);
        expect( userHistory.get('userDetails') ).toBe(userDetails);
    });

   /* it( 'should retrieve details from sessionStorage', function($location) {
        expect( userHistory.sessionStorage.restore ).toBeCalled(userDetails.name);
        expect( userHistory.sessionStorage.restore ).toBeCalled(userDetails.password);
    });*/

    it( 'should clear details from sessionStorage', function() {
        mockTickEvent(false);
        expect( userHistory.clear).toHaveBeenCalled();
    });

    it( 'ensures no user details are stored in sessionStorage', function() {
        expect( userHistory.getSessionStorage() ).toEqual({});
    });
});
