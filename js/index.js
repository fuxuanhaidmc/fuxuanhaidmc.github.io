(function(){
	var index={
		init:function(){
			var t=this;
			t.swiper();
		},
		swiper:function(){
			var mySwiper=new Swiper(".swiper-container",{
				direction: 'horizontal',
    			loop: true,
    			autoplay:1000,
				pagination: '.swiper-pagination',
				// centeredSlides:true,/*默认第一块居左，设置为true后则是居中显示*/  
				coverflow:{  
					rotate:30,/*3d旋转角度设置为30度*/  
					stretch:10,/*每个slide之间的拉伸值，值越大靠得越近*/  
					depth:60,/*位置深度，值越大离Z轴越远，看起来越小*/  
					modifier:2,  
					slideshadows:true/*开启阴影*/  
				}  
			})
		}
	};
	index.init();
	
	url:"goodDetail.json",//请求网址(接口)

	
	$(".buy").click(function(){
		location.href="list.html"
	})

	
	$(".will").click(function(){
		location.href="car_apply.html"
	})
	
   $.ajax({
	   type:"get",
	   url:"goodIndex.json",
	   dataType:"json",
	   data:{},
	   success:function(data){
	 $(".car-list").html(template("tempindex",data))	   
      
	   }
   })

})();
