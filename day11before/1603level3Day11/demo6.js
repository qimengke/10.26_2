//监听刷新
var gulp = require("gulp");
//gulp-sass,gulp-ruby-sass
/*合并文件*/
var concat = require("gulp-concat");
/*js 的压缩混淆*/
var uglify = require("gulp-uglify");
/*重命名*/
var rename = require("gulp-rename");

gulp.task("con",function(){
	return gulp.src("src/js/**/*")
	/*合并成new.js*/
	.pipe(concat("new.js"))
	/*复制到dist下js目录*/
	.pipe(gulp.dest("dist/js"))
	//压缩混淆
	.pipe(uglify())
	//重命名成min.js
	.pipe(rename("new.min.js"))
	/*复制到dist下js目录*/
	.pipe(gulp.dest("dist/js"))
})

gulp.task("default",["con"])
