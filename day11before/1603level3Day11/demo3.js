//监听事件
var gulp = require("gulp");

gulp.task("copyHtml",function(){
	return gulp.src("src/index.html").pipe(gulp.dest("dist"))
})

gulp.task("watch",function(){
	//监听事件
	return gulp.watch("src/index.html",["copyHtml"]);
})

gulp.task("default",["watch"]);
