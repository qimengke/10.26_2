//图片压缩
var gulp = require("gulp");
/*安装imagemin*/
var imagemin = require("gulp-imagemin");

gulp.task("imgmin",function(){
	gulp.src("src/image/**/*")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/img"))
})

gulp.task("default",["imgmin"]);
