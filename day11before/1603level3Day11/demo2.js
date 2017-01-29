//复制粘贴
var gulp = require("gulp");
gulp.task("copyHtml",function(){
	//pipe 指的是下一步 下一步
	return gulp.src("src/index.html").pipe(gulp.dest("dist"));
})

gulp.task('copyCss',function(){
  	//  --/**/* 复制目录下所有
	return gulp.src("src/css/**/*").pipe(gulp.dest("dist/css"))
})

gulp.task("copyOnlyCss",function(){
	/*--/*.css 你要复制的后缀*/
	return gulp.src("src/css/*.css").pipe(gulp.dest("dist/css"))
	
})

gulp.task("copyAll",function(){
	//！ 不包含存入 多个文件 用[]来包含
	return gulp.src(["src/css/**/*","src/js/**/*","!src/css/f.less"]).pipe(gulp.dest("dist/new"));
})


gulp.task("default",["copyHtml","copyAll"]);
