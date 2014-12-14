// point of interest for the test:
//  - verify that filters exists

describe("unit test filters", function() {

  describe("myFilter1", function() {

    var $filter;
    
    beforeEach(module('myApp.filters'));

    beforeEach(inject(['$filter', function(_$filter_) {
      $filter = _$filter_;
    }]));    

    it('should exists', function() {
      expect($filter('myFilter1')).not.toEqual(null);
    });
  });

});