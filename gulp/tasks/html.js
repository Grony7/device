export const html = () => {
  return app.gulp.src(app.path.source.html)
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browser.stream());
}
