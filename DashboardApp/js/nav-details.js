function generateList(data) {
    var i, item, ref = {}, counts = {};
    function ul() {
        var newul = document.createElement('ul');  
         newul.setAttribute('id', 'ulmenu');
         newul.setAttribute('class', 'sidebar-menu');
        return newul;
    }

    function li(text, url) {
        var e = document.createElement('li');
         var aa = document.createElement('a');
         aa.href=url;  
         var s= document.createElement('span');
         s.appendChild(document.createTextNode(text));
         aa.appendChild(s);
         e.appendChild(aa);  
         e.addEventListener("click", breadcrumbs);
        return e;
    }

    ref[0] = ul();
    counts[0] = 1;
    for (i = 0; i < data.length; ++i) {
        ref[data[i].parentId].appendChild(li(data[i]['name'],data[i]['url'])); // create <li>
        ref[data[i].id] = ul(); // assume + create <ul>
        ref[data[i].parentId].appendChild(ref[data[i].id]);
        counts[data[i].id] = 0;
        counts[data[i].parentId] += 1;
    }

    for (i in counts) // for every <ul>
        if (counts[i] === 0) // if it never had anything appened to it
            ref[i].parentNode.removeChild(ref[i]); // remove it

    var navmain=document.getElementById('nav-menu');
    navmain.appendChild( ref[0]);
}

var data = [
    {'id': 1, 'parentId': 0, 'name': 'Campaigns', url:'#' },
    {'id': 1, 'parentId': 0, 'name': 'Accounts', url:'#' },
    {'id': 2, 'parentId': 0, 'name': 'Users', url:'#'},
    {'id': 3, 'parentId': 0, 'name': 'Downloads',url:'#' },
    {'id': 4, 'parentId': 0, 'name': 'Sales', url:'#'}
    ];
