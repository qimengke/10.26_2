//监听刷新
var gulp = require("gulp");
/*安装前缀*/
var autoprefixer = require("gulp-autoprefixer");


gulp.task("fixer",function(){
	gulp.src("src/css/a.css")
	.pipe(autoprefixer({
		//浏览器规范 你来定制 
		browsers:["Firefox > 10"],
		//美化代码
		cascode:false,
		//删除无用代码
		remove:true
	}))
	.pipe(gulp.dest("dist/css"))
})

gulp.task("default",["fixer"]);
