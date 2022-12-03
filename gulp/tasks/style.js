import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export const style = () => {
  return app.gulp.src(app.path.source.style, {sourcemaps: true})

    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(app.gulp.dest(app.path.build.style))
    .pipe(app.plugins.browser.stream());
}
