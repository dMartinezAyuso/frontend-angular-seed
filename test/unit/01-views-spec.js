// point of interest for the test:

describe("unit test controller", function() {

  describe("ViewsControllers", function() {
    
    var scope, ctrl; 

    beforeEach(module('myApp.views'));

    beforeEach(inject(['$controller', function($controller) {
      scope = {};      
      ctrl = $controller('View1Ctrl', { $scope: scope });
    }]));

    it('should not be null', function() {
      expect(ctrl).not.toEqual(null);
    });         

  });

});