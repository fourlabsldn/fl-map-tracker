const gulp = require('gulp');
const organiser = require('gulp-organiser');

module.exports = organiser.register((task) => {
  gulp.task(task.name, ['start-server', 'browser-sync']);
});
