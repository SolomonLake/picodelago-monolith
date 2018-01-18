import chokidar from "chokidar";
import del from "del";
import glob from "glob";
import gulp from "gulp";
import inlinesource from "gulp-inline-source";
import merge from "merge-stream";
import rename from "gulp-rename";
import sass from "gulp-sass";
import pug from "gulp-pug";
import webpack2 from "webpack";
import webpackStream from "webpack-stream";
import replace from "gulp-replace";

gulp.task("js", gulp.series(js, renameServerIndex));
gulp.task("css", css);
gulp.task("views", views);
gulp.task("dist", dist);
gulp.task("clean", clean);
gulp.task("upload", upload);
gulp.task("build", gulp.series(["clean", "js", "css", "views", "dist"]));
gulp.task("watch", () => watch());
gulp.task("dev", gulp.series("build", "watch"));
gulp.task("deploy", gulp.series(["build", "upload"]));
gulp.task("default", gulp.series(["build"]));

function watch() {
  return gulp.watch(["src/**"], gulp.series(["build"]));
}

function clean() {
  return del(["dist", "build"]);
}

function js() {
  function buildSingleJs(jsFile) {
    const config = require("./webpack.config.js");
    config.output = { filename: jsFile.substr(4) };

    return gulp
      .src(jsFile)
      .pipe(webpackStream(config, webpack2))
      .pipe(gulp.dest(`build/`));
  }

  const jsFiles = glob.sync("src/**/*.js");
  return merge(jsFiles.map(buildSingleJs));
}

function renameServerIndex() {
  return gulp
    .src("build/server/index.js")
    .pipe(rename("index.gs"))
    .pipe(gulp.dest("build/server"));
}

function views() {
  return (
    gulp
      .src("./src/parts/**/*.pug")
      .pipe(
        pug({
          pretty: true
        })
      )
      .pipe(inlinesource({ rootpath: "./build", pretty: true, compress: true }))
      // strip xml doctype from svgs beacuse they use the same  <? ?> syntax as appscript templates
      .pipe(replace(/<\?xml [^\?]*\?>/g, ""))
      .pipe(gulp.dest("./build/parts"))
  );
}

function css() {
  return gulp
    .src("./src/**/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./build"));
}

function dist() {
  return merge(
    gulp
      .src("./build/parts/**/*.html")
      .pipe(
        rename(path => {
          path.dirname = "";
        })
      )
      .pipe(gulp.dest("./dist")),
    gulp
      .src("./build/server/**/*.gs")
      .pipe(
        rename(path => {
          path.dirname = "";
        })
      )
      .pipe(gulp.dest("./dist"))
  );
}

function upload() {}
