$(function(){
    var urlId = Number(window.location.href.split('?')[1].split("=")[1]);

    $.ajax({
        type:"get",//请求方式
        url:"goodDetail.json",//请求网址(接口)
        async:true,//是否异步加载
        dataType:'json',//后台返回数据的类型
        data:{},
        success:function(data){
            var obj = data;
    
    
          var text=obj.goodList[urlId]["brand"];
         $("#Models").val(text);
        
            
    
        }
    });
    
    $("form").on("submit",function(e){
        e.preventDefault();
        var params = $(this).serialize();
        console.log(params)
    }) 
    
})