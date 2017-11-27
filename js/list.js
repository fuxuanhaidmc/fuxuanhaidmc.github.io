$.ajax({
	type:"get",//请求方式
	url:"goodDetail.json",//请求网址(接口)
	dataType:'json',//后台返回数据的类型
	global:false,
	data:{},
	success:function(data){
		var obj = data;
		
//		console.log(obj.goodList[2].imgUrl);
//		console.log(obj.goodList[1].brand);
		for (var i = 0;i < 9;i++) {
			$(".list > li:nth-child(" + (i+1) +") > div:nth-child(1) > img:nth-child(1)").prop("src","img/" + obj.goodList[i].imgUrl);
			$(".list > li:nth-child(" + (i+1) +") > p:nth-child(2)").html(obj.goodList[i].brand);
			$(".list > li:nth-child(" + (i+1) +") > p:nth-child(3)").html(obj.goodList[i].title);
			$(".list > li:nth-child(" + (i+1) +") > p:nth-child(4)").html("指导价 " + obj.goodList[i].guidePrice);
			$(".list > li:nth-child(" + (i+1) +") > div > div:nth-child(1) > p:nth-child(2) > span").html(obj.goodList[i].firstPay1);
			$(".list > li:nth-child(" + (i+1) +") > div > div:nth-child(1) > p:nth-child(3) > span").html(obj.goodList[i].monthPay1);
			$(".list > li:nth-child(" + (i+1) +") > div > div:nth-child(2) > p:nth-child(2) > span").html(obj.goodList[i].firstPay3);
			$(".list > li:nth-child(" + (i+1) +") > div > div:nth-child(2) > p:nth-child(3) > span").html(obj.goodList[i].monthPay3);
		}
		
		for (var i = 0;i < 9;i++) {
			$(".list2 > li:nth-child(" + (i+1) +") > div:nth-child(1) > img:nth-child(1)").prop("src","img/" + obj.goodList[(9+i)].imgUrl);
			$(".list2 > li:nth-child(" + (i+1) +") > p:nth-child(2)").html(obj.goodList[(9+i)].brand);
			$(".list2 > li:nth-child(" + (i+1) +") > p:nth-child(3)").html(obj.goodList[(9+i)].title);
			$(".list2 > li:nth-child(" + (i+1) +") > p:nth-child(4)").html("指导价 " + obj.goodList[(9+i)].guidePrice);
			$(".list2 > li:nth-child(" + (i+1) +") > div > div:nth-child(1) > p:nth-child(2) > span").html(obj.goodList[(9+i)].firstPay1);
			$(".list2 > li:nth-child(" + (i+1) +") > div > div:nth-child(1) > p:nth-child(3) > span").html(obj.goodList[(9+i)].monthPay1);
			$(".list2 > li:nth-child(" + (i+1) +") > div > div:nth-child(2) > p:nth-child(2) > span").html(obj.goodList[(9+i)].firstPay3);
			$(".list2 > li:nth-child(" + (i+1) +") > div > div:nth-child(2) > p:nth-child(3) > span").html(obj.goodList[(9+i)].monthPay3);
		}
		
		for (var i = 0;i < 1;i++) {
			$(".list3 > li:nth-child(" + (i+1) +") > div:nth-child(1) > img:nth-child(1)").prop("src","img/" + obj.goodList[(18+i)].imgUrl);
			$(".list3 > li:nth-child(" + (i+1) +") > p:nth-child(2)").html(obj.goodList[(18+i)].brand);
			$(".list3 > li:nth-child(" + (i+1) +") > p:nth-child(3)").html(obj.goodList[(18+i)].title);
			$(".list3 > li:nth-child(" + (i+1) +") > p:nth-child(4)").html("指导价 " + obj.goodList[(18+i)].guidePrice);
			$(".list3 > li:nth-child(" + (i+1) +") > div > div:nth-child(1) > p:nth-child(2) > span").html(obj.goodList[(18+i)].firstPay1);
			$(".list3 > li:nth-child(" + (i+1) +") > div > div:nth-child(1) > p:nth-child(3) > span").html(obj.goodList[(18+i)].monthPay1);
			$(".list3 > li:nth-child(" + (i+1) +") > div > div:nth-child(2) > p:nth-child(2) > span").html(obj.goodList[(18+i)].firstPay3);
			$(".list3 > li:nth-child(" + (i+1) +") > div > div:nth-child(2) > p:nth-child(3) > span").html(obj.goodList[(18+i)].monthPay3);
		}
	}
});

//分页器点击事件

 var page=1;

$('.sel1').click(function(){
	$(this).parent().children().css({
		backgroundColor:"#FFFFFF",
		color:"black"
	})
	$(this).css({
		backgroundColor:"#F1C752",
		color:"#FFFFFF"
	});
	$(".car-li > ul").css({
		display:"none"
	});
	$(".car-li > ul:nth-child("+$(this).index()+")").css({
		display:"block"
	});
	page=$(this).index()
});
$('.sel2').click(function(){
	$(this).parent().children().css({
		backgroundColor:"#FFFFFF",
		color:"black"
	})
	$(this).css({
		backgroundColor:"#F1C752",
		color:"#FFFFFF"
	});
	$(".car-li > ul").css({
		display:"none"
	});
	$(".car-li > ul:nth-child("+$(this).index()+")").css({
		display:"block"
	});
	page=$(this).index()
});
$('.sel3').click(function(){
	$(this).parent().children().css({
		backgroundColor:"#FFFFFF",
		color:"black"
	})
	$(this).css({
		backgroundColor:"#F1C752",
		color:"#FFFFFF"
	});
	$(".car-li > ul").css({
		display:"none"
	});
	$(".car-li > ul:nth-child("+$(this).index()+")").css({
		display:"block"
	});
	page=$(this).index();
});
//向前向后按钮

 $(".prev").click(function(){

	if(page==1){
		return
	}else if(page==2){
		$('.sel1').trigger("click");
	}else if(page==3){
		$('.sel2').trigger("click");
	}
 })
 $(".next").click(function(){

	if(page==3){
		return
	}else if(page==2){
		$('.sel3').trigger("click");
	}else if(page==1){
		$('.sel2').trigger("click");
	}
 })




 var num=9;
//点击商品进入对应的商品详情页
$(".list_skip > li").click(function(){
	window.location.href = "detail.html?id="+$(this).index()+"";
});
$(".list2 > li").click(function(){
	window.location.href = "detail.html?id="+parseInt($(this).index()+num);
});
$(".list3 >li").click(function(){
	
	window.location.href = "detail.html?id="+parseInt($(this).index()+18);
});

// 品牌

// 指导价
$(".price-list").on("click","li",function(){
	$(this).siblings().removeClass('price-sel')
	$(this).addClass("price-sel");
})

$("#yx").click(function(){
	location.href="car_apply.html"
})


















