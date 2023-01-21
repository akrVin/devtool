// основной модуль
import gulp from "gulp";
// импорт путей
import { path } from "./gulp/config/path.js";

// передаем значение в глобальную переменную
global.app = {
  path: path,
  gulp: gulp
}

// импорт задач
import { copy } from "./gulp/tasks/copy.js";

// наблюдатель и изменнение файлов
function watcher() {
  gulp.watch(path.watch.files, copy)
}

// построение сценариев построения задачи
const dev = gulp.series(copy, watcher);

// выполнение задачи по умолчанию
gulp.task('default', copy);