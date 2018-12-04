
function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById('menu').style.display = document.getElementById('menu').style.display =='block' ?   'none' : 'block';
}

function list_number() {

  var browser = navigator.userAgent.toLocaleLowerCase();
  var objDoc;

  if (browser.indexOf('firefox') != -1) {
      objDoc = document.implementation.createDocument("", "", null);
      objDoc.async = false;
      objDoc.load("movie_index.xml");
  } else if (browser.indexOf('trident') != -1) {
      objDoc = new ActiveXObject("MSXML.DOMDocument");
      objDoc.async = false;
      objDoc.load("movie_index.xml");
  } else {
    // Chrome, Safari, Opera
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "movie_index.xml", true); // https://xhr.spec.whatwg.org/#the-open%28%29-method
      objDoc = xhttp.responseXML;
      xhttp.send(null);
  }

  array_list = objDoc.childNodes.length;

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
      icon_a.setAttribute("href", array_list[i-1]);
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
  xhttp.onreadystatechange = function(){
    
    var objDoc = xhttp.responseXML; 

  }

  array_list = objDoc.childNodes.length;

  for (var i = 0; i < array_list; i++) {

    var urlLink = document.createElement("a");
      urlLink.setAttribute("href", objDoc.getElementById("movie_index")[i].getElementById("movie")[0].childNodes[0].nodeValue);
      urlLink.createTextNode(document.createTextNode(objDoc.getElementById("movie_index")[i].getElementById("movie")[1].childNodes[0].nodeValue));

    var ul = document.getElementById("introduce_for_writexml");
      ul.appendChild(urlLink);

    var hypun = document.createElement("hr");
      ul.appendChild(hypun);
  }
}
