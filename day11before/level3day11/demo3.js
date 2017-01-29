//监听文件
var gulp =require("gulp");

gulp.task("copyHtml",function(){
	gulp.src("src/index.html").pipe(gulp.dest("dist/"));
})

//watch(监听目录，实现方法)
gulp.task("watch",function(){
	gulp.watch("src/index.html",["copyHtml"]);
})

gulp.task("default",["watch"]);
