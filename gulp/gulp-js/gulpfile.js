// основной модуль
import gulp from "gulp";
// импорт путей
import { path } from "./gulp/config/path.js";
// импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// передаем значение в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
// import { scss } from "./gulp/tasks/scss.js";
import { less } from "./gulp/tasks/less.js";

// наблюдатель и изменнение файлов
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  // gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.less, less);
}

const mainTasks = gulp.parallel(copy, html, less);


// построение сценариев построения задачи
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// выполнение задачи по умолчанию
gulp.task('default', dev);