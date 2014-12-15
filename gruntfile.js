module.exports = function(grunt) {
  // 'use strict';

  // 配置任务和插件
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // 编译 stylus
    stylus: {
      compile: {
        options: {
          compress: false,
          // 指定要扫描的目录（针对 @import 内的路径）
          paths: ['css'],
          // use embedurl('test.png') in our code to trigger Data URI embedding
          // 指定将图片路径转成 base64 数据的函数
          urlfunc: 'embedurl'
          // // use stylus plugin at compile time
          // use: [
          //   require('fluidity')
          // ],
          // //  @import 'foo', 'bar/moo', etc. into every .styl file
          // import: [
          //   'foo',
          //   'bar/moo'
          // ]
        },
        files: {
          // 1:1 compile
          'css/main-degug.css': 'css/main.styl'
          // compile and concat into single file
          // 'css/another.css': ['css/sources/*.styl', 'css/more/*.styl']
        }
        // files: [{
        //   expand: true,
        //   cwd: 'css',
        //   src: '*.styl',
        //   dest: 'css',
        //   ext: '.css'
        // }]
      }
    },

    // 压缩 CSS 文件
    cssmin: {
      options: {
        report: 'gzip'
      },
      combine: {
        files: {
          'css/main.css': 'css/main-debug.css'
        }
      }
      // minify: {
      //   expand: true,
      //   cwd: 'css/',
      //   src: ['*-debug.css'],
      //   dest: 'css/',
      //   ext: '.css'
      // }
    },

    // 压缩合并 JS 文件
    uglify: {
      options: {
        report: 'gzip',
        mangle: true, // Specify mangle: false to prevent changes to your variable and function names.
        // banner: '/*! <%= pkg.name %> | <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        banner: '/*! <%= pkg.name %> | <%= pkg.author %> */\n'
      },
      beautify: {
         ascii_only: true // 中文 ascii 化，非常有用！防止中文乱码的神配置
      },
      myTarget: {
        files: {
          // 'js/libs.js': ['js/jquery-1.8.3.js', 'js/jquery-*.js', 'js/underscore.js', 'js/backbone.js'],
          'js/main.js': ['js/main-debug.js']
        }
      }
    },

    // 清除生产目录
    clean: ['dist/'],

    // 复制文件，打包到生产目录下
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: './',
          // src: '*.htm?',
          // src: ['*', '!*-bak.*', '!gruntfile.js', '!package.json'],
          src: ['*.htm?', '*.php', 'favicon.ico', '.htaccess'],
          // flatten: true,
          filter: 'isFile',
          dest: 'dist/'
        }, {
          expand: true,
          cwd: 'img/',
          src: ['**', '!bak/**', '!*-bak.*'],
          dest: 'dist/img/'
        }, {
          expand: true,
          cwd: 'css/',
          src: ['**', '!bak/**', '!*.less', '!*.styl', '!*.scss', '!*-bak.*', '!*-debug.*'],
          dest: 'dist/css/'
        }, {
          expand: true,
          cwd: 'js/',
          // src: ['**', '!bak/**', '!**/bak/**', '!*.*', '*.js', '!*-bak.js', '!*-debug.js', '!**/*-debug.*', '!**/package.json', '!cssrefresh.js', '!live.js'],
          src: ['**', '!bak/**', '!**/bak/**', '!*-bak.*', '!*-debug.*', '!**/*-debug.*', '!**/package.json', '!cssrefresh.*', '!live.*'],
          dest: 'dist/js/'
        }]
      }
    },

    // 监控文件
    watch: {
      scripts: {
        files: ['css/*.styl', 'css/*.css', 'js/*.js'],
        // tasks: ['stylus', 'cssmin', 'uglify']
        tasks: ['cssmin', 'uglify']
      }
    }
  });

  // 加载 Grunt 插件
  // grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // 注册 Grunt 默认任务
  grunt.registerTask('default', ['cssmin', 'uglify', 'clean', 'copy']);
};