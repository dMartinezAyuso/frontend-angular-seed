// point of interest for the test:
//  - verify the routes configurations

describe("unit testing route", function() {

  describe("/view1", function() {
    it('should exists, and should be properly configured', function() {
      var $route;
      module('myApp.views');
      inject(['$route', function(_$route_) {
        $route = _$route_;
      }]);
      expect($route.routes['/view1']).not.toBeUndefined();
      expect($route.routes['/view1'].controller).toBe('View1Ctrl');
      expect($route.routes['/view1'].templateUrl).toBe('views/view1/view1.html');
    });
  });

  describe("/view2", function() {
    it('should exists, and should be properly configured', function() {
      var $route;
      module('myApp.views');
      inject(['$route', function(_$route_) {
        $route = _$route_;
      }]);
      expect($route.routes['/view2']).not.toBeUndefined();
      expect($route.routes['/view2'].controller).toBe('View2Ctrl');
      expect($route.routes['/view2'].templateUrl).toBe('views/view2/view2.html');
    });
  });

});