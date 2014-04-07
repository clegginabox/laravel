module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

      // Task configuration
    less: {
        development: {
            options: {
              compress: true,  //minifying the result
            },
            files: {
              "./public/assets/stylesheets/base.css":"./app/assets/stylesheets/base.less",
            }
        }
    },
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './app/assets/javascript/core.js'
        ],
        dest: './public/assets/javascript/base.js',
      },
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      js: {
        files: {
          './public/assets/javascript/base.js': './public/assets/javascript/base.js',
        }
      },
    },
    watch: {
        js: {
          files: [
            //watched files
            './bower_components/jquery/dist/jquery.js',
            './bower_components/bootstrap/dist/js/bootstrap.js',
            './app/assets/javascript/core.js'
            ],
          tasks: ['concat:js','uglify:js'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        less: {
          files: ['./app/assets/stylesheets/*.less'],  //watched files
          tasks: ['less'],                          //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Task definition
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('init', ['less', 'concat', 'uglify']);

};