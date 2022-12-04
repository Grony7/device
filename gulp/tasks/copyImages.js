export const copyImages = () => {
  return app.gulp.src(app.path.source.image)
    .pipe(app.gulp.dest(app.path.build.image))
    .pipe(app.plugins.browser.stream());
}
