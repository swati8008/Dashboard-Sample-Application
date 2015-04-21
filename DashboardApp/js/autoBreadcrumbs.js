function breadcrumbs() {
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
