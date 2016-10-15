function newQuote() {
  var xhttp;
  if (window.XMLHttpRequest) {
    // Code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // Code for IE6, IE5
    xhttp = new ActiveObject("Microsoft.XMLHTTP");
  }

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var quoteText = JSON.parse(xhttp.responseText).quote;
      var authorText = JSON.parse(xhttp.responseText).author;
      document.getElementById("quote").innerHTML = quoteText;
      document.getElementById("author").innerHTML = authorText;
    }
  };

  xhttp.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous", true);
  xhttp.setRequestHeader("X-Mashape-Key", "OLyWMXP4Hpmsho9yJz41Fp7LvLhUp14cUeGjsn0nu40f5VXQBZ");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}

function tweet() {
  var quote = document.getElementById("quote").innerHTML;
  var author = document.getElementById("author").innerHTML;
  var str = quote + " - " + author;
  if ( str.length > 140 ) {
    var d = author.length + 6;
    var str = quote.substr( 0, ( 140 - d ) ).concat("... - ").concat(author)
  }
  window.open("https://twitter.com/intent/tweet/?text=" + str);
}

window.onload(newQuote());

