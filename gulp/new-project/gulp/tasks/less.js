
import Less from "gulp-less";
import lessAutoprefix from "less-plugin-autoprefix";
import rename from "gulp-rename";
import sourceMaps from "gulp-sourcemaps";
import cleanCss from "gulp-clean-css";
import webpCss from "gulp-webpcss";
import groupCssMediaQueries from "gulp-group-css-media-queries";

let autoprefix = new lessAutoprefix({ browsers: ['last 5 versions'] })

export const less = () => {
  return app.gulp.src(`${app.path.src.less}`)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "LESS",
        messge: "Error: <%= error.message%>"
      })
    ))
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(app.plugins.if(
      app.isDev,
      sourceMaps.init({loadMaps: true})
    ))
    .pipe(Less({
      plugins: [autoprefix]
    }))
    .pipe(webpCss({
      webpClass: ".webp",
      noWebpClass: ".no-webp"
    }))
    .pipe(app.plugins.if(
      app.isBuild,
      groupCssMediaQueries()
    ))
    .pipe(app.plugins.if(
      app.isBuild,
      cleanCss()
    ))
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