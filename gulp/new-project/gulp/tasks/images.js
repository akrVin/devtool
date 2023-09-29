// import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import webp from "imagemin-webp";
// import imagemin from "imagemin";
import extReplace from "gulp-ext-replace";

export const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        messge: "Error: <%= error.message%>",
        sound: true,
        wait: true
      })
    ))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(
      app.isBuild,
      imagemin(
        {
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          interlaced: true,
          quality: 75
        },
        [
        webp({
          quality: 80
        })]
      )
    ))
    .pipe(app.gulp.dest(app.path.build.images))
    // .pipe(app.gulp.src(app.path.src.images))
    .pipe(extReplace(".webp"))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
}