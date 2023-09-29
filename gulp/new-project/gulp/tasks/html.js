import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import htmlMin from "gulp-htmlmin";
import pug from "gulp-pug";
import handlebars from "gulp-handlebars"

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(fileInclude()) // закоментировать, если используем pug или hundlebars
    // .pipe(pug({
    //   // сжатие HTML файла
    //   pretty: true,
    //   // показывать в терминалу какой файл обработан
    //   verbose: true
    // }))
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.if(
      app.isBuild, 
      // app.isDev,
      webpHtmlNosvg()
    ))
    .pipe(app.plugins.if(
      app.isBuild,
      // app.isDev,
      versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ]
        },
        'output': {
          'file': 'gulp/version.json'
        }
      })
    ))
    .pipe(app.plugins.if(
      app.isBuild, 
      // app.isDev,
      htmlMin({collapseWhitespace: true})
    ))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
} 