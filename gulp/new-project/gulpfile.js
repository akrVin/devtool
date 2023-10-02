// основной модуль
import gulp from 'gulp';
// импорт путей
import { path } from './gulp/config/path.js';
// импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
// import { less } from "./gulp/tasks/less.js";
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
// import { otfToTtf, ttfToWoff, fontStyleLESS } from "./gulp/tasks/fonts.js";
import {
  otfToTtf, ttfToWoff, delFonts, fontStyleSCSS, copyFonts,
} from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';

// передаем значение в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path,
  gulp,
  plugins,
};
// import { ftp } from './gulp/tasks/ftp.js';

/* наблюдатель и изменнение файлов, если нужно смотреть на сервере измения то добавить gulp.series(html, ftp) 
и раскоментировать сценарий вместо html каждую задачу изменить на свою (copy и т.д),
 тогда все будет выгружаться автоматически */
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  /* gulp.watch(path.watch.less, less); */
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, delFonts, copyFonts, fontStyleSCSS);
// const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyleLESS);
// const fonts = gulp.series(otfToTtf, ttfToWoff, delFonts);

const mainTasks = gulp.parallel(fonts, gulp.parallel(copy, html, scss, js, images));
// const mainTasks = gulp.parallel(fonts, gulp.parallel(copy, html, less, js, images));

// построение сценариев построения задачи
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
// const deployFTP = gulp.series(reset, mainTasks, ftp);

export { svgSprive };
export { dev };
export { build };
export { deployZIP };
// export { deployFTP }

// выполнение задачи по умолчанию
gulp.task('default', dev);
