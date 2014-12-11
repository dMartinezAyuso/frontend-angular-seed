var LIVERELOAD_PORT = 35729;
var SERVER_CONNECT_PORT = 9000;

var SEPARATOR_TYPE = ';';

var JSHINT_CONFIG_FILE_NAME = '.jshintrc';
var NODE_CONFIG_FILE_NAME = 'package.json';

var SRC_BUILD = 'build';
var SRC_SASS_COMPONENTS = 'app/components/**/*.scss';
var SRC_SASS_FOLDERS_CSS = 'app/assets/css';
var SRC_SASS_FOLDERS_SCSS = 'app/assets/scss';
var SRC_SASS_SCSS = 'app/assets/scss/**/*.scss';
var SRC_HTML_COMPONENTS_FILES = 'app/components/**/*.html';
var SRC_HTML_INDEX_FILE = 'app/index.html';
var SRC_HTML_VIEWS_FILES = 'app/views/**/*.html';
var SRC_JS_APP = 'app/app.js';
var SRC_JS_BUILT_BUNDLE = 'app/bundles/built.js';
var SRC_JS_COMPONENTS_FILES = 'app/components/**/*.js';
var SRC_JS_MOCKSERVER_FILES = 'app/mock_server/**/*.js';
var SRC_JS_VENDOR_ANGULAR = 'app/bower_components/angular/angular.js';
var SRC_JS_VENDOR_ANGULAR_MIN = 'app/bower_components/angular/angular.min.js';
var SRC_JS_VENDOR_ANGULAR_ROUTE = 'app/bower_components/angular-route/angular-route.js';
var SRC_JS_VENDOR_ANGULAR_ROUTE_MIN = 'app/bower_components/angular-route/angular-route.min.js';
var SRC_JS_VENDOR_BUNDLE = 'app/bundles/vendor.js';
var SRC_JS_VENDOR_JQUERY = 'app/bower_components/jquery/dist/jquery.js';
var SRC_JS_VENDOR_JQUERY_MIN = 'app/bower_components/jquery/dist/jquery.min.js';
var SRC_JS_VENDOR_JQUERY_TRANSIT = 'app/bower_components/jquery.transit/jquery.transit.js';
var SRC_JS_VENDOR_LUMX = 'app/bower_components/lumx/dist/js/lumx.js';
var SRC_JS_VENDOR_LUMX_MIN = 'app/bower_components/lumx/dist/js/lumx.min.js';
var SRC_JS_VENDOR_VELOCITY = 'app/bower_components/velocity/velocity.js';
var SRC_JS_VENDOR_VELOCITY_MIN = 'app/bower_components/velocity/velocity.min.js';
var SRC_JS_VIEWS_FILES = 'app/views/**/*.js';

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON(NODE_CONFIG_FILE_NAME),
        concurrent: {
            tasks: ['shell', 'watch'],
            options: {
                limit: 5,
                logConcurrentOutput: true
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: SRC_SASS_FOLDERS_SCSS,
                    cssDir: SRC_SASS_FOLDERS_CSS,
                    environment: 'development',
                    outputStyle: 'expanded',
                    noLineComments: true
                }
            },
            prod: {
                options: {
                    sassDir: SRC_SASS_FOLDERS_SCSS,
                    cssDir: SRC_SASS_FOLDERS_CSS,
                    environment: 'production',
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            }
        },
        concat: {
            options: {
                separator: SEPARATOR_TYPE
            },
            dev: {
                src: [
                    SRC_JS_VIEWS_FILES,
                    SRC_JS_COMPONENTS_FILES,
                    SRC_JS_APP
                ],
                dest: SRC_JS_BUILT_BUNDLE
            },
            vendor: {
                src: [
                    SRC_JS_VENDOR_ANGULAR,
                    SRC_JS_VENDOR_ANGULAR_ROUTE,
                    SRC_JS_VENDOR_JQUERY,
                    SRC_JS_VENDOR_JQUERY_TRANSIT,
                    SRC_JS_VENDOR_LUMX,
                    SRC_JS_VENDOR_VELOCITY
                ],
                dest: SRC_JS_VENDOR_BUNDLE
            },
            prod: {
                src: [
                    SRC_JS_VIEWS_FILES,
                    SRC_JS_COMPONENTS_FILES,
                    SRC_JS_APP
                ],
                dest: SRC_JS_BUILT_BUNDLE
            },
            vendor_prod: {
                src: [
                    SRC_JS_VENDOR_ANGULAR_MIN,
                    SRC_JS_VENDOR_ANGULAR_ROUTE_MIN,
                    SRC_JS_VENDOR_JQUERY_MIN,
                    SRC_JS_VENDOR_JQUERY_TRANSIT,
                    SRC_JS_VENDOR_LUMX_MIN,
                    SRC_JS_VENDOR_VELOCITY_MIN
                ],
                dest: SRC_JS_VENDOR_BUNDLE
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    base: 'app',
                    port: 9000
                }
            }
        },
        jshint: {
            options: {
                jshintrc: JSHINT_CONFIG_FILE_NAME
            },
            all: [
                SRC_JS_COMPONENTS_FILES,
                SRC_JS_VIEWS_FILES,
                SRC_JS_APP,
                SRC_JS_MOCKSERVER_FILES
            ]
        },
        open: {
            dev: {
                path: 'http://localhost:<%= connect.server.options.port %>' //la direccion que abriremos
            }
        },
        shell: {
            options: {
                stderr: false
            },
            target: {
                command: 'dyson mock_server'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            files: {
                'build/<%= pkg.name %>.min.js': ['<%= concat.prod.dest %>','<%= concat.vendor_prod.dest %>']
            }
            /*build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            } */
        },
        watch: {
            compass: {
                files: [SRC_SASS_SCSS, SRC_SASS_COMPONENTS],
                tasks: ['compass:dev'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: [SRC_HTML_INDEX_FILE, SRC_HTML_VIEWS_FILES, SRC_HTML_COMPONENTS_FILES],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    SRC_JS_APP,
                    SRC_JS_COMPONENTS_FILES,
                    SRC_JS_VIEWS_FILES
                ],
                tasks: ['concat:dev'], /*'uglify'*/
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load the plugin that provides the tasks.
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-shell');

    // Default task(s).
    grunt.registerTask('default', 'watch');
    grunt.registerTask('server', ['jshint','compass:dev','concat:vendor','concat:dev','open:dev','connect:server','concurrent']);
    grunt.registerTask('hint', 'jshint');
    grunt.registerTask('build', ['jshint','concat:vendor_prod','concat:prod','uglify']);
};
