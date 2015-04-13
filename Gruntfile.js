module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      clean: {
        command: 'hexo clean'
      },
      generate: {
        command: 'hexo generate'
      },
      server: {
        command: 'hexo server'
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['shell:clean', 'shell:generate', 'shell:server']);

};
