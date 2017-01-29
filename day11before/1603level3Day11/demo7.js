//监听刷新
var gulp = require("gulp");
//gulp-sass,gulp-ruby-sass
/*合并文件*/
var concat = require("gulp-concat");
/*css 的压缩混淆*/
var clean = require("gulp-clean-css");
/*重命名*/
var rename = require("gulp-rename");

gulp.task("con",function(){
	return gulp.src("src/css/*.css")
	/*合并成new.css*/
	.pipe(concat("new.css"))
	/*复制到dist下css目录*/
	.pipe(gulp.dest("dist/css"))
	//压缩混淆
	.pipe(clean())
	//重命名成min.css
	.pipe(rename("new.min.css"))
	/*复制到dist下css目录*/
	.pipe(gulp.dest("dist/css"))
})

gulp.task("default",["con"])
