import dartLess from "less";
import gulpLess from "gulp-less";
import rename from "gulp-rename";

const Less = gulpLess(dartLess);
//  { sourcemaps: true }
export const less = () => {
  return app.gulp.src(app.path.src.less)
    // .pipe(app.plufins.plumber(
    //   app.plugins.notify.onError({
    //     title: "LESS",
    //     messge: "Error: <%= error.message%>"
    //   })
    // ))
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(Less())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}