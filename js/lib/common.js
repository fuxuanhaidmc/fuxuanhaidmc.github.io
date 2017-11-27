$(function(){
	    //   移入显示隐藏二维码
	$(".head_code").on("mouseover",function(){
		$(this).next("img").removeClass("dsn")
	});
	$(".head_code").on("mouseleave",function(){
		$(this).next("img").addClass("dsn")
	})

	$(".head ul").on("click","a",function(){

		$(this).parent().parent().children().find("a").removeClass("select");
		$(this).addClass("select")
	})




})
