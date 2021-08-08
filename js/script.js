window.onload=function(){
    var ttop=document.getElementById("banner").offsetHeight;
    var daohanglan=document.getElementById("daohanglan");

    window.onscroll=function(){
        var backtop=document.documentElement.scrollTop||document.body.scrollTop;
        if(backtop>ttop){
            daohanglan.style.display="none";
        }
        else{
            daohanglan.style.display="";
        }
    }



}
function dhlulon(){
    var daohanglan=document.getElementById("daohanglan");
    var daohanglanbefore=document.getElementsByClassName("before");
    var daohanglanafter=document.getElementsByClassName("after");
    var container=daohanglan.getElementsByClassName("bgcontainer");
    container[0].classList.add("containerhover");
    // daohanglan.children[0].style.height="400px";
    // daohanglan.children[0].style.backgroundColor="white";
    //daohanglan.children[0].setAttribute("onmouseout","dhlbgc()");
    daohanglanbefore[0].style.display="none";
    daohanglanafter[0].style.display="block";
    
}


//stupid js
function dhldton(d){
    let daohanglanafter=document.getElementsByClassName("after")[0];
    let dl=daohanglanafter.querySelectorAll("li")[d];
    dl.classList.add("lihover");
    // let dd=dl.querySelectorAll("dd");
    
    // for(var i=0;i<dd.length;i++){
    //     dd[i].style.display="block";
    // }
    // var daohanglan=document.getElementById("daohanglan");
    // daohanglan.setAttribute("onmousemove","dhlt("+d+")");

}

function dhllioff(){
    let daohanglanafter=document.getElementsByClassName("after")[0];
    let dl=daohanglanafter.querySelectorAll("li");
    for(var i=0;i<dl.length;i++){
        var e=dl[i];
        e.classList.remove("lihover");
    }
}


// window.mtop=0;
// window.mleft=0;
// function dhlt(d){
//         window.onmousemove=function(e){
//             window.mtop=e.clientY;
//             window.mleft=e.clientX;
//         }
//         let daohanglanafter=document.getElementsByClassName("after")[0];
//         let dl=daohanglanafter.querySelectorAll("li")[d];
//         var etop=dl.getBoundingClientRect().top;
//         var eleft=dl.getBoundingClientRect().left;
//         var ewidth=dl.offsetWidth;
//         var eheight=dl.offsetHeight;
//         if(window.mtop-etop>eheight||window.mleft-eleft>ewidth||window.mtop-etop<0||window.mleft-eleft<0){
//             dhllioff(dl);
//             daohanglan.setAttribute("onmousemove","");
//         }
// }

// function dhllioff(dl){
//     var dd=dl.querySelectorAll("dd");
//     for(var i=0;i<dd.length;i++){
//         dd[i].style.display="none";
//     }
// }

function dhlbgc(){
    var daohanglan=document.getElementById("daohanglan");
    var daohanglanbefore=document.getElementsByClassName("before");
    var daohanglanafter=document.getElementsByClassName("after");
    var container=daohanglan.getElementsByClassName("bgcontainer");
    container[0].classList.remove("containerhover");
    daohanglanbefore[0].style.display="block";
    daohanglanafter[0].style.display="none";
}

function qyon(num){
    var quyuleft=document.getElementsByClassName("quyuleft")[0];
    var quyuli=quyuleft.querySelectorAll("li");
    for(var i=0;i<quyuli.length;i++){
        quyuli[i].style.color="#8E8E8E";
    }
    quyuli[num].style.color="white";
    var span=quyuli[num].querySelector("span");

    var quyuright=document.getElementsByClassName("quyuright")[0];
    quyudiv=quyuright.querySelectorAll("div");
    for(var i=0;i<quyudiv.length;i++){
        quyudiv[i].style.display="none";
    }
    quyudiv[num].style.display="block";
}

var n=0;

function qyoff(num){
    var quyuleft=document.getElementsByClassName("quyuleft")[0];
    var quyuli=quyuleft.querySelectorAll("li");
    var span=quyuli[num].querySelector("span");
    span.style.display="none";
    n=num;
    setTimeout(function(){var quyuleft=document.getElementsByClassName("quyuleft")[0];
    var quyuli=quyuleft.querySelectorAll("li");
    var span=quyuli[n].querySelector("span");
    span.style.display="inline-block";},50);
}