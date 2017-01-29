//自动刷新
var gulp =require("gulp");
var connect = require("gulp-connect");

//gulp.task() 添加任务
//gulp.src() 起始目录
//gulp.dest() 目标目录
//gulp.watch() 监听事件 （监听的对象，调用的方法）

gulp.task("server",function(){
	//定义服务器端口的 connect.server({})
	connect.server({
		root:["dist"],
		port:8022,
		livereload:true//允许他自动刷新的必要条件
	})
})

gulp.task("copyHtml",function(){
	//复制过去后刷新 connet.reload() 刷新页面
	gulp.src("src/index.html").pipe(gulp.dest("dist/")).pipe(connect.reload());
})

gulp.task("watch",function(){
	gulp.watch("src/index.html",["copyHtml"]);
})

gulp.task("default",["watch","server"]);
