//进行cookies缓存限制
var gulp = require("gulp")
var rev = require("gulp-rev-append");

gulp.task("change",function(){
	gulp.src("src/index.html")
	.pipe(rev())
	.pipe(gulp.dest("dist"))
})

gulp.task("default",["change"]);
