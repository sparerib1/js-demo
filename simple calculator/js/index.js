window.onload=function(){
    var num=document.getElementsByClassName("but");
    var scr=document.getElementsByClassName("screen")[0];
    for(var i=0;i<num.length;i++){
        num[i].onclick=function(){
            if(this.value=="C"){
                scr.value="";
            }
            else if(scr.value!=""&&this.value=="退格"){
                scr.value=scr.value.substr(0,scr.value.length-1);
            }
            else if(this.value=="="){
                scr.value=eval(scr.value);
            }
            else if(scr.value==""&&(this.value=="+"||this.value=="-"||this.value=="*"||this.value=="/")){
                scr.value="";
            }
            else if(scr.value==""&&this.value=="."){
                scr.value="0.";
            }
            else if(scr.value==""&&this.value=="退格"){
                scr.value="";
            }
            else{
                scr.value=scr.value+this.value;
            }
        }
    }
}