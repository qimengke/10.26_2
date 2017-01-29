var myScroll;
$(function(){
	load();
	getData(1);
	
//阻止它默认事件	
document.addEventListener("touchmove",function(e){
	e.preventDefault();
})
	
$("#wrapper").on("touchend",function(){
	//下拉刷新
	if(myScroll.y>0){
	  $("#scrollbar").html("");
	  getData(1);
	}
	//上拉刷新
	if(myScroll.y<myScroll.maxScrollY-50){		
		getData(2);
	}
})
})
 function load(){
 	myScroll = new IScroll("#wrapper",{
 		mouseWheel:true,
 		scrollbars:true,
 		//禁止滚动条来进行控制
// 		interactiveScrollbars:false
 	})
 	
 }

function getData(id){
//	$("#loading").show();
	$.ajax({
		type:"get",
		dataType:"jsonp",
		url:" http://datainfo.duapp.com/shopdata/getGoods.php",
		data:{classID:id},
		success:function(data){
			if(data.length){
				 var $scrollBox = $("#scrollbar");
				$.each(data,function(index){
			     //拼接字符串
			     var $prodbox = $("<div class='prodbox'>");
			     var imgBox = $("<div class='imgBox'>图片加载中....</div>");
			     var thisimg = $("<img src='"+data[index].goodsListImg+"' />");
			     var prodname = $("<div class='prodname'>"+data[index].goodsName+"</div>");
			     var pricebox =$("<div class='pricebox'>"+data[index].price+"</div>");
			     $prodbox.append(imgBox);
			     $prodbox.append(prodname);
			     $prodbox.append(pricebox);
			     thisimg.on("load",function(){
			     	myScroll.refresh();
			     	imgBox.empty();
			     	imgBox.append(thisimg);
			     });
			     $scrollBox.append($prodbox);
				});
				
			}
			
			
		}
		
	})
	
	
	
	
	
}
