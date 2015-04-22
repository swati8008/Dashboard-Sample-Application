function breadcrumbs(e) {
  if(e!=null)
    setActive(e);
  else
    {
        var li = document.getElementById('ulmenu').getElementsByTagName("li")[0];
        li.setAttribute('class','active');
    }
  sURL = new String;
  var title ="DashBoard"
  var output = "<div class='breadcrumb'><a href=#/>"+ title.toUpperCase()+"</a> » ";
  var dc=document.getElementById('bcrumbs');
  dc.innerHTML="";
  sURL = location.href;
  sURL = sURL.slice(8,sURL.length);
  var scount = sURL.split("/");
  var final = scount[scount.length-2];
  output = output+ "<span>" + final +  "</span></div>"
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
  
 }

