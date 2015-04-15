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
        command: 'hexo server -w'
      }
    },

    'sftp-deploy': {
      build: {
        auth: {
          host: '104.236.11.215',
          port: 22,
          authKey: 'key1'
        },
        // cache: 'sftpCache.json',
        src: 'public',
        dest: '/var/www/handlebarlabs.com/public/',
        exclusions: [],
        serverSep: '/',
        concurrency: 4,
        progress: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-sftp-deploy');

  grunt.registerTask('default', ['shell:clean', 'shell:generate', 'shell:server']);
  grunt.registerTask('deploy', ['shell:clean', 'shell:generate', 'sftp-deploy']);
};
