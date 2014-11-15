module.exports = function(grunt) {
  
  // Config
  grunt.initConfig({
    shell: {
      serve: {
        command: 'jekyll serve -w'
      }
    }
  });

  // Loan plugins
  grunt.loadNpmTasks('grunt-shell');

  // Register Tasks
  grunt.registerTask('default', ['shell:serve']);
};
