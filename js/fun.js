window.onload=function(){
    var w=document.body.clientWidth;
    var li_arr=document.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var li_arr1=document.getElementsByTagName("ul")[1].getElementsByTagName("li");
    li_arr1[0].style.cssText="background:black;width:30px";
    var a=1;
    for(var i=0;i<li_arr.length;i++){
        li_arr[i].style.width=w+"px";
        var img=document.createElement("img");
        img.setAttribute("src","image/banner_"+a+".jpg");
        li_arr[i].appendChild(img);
        a++;
        if(a>4){
            a=1;
        }
    }
    var lb=document.getElementsByTagName("ul")[0];
    lb.style.width=li_arr.length*w+"px";
    var b=1;
    function fun_lb(num){
        var z=100;
        var n;
        var n1=1;
        if(num){
            num--;
            if(num*w>lb.offsetLeft*(-1)){
                n=(num*w+lb.offsetLeft)/z;
            }else{
                n=(lb.offsetLeft+num*w)/z*(-1);
                n1=-1;
            }
        }else{
            n=w/z;
        }
        if(lb.offsetLeft+w*(li_arr.length-1)==0){
            lb.style.left="0px";
        }else{
            var timer=setInterval(function(){
                lb.style.left=lb.offsetLeft-z*n1+"px";
                n--;
                if(n<1){
                    lb.style.left=lb.offsetLeft-z*n*n1+"px";
                    clearInterval(timer);
                }
            },10);
        }
        li_arr1[b].style.cssText="background:black;width:30px";
        for(p in siblings(li_arr1[b])){
            siblings(li_arr1[b])[p].style.cssText="background:white;width:20px";
        }
        b++;
        if(b==li_arr.length){
            b=0
        }
    }
    function siblings(elm){
        var arr=[];
        var p=elm.parentNode.children;
        for(var i=0;i< p.length;i++){
            if(p[i]!=elm){
                arr.push(p[i]);
            }
        }
        return arr
    }
    timer1=setInterval(fun_lb,1500);
    document.getElementsByTagName("ul")[1].onclick=function(event){
        var e=event || window.event;
        var esrc= e.srcElement;
        for(var i=0;i<li_arr1.length;i++){
            if(esrc==li_arr1[i]){
                b=i;
                fun_lb(i+1);
            }
        }
    };
    document.getElementsByTagName("ul")[1].onmouseover=function(){
        clearInterval(timer1)
    };
    document.getElementsByTagName("ul")[1].onmouseout=function(){
        timer1=setInterval(fun_lb,1500)
    }
}