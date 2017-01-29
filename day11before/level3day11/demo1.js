//认清任务
var gulp = require("gulp");

gulp.task("hello",function(){
	console.log("你好");
})

gulp.task("chengdu",function(){
	console.log("成都");
})

//task(name,dev,function) -（名字 依赖 回调函数）
gulp.task("default",["hello","chengdu"],function(){
	console.log("欢迎我");
})

