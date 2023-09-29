import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import sourceMaps from "gulp-sourcemaps";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss) // app.isDev, { sourcemaps: sourceMaps }
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        messge: "Error: <%= error.message%>"
      })
    ))
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(app.plugins.if(
      app.isDev,
      sourceMaps.init({loadMaps: true})
    ))
    .pipe(sass({
      outputStyle:"expanded"
    }))
    .pipe(app.plugins.if(
      app.isBuild,
      groupCssMediaQueries()
    ))
    .pipe(webpcss({
      webpClass: ".webp",
      noWebpClass: ".no-webp"
    }))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        cascade: true
      }))
    // Раскоментировать если нужен не сжатый дубль файла стилей
    .pipe(app.plugins.if(
      app.isBuild,
      cleanCss()
    ))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.if(
      app.isBuild,
      rename({
        extname: ".min.css"
      })
    ))
    .pipe(app.plugins.if(
      app.isDev,
        sourceMaps.write('../maps', {
        includeContent: false,
        sourceRoot: '/src',
        destPath: "/dist/maps/style.css.map"
      })
    ))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}