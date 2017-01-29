var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var wechat = require('wechat');
var routes = require('./routes/index');
var users = require('./routes/users');
var wechatRouter = require('./routes/wechat');

var app = express();
/*微信配置信息*/
var config = {
    token: 'admintest',
    appid: 'wxc84eccfd89e392c3',
    encodingAESKey: 'qMXbNDa5DpRfMwIeWarmkrnvdalA7duGW4lOjg7rFw1'
};
/*定义接口 为微信订阅号|公众号提供操作方式
  http://testadd.duapp.com/wechat
*/



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//对views文件设置静态全局路径
app.use(express.static(path.join(__dirname, 'views')));
app.use('/', routes);
app.use('/users', users);
app.use('/wechatRouter',wechatRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;