function breadcrumbs(e) {
  var final =  setActive(e);
  var title ="DashBoard"
  var output = "<div class='breadcrumb'><a href=#/>"+ title.toUpperCase()+"</a> <span class='chevron right'>    </span";
  var dc=document.getElementById('bcrumbs');
  dc.innerHTML="";
  output = output+ "<span class='page'>" + final +  "</span></div>"
  var newo = document.createElement('div');
  newo.innerHTML=output;
  dc.appendChild(newo);
 }

 function setActive(e)
 {
  if( e!=null)
   {
      var sender = e.srcElement || e.target;
      var senderparent = e.srcElement || e.target;

     if(senderparent!= null)
      {
        senderparent = senderparent.parentNode.parentNode;
        if (senderparent && senderparent.nodeName.toLowerCase() == "ul")
          {
              var arrli = senderparent.getElementsByTagName("li");
             for (var i = 0; i < arrli.length; i++) {
                    arrli[i].setAttribute('class','');
              }
              var li = sender.parentNode;
              li.setAttribute('class','active');
              li.className ='active';
           }
        }
    }
     else
    {
        var li = document.getElementById('ulmenu').getElementsByTagName("li")[0];
        li.setAttribute('class','active');
    }
    return li.innerText;
 }

