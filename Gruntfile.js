module.exports = function(grunt) {

  // Config
  grunt.initConfig({
    shell: {
      serve: {
        command: 'jekyll serve -w'
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
    }
  });

  // Loan plugins
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Register Tasks
  grunt.registerTask('default', ['less:development','shell:serve']);
};
