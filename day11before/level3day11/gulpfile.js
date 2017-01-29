var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("scssTocss",function(){
	//sass 将sass文件和scss文件 转换 css 文件
	gulp.src("src/css/test.scss").pipe(sass()).pipe(gulp.dest("dist/css/"))
});

gulp.task("default",["scssTocss"]);
