describe('Data Managing Service', function () {
    var mockData = {

    }

    beforeEach(module('dataService'));
    beforeEach(inject(function(_dataService_){
        dataService = _dataService_;
    }));

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
    });

});