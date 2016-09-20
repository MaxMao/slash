module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    logs: grunt.file.mkdir('logs'),
    simplemocha: {
      options: {
        reporter: 'spec',
        ui: 'bdd',
        timeout: 30000,
      },
      unit: {
        src: ['test/**/*.test.js'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // Only create the archive if we successfully run our tests.
  grunt.registerTask('default', ['simplemocha:unit']);

  // Testing shortcuts
  grunt.registerTask('test', ['version', 'simplemocha:all']);
  grunt.registerTask('unit', ['version', 'simplemocha:unit']);
  grunt.registerTask('integration', ['version', 'simplemocha:integration']);
};
