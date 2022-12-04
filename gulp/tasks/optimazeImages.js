import squoosh from 'gulp-libsquoosh';

export const optimazeImages = () => {
  return app.gulp.src(app.path.source.image)
    .pipe(squoosh())
    .pipe(app.gulp.dest(app.path.build.image))
    .pipe(app.plugins.browser.stream());
}
