$(document).ready(function(){
    //头部二级菜单
    window.a=0;window.b=1;
    $(".header-bottom").find("ul").mouseenter(function(){//当鼠标指针穿过元素时，会发生 mouseenter 事件。
        $(".downlist").css("display","block");
        $(".downlist").css("z-index","999");//z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
        // Z-index 仅能在定位元素上奏效（例如 position:absolute;）！
        window.a=0;
    })
    $(".downlist").mouseenter(function(){
        window.b=0;
    })
    $(".header-bottom").find("ul").mouseleave(function(){
        window.a =1;
     })
     $(".downlist").mouseleave(function(){
        window.b=1;
    })
    setInterval(function(){
       // console.log(window.a +" "+ window.b);
            if(window.a&&window.b){
                $(".downlist").hide();//当鼠标不在一级导航栏和二级导航栏上时将二级隐藏
            }
    },
    100)
    //100ms的定时器
    $(".header-bottom").find("li").mouseenter(function(){
        $(this).children(".span1").css("display","block")
    })
    $(".header-bottom").find("li").mouseleave(function(){
        $(this).children(".span1").css("display","none")
    })
    let userMsg = localStorage.getItem("userMsg") ?JSON.parse(localStorage.getItem("userMsg")):[];
    var i=0;
    var onoff =userMsg.some((val,idx)=>{
        i= idx;
        return val.onoff ===1;
    })
    if(onoff){
        $(".topbar-user").hide();
        $(".logMsg").show();
    }
});