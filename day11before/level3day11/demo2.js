//复制文件
var gulp = require("gulp");

//src(起始目录) dest(最终目录) 
gulp.task("copyHtml",function(){
	return gulp.src("src/index.html").pipe(gulp.dest("dist/")),;
})
gulp.task("copyCss",function(){
	// ----/**/* 把文件目录下所有都包含
	return gulp.src("src/css/**/*").pipe(gulp.dest("dist/css"));
})
gulp.task("copyOnlyCss",function(){
	/**.css 过滤只剩css文件*/
	return gulp.src("src/css/*.css").pipe(gulp.dest("dist/css"));
})
//合并到一个目录
gulp.task("copyMore",function(){
	return gulp.src(["src/css/**/*","src/js/*","!src/css/A.less"]).pipe(gulp.dest("dist/new"));
})

gulp.task("default",["copyHtml","copyMore"]);
