var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

var paths = {
  styles: {
    src: ['scss/townsquared.scss'],
    dest: 'css/',
    watch: ['scss/**/*.scss'],
    includes: ['scss', 'bower_components']
  },
  server: {
    src: './'
  }
};

gulp.task('default', ['build']);

gulp.task('build', ['styles']);

gulp.task('server', ['build'], function(){
  gulp.src(paths.server.src)
    .pipe(plugins.serverLivereload({
      livereload: {
        enable: true
      },
      open: true
    }));
  gulp.watch(paths.styles.watch || paths.styles.src, ['styles']);
});

gulp.task('styles', styles(paths.styles));
function styles(paths) {
  return function() {
    return gulp.src(paths.src)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.plumber())
      .pipe(plugins.sass({
        includePaths: paths.includes
      }))
      .pipe(plugins.autoprefixer())
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(paths.dest));
  };
}
