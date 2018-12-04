
function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById('menu').style.display = document.getElementById('menu').style.display =='block' ?   'none' : 'block';
}

function list_number() {

  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {    // IE 5/6
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  array_list = objDoc.getElementsByTagName("movie_index")[0].getElementsByTagName("movie").length;

  var viewportWidth = screen.width;

  for (var i = 1; i <= array_list; i++) {

    if(viewportWidth <= 320 && i > 4)
      break;
    else if(viewportWidth > 720)
      ;
    else if(i > 5)
      break;

    var icon_li = document.createElement("li");
      icon_li.setAttribute("id", "pagenation_li"+i);

    var icon_a = document.createElement("a");
      icon_a.setAttribute("href", objDoc.getElementsByTagName("movie_index")[0].getElementsByTagName("movie")[i-1].getElementsByTagName("name")[0].childNodes[0].nodeValue);
      icon_a.appendChild(document.createTextNode(i));

    var ul = document.getElementById("pagenation");
      ul.appendChild(icon_li);

    var li = document.getElementById("pagenation_li"+i);
      li.appendChild(icon_a);
  }
}

function movie_list() {
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {    // IE 5/6
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhttp.open("GET", "movie_index.xml", false);
  xhttp.send(null);
  var objDoc = xhttp.responseXML;

  array_list = objDoc.getElementsByTagName("movie_index")[0].getElementsByTagName("movie").length;

  for (var i = 0; i < array_list; i++) {

    var ul = document.getElementById("introduce_for_write");
    var hypun = document.createElement("hr");
      ul.appendChild(hypun);

    var urlLink = document.createElement("a");
      urlLink.setAttribute("class", "hype_list");
      urlLink.setAttribute("href", objDoc.getElementsByTagName("movie_index")[0].getElementsByTagName("movie")[i].getElementsByTagName("url")[0].childNodes[0].nodeValue);
      urlLink.appendChild(document.createTextNode(objDoc.getElementsByTagName("movie_index")[0].getElementsByTagName("movie")[i].getElementsByTagName("name")[0].childNodes[0].nodeValue));

    var h2Link = document.createElement("H2");
      h2Link.setAttribute("style", "color:center");
      h2Link.setAttribute("align", "center");
      h2Link.appendChild(urlLink);
      ul.appendChild(h2Link);

  }
}
