//监听刷新
var gulp = require("gulp");
//gulp-sass,gulp-ruby-sass
var sass = require("gulp-sass");

gulp.task("sassTocss",function(){
	gulp.src("src/css/test.scss").pipe(sass()).pipe(gulp.dest("dist/css"))
})

gulp.task("default",["sassTocss"]);
