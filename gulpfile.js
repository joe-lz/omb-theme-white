const gulp = require("gulp");

function copyComponents() {
  return gulp
    .src(["components/**/**"])
    .pipe(gulp.dest("../leanblog/src/components/www"));
}

function copyPages() {
  return gulp
    .src(["pages/**/**"])
    .pipe(gulp.dest("../leanblog/src/pages/www"));
}

exports.watch = function () {
  gulp.watch("components/**/**", copyComponents);
  gulp.watch("pages/**/**", copyPages);
};
