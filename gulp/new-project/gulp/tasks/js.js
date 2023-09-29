import webpack from "webpack-stream";
import sourceMaps from "gulp-sourcemaps";
  
export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        messge: "Error: <%= error.message%>"
      })
    ))
    // .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(webpack({
      mode: app.isBuild ? "production" : "development",
      output: {
        filename: "app.min.js",
      }
    }))
    .pipe(sourceMaps.init({loadMaps: true}))
    .pipe(sourceMaps.write('../maps', {
      includeContent: false,
      sourceRoot: '/src',
      destPath: "/dist/maps/app.js.map"
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
}