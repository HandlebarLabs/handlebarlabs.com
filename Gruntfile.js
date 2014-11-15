module.exports = function(grunt) {

  // Config
  grunt.initConfig({
    shell: {
      serve: {
        command: 'jekyll serve'
      },
      log: {
        command: 'echo hi'
      }
    },

    less: {
      development: {
        options: {
          paths: ['assets/css'],
          cleancss: true
        },
        files: {
          "assets/css/style.css" : "assets/css/style.less"
        }
      }
    },

    watch: {
      files: {
        files: ['_data/*', '_includes/*', '_layouts/*', 'assets/*',
               'portfolio/*', 'services/*', 'index.html'],
        tasks: ['shell:serve'],
        options: {
          spawn: false,
        },
      }
    }
  });

  // Loan plugins
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Tasks
  grunt.registerTask('default', ['less:development','watch:files']);
};
