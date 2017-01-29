//监听刷新
var gulp = require("gulp");
// connect
var connect =require("gulp-connect");

gulp.task("server",function(){
	connect.server({
		root:["dist"],
		port:8022,
		livereload:true//自动刷新的必要条件
	})
})

gulp.task("copyHtml",function(){
	//connect.reload() 刷新
	return gulp.src("src/index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})

gulp.task("watch",function(){
	return gulp.watch("src/index.html",["copyHtml"]);
})


gulp.task("default",["server","watch"]);
