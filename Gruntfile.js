module.exports = function(grunt) {

  // 任务配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      //target
      // 编译
      build: {
        options: {
          paths: ['sass/'],
          yuicompress: true
        },
        files: {
          'html/style/app.css': ['sass/main.scss']
        }
        // files: [
        //     {
        //         expand: true,
        //         cwd: 'sass/',
        //         src: ['*.scss'],
        //         dest: 'html/style/',
        //         ext: '.css'
        //     }
        // ]
      }
    },
    watch: {
      scripts: {
        files: ['sass/*.scss'],
        tasks: ['sass' ]
      }
    }
  });

  // 任务加载

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 自定义任务
  grunt.registerTask('all-dev', ['sass']);

};