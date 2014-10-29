module.exports = function(grunt) {

  // 任务配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/jpage.js',
        dest: 'build/jpage-min.js'
      }
    },
    // lesslint: {
    //    // target
    //    lessFiles:  {
    //       src: ['less/*.less']
    //    }
    // },
    // less: {
    //   //target
    //   // 编译
    //   build: {
    //     options: {
    //       paths: ['less/'],
    //       yuicompress: true
    //     },
    //     files: {
    //       'css/main.css': ['less/*.less']
    //     }
    //     // files: [
    //     //     {
    //     //         expand: true,
    //     //         cwd: 'html/src/less/',
    //     //         src: ['*.less'],
    //     //         dest: 'html/css/',
    //     //         ext: '.css'
    //     //     }
    //     // ]
    //   }
    // },
    sass: {
      //target
      // 编译
      build: {
        options: {
          paths: ['sass/'],
          yuicompress: true
        },
        files: {
          'html/style/shake.css': ['sass/main.scss']
        }
        // files: [
        //     {
        //         expand: true,
        //         cwd: 'html/src/less/',
        //         src: ['*.less'],
        //         dest: 'html/css/',
        //         ext: '.css'
        //     }
        // ]
      }
    },
     imagemin: {
      dynamic: {
          options: {
              optimizationLevel: 3
          },
          files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.*{png,jpg,png}'],
            dest: 'html/images/'
          }]
      }
    },
    // cssmin: {
    //      // minify
    //      combine: {
    //         options: {
    //            report: 'gzip'
    //         }, 
    //         files: {
    //             'css/style.min.css': ['css/*.css', 'css/*.min.css']
    //         }
    //         // files: [
    //         //   {
    //         //      expand: true,
    //         //      cwd: 'html/css/',
    //         //      src: ['*.css', '!*.min.css'],
    //         //      dest: 'html/css/',
    //         //      ext: '.min.css'
    //         //   }
    //         // ] 
    //      }
    // },
    watch: {
      scripts: {
        files: ['sass/*.scss'],
        tasks: ['sass' ]
      }
    }
  });

  // 任务加载
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-sass');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 自定义任务
  grunt.registerTask('all-dev', ['clean','sass','lesslint','less', 'cssmin', 'jshint','uglify','imagemin','includereplace']);

};