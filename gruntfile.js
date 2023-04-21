module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        dist:{
          files: {
            'dist/js/main.min.js': ['src/js/main.js']
          }
        }
      },
      sass: {
        dist: {
          options: {
            sourcemap: false,
            style: 'expanded',
          },
          files: {
            'dist/css/style.css' : 'src/sass/style.scss'
          }
        },
      },
      watch: {
        css: {
          files: ['src/sass/*.scss', 'src/sass/*/*/*.scss'],
          tasks: ['sass']
        },
        js: {
          files: ['src/js/*.js', 'src/js/*/*.js'],
          tasks: ['uglify']
        }
      },
      cssmin: {
        css: {
            src: 'dist/css/style.css',
            dest: 'dist/css/style.min.css'
        }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'dist/css/*.css',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['uglify', 'browserSync', 'watch']);
  }