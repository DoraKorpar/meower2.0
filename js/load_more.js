document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("more-status").addEventListener("click", displayMoreStatuses);

  function displayMoreStatuses() {
    ajaxGet("statuses-1.html", function(string) {
      document.getElementById("statuses1").innerHTML = string ;
    });





    /* var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("statuses1").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "statuses-1.html", true);
  xhttp.send(); */


  }
});
