$(function(){

	//console.log(window.location.href);
var urlId = Number(window.location.href.split('?')[1].split("=")[1]);
console.log(urlId);
// console.log(typeof(urlId));
//封装一个函数处理根据不同id值展现不同的车型

$.ajax({
	type:"get",//请求方式
	url:"goodDetail.json",//请求网址(接口)
	async:true,//是否异步加载
	dataType:'json',//后台返回数据的类型
	data:{},
	success:function(data){
		var obj = data;


	  var objnew=obj.goodList[urlId];
	 ;
	  $(".car_detail").html(template("temp1",objnew))

	  $("#immediately").click(function(){
	
		window.location.href = "car_apply.html?id="+urlId+"";
	
		
	});
		

	}
});



	
})