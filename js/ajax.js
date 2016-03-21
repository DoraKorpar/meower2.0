function ajaxGet(url, onSuccess) {
  var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	   if (xhttp.readyState == 4 && xhttp.status == 200) {
		     onSuccess(xhttp.responseText);
       }
	};
	xhttp.open("GET", url , true);

	document.getElementById("more-button").disabled = true;
	document.getElementById("more-button").style.color = "grey";
	document.getElementById("more-button").style.cursor = "wait";
	setTimeout(function() {
		xhttp.send();
		document.getElementById("more-button").disabled = false;
		document.getElementById("more-button").style.color = "black";
		document.getElementById("more-button").style.cursor = "auto";
	}, 2000);
}
