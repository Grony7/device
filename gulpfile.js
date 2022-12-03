import gulp from "gulp";
import {path} from "./gulp/config/path.js";
import {plugins} from "./gulp/config/plugins.js"

// Импорт задач

import {copy} from "./gulp/tasks/copy.js";
import {clean} from "./gulp/tasks/clean.js";
import {html} from "./gulp/tasks/html.js";
import {style} from "./gulp/tasks/style.js";
import {server} from "./gulp/tasks/server.js";

// Передача значений в глобальную переменную

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// Наблюдатель

const watcher = () => {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
}

// Сценарии

const mainTasks = gulp.parallel(copy, html, style)

const dev = gulp.series(
  clean,
  mainTasks,
  gulp.parallel(
    watcher,
    server
  )
)

// выполнение сценария по умолчанию

gulp.task('default', dev);
