window.onload=function(){
    var pic=document.getElementsByTagName("li");
    for(var i=0;i<pic.length;i++){
        pic[i].onmouseover=function(){
            this.className="crent"
        }
        pic[i].onmouseout=function(){
            this.className=""
        }
    }
}

