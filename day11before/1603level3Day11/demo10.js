//图片压缩
var gulp = require("gulp");
//对html 进行操作
var htmlmin = require("gulp-htmlmin");
gulp.task("htmlmin",function(){
	gulp.src("src/index.html")
	.pipe(htmlmin({
		removeComments:true,
		minifyCSS:true,
		minifyJS:true
	}))
	.pipe(gulp.dest("dist"))
})
gulp.task("default",["htmlmin"]);
