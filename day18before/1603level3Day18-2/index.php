<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
		<title></title>
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<script type="text/javascript">
			//通过config接口注入权限验证配置
			wx.config({
			    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			    appId: '', // 必填，公众号的唯一标识
			    timestamp: '<?php echo time();?>', // 必填，生成签名的时间戳
			    nonceStr: '<?php echo $nonceStr;?>', // 必填，生成签名的随机串
			    signature: '<?php echo $signature;?>',// 必填，签名
			    jsApiList: [] // 必填，需要使用的JS接口列表
			});
			//通过ready接口处理成功验证
			wx.ready(function(){
				alert('验证成功 执行下一步');
				// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后
			});
		</script>
	</head>
	<body>
		<h2>JS SDK 默认配置</h2>
	     <p>config(最初验证):调用jssdk 必备的一个方法</p>
	     <p>debug：允许jssdk 在获取信息出问题时 弹出提示</p>
	     <p>appId:你申请或者需要使用的公众号 appid</p>
	     <p>timestamp:时间戳 就是获取你当前的时间</p>
	     <p>nonceStr:生成签名的随机串 由自己定义 说白了 就是自己定义的加密的规则</p>
	     <p>signature:是最后生成的签名</p>
	     <p>jsApiList:是一个你在项目中需要使用的接口的名称数组</p>
        <p>ready：当你验证成功后 执行的函数</p>
	</body>
</html>
