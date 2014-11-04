
describe('Data Managing Service', function () {
    var mockData = {
            users: {
                username: 'lloyd.ntim',
                password: 'password'
            }
        },
        $rootScope,
        dataService;

    beforeEach(module('dataService'));
    beforeEach(inject(function(_$rootScope_, $q, _dataService_) {
        $rootScope = _$rootScope_,
        dataService = _dataService_;

        var deferred = $q.defer();
        deferred.resolve(mockData); //  always resolved, you can do it from your spec

        spyOn(dataService, 'getUsers').andReturn(deferred.promise);
    }));

    it ('should test receive the fulfilled promise', function() {
        var result;

        dataService.getUsers().then(function(returnFromPromise) {
            result = returnFromPromise;
        });

        $rootScope.$apply(); // promises are resolved/dispatched only on next $digest cycle
        expect(result.users.username).toBe('lloyd.ntim');
    });
/*
    it('ensures call to userdata  has been made', function () {
       expect(dataService.user.getData().toHaveBeenCalled());
    });

    it('ensures call to userdata  for all events has been made', function () {
        expect(dataService.events.get().toHaveBeenCalled());
    });

    it('ensures call to userdata  for all events has been made', function () {
        expect(dataService.events.get(eventID).toHaveBeenCalled());
    });

    it('ensures call to userdata  for all events has been made', function () {
        expect(dataService.events.change(eventID).toHaveBeenCalled());
    });

    it('ensures call to userdata  for all events has been made', function () {
        expect(dataService.delete(eventID).toHaveBeenCalled());
    });*/
});