// point of interest for the test:
//  - verify that the module exists
//  - verify that module's dependencies are set properly

describe("unit test module", function() {

  describe("myApp", function() {

    var module, deps;
    var hasModule = function(m) {
      return deps.indexOf(m) >= 0;
    };

    beforeEach(function() {
      module = angular.module("myApp");
      deps = module.value('myApp').requires;
    });

    it("should be registered", function() {
      expect(module).not.toEqual(null);
    });

    it("should have ngRoute as a dependency", function() {
      expect(hasModule('ngRoute')).toEqual(true);
    });

    it("should have lumx as a dependency", function() {
      expect(hasModule('lumx')).toEqual(true);
    });

    it("should have myApp.views as a dependency", function() {
      expect(hasModule('myApp.views')).toEqual(true);
    });

    it("should have myApp.filters as a dependency", function() {
      expect(hasModule('myApp.filters')).toEqual(true);
    });

    it("should have myApp.components as a dependency", function() {
      expect(hasModule('myApp.components')).toEqual(true);
    });

  });

});