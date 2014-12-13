module.exports = function(config){
  config.set({

    autoWatch : false,

    basePath : '../',

    browsers : [
        'Chrome',
        'Firefox'
    ],

    colors : true,

    coverageReporter: {
        type : 'html',
        dir : 'test/unit-results/coverage',
        file : 'coverage.html'
    },

    files : [
        //angularJs
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-mocks/angular-mocks.js',

        //app 
        'app/app.js',
        'app/components/**/*.js',
        'app/filters/**/*.js',
        'app/view*/**/*.js',        
        'test/unit/**/*.js'
    ],    

    frameworks: [
        'jasmine'
    ],

    htmlReporter: {
        outputDir: 'test/unit-results/html'
    },

    junitReporter : {
      outputFile: 'test/unit-result/xml/junit-results.xml',
      suite: 'unit'
    },

    logLevel : 'info',

    plugins : [
        'karma-chrome-launcher',
        'karma-coverage',
        'karma-firefox-launcher',
        'karma-html-reporter',
        'karma-jasmine',
        'karma-junit-reporter',
        'karma-phantomjs-launcher'
    ],

    preprocessors: [
        'app/app.js',
        'app/components/**/*.js',
        'app/filters/**/*.js',
        'app/view*/**/*.js',        
        'test/unit/**/*.js'
    ],

    reporters: [
        'progress', 
        'junit', 
        'html', 
        'coverage'
    ],

    singleRun : true

  });
};
