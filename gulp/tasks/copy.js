export const copy = () => {
  return app.gulp.src(app.path.source.files)
    .pipe(app.gulp.dest(app.path.build.files))
    .pipe(app.plugins.browser.stream());
}
