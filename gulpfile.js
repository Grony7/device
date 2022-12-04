import gulp from "gulp";
import {path} from "./gulp/config/path.js";
import {plugins} from "./gulp/config/plugins.js"

// Импорт задач

import {copy} from "./gulp/tasks/copy.js";
import {clean} from "./gulp/tasks/clean.js";
import {html} from "./gulp/tasks/html.js";
import {style} from "./gulp/tasks/style.js";
import {server} from "./gulp/tasks/server.js";
import {optimazeImages} from "./gulp/tasks/optimazeImages.js";
import {copyImages} from "./gulp/tasks/copyImages.js";

// Передача значений в глобальную переменную

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// Наблюдатель

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.style, style);
  gulp.watch(path.watch.image, copyImages);
}

// Сценарии

const devTasks = gulp.parallel(copy, html, style, copyImages);
const buildTasks = gulp.parallel(copy, html, style, optimazeImages);

export default gulp.series(
  clean,
  devTasks,
  gulp.series(
    server,
    watcher
  )
);

export const build = gulp.series(
  clean,
  buildTasks
)
