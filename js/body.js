$(document).ready(function(){
   //  console.log(1)
    $("span").mouseenter(function(){//当鼠标指针穿过元素时，会发生 mouseenter 事件。
       $(this).children("img").css("display","block");//当鼠标悬浮在span的img标签上将其设为块元素
    })


    
    $("span").mouseleave(function(){
        $(this).children("img").css("display","none");//当鼠标悬浮在span的img标签上将其display设为none 
        //display 属性规定元素应该生成的框的类型。
     })
   
   });