window.onload=function(){
    var mon=document.getElementsByTagName("li");
    var description=document.getElementById("description");
    var tex=[
        "元旦节，1月1日，休息1天。",
        "情人节，2月14日。",
        "妇女节，3月8日；植树节3月12日。",
        "清明节，4月4日，休息三天。",
        "劳动节，5月1日，休息五天。",
        "端午节，6月25，休息三天。",
        "建党节，7月1日。",
        "建军节，8月1日。",
        "教师节，9月10日。",
        "国庆节，10月1日，休息七天。",
        "平淡的一个月。",
        "圣诞节，12月25日。"
    ];
    for(var i=0;i<mon.length;i++)
    {   mon[i].index=i;
        mon[i].onmouseover=function(){
            this.className="chang";
            description.firstChild.nodeValue=tex[this.index];
            
            
        }
        mon[i].onmouseout=function(){
            this.className="";
            description.firstChild.nodeValue="滑动鼠标查看每个月有哪些节日";
        }
    }
    
}