var gulp = require("gulp");
//布置一个任务
gulp.task("hello",function(){
	console.log("谁说凯捷丑的");
})

gulp.task("world",function(){
	console.log("那是骗人的");
})

gulp.task("default",["hello","world"],function(){
	console.log("凯捷是最帅的男人");
})
