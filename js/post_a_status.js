document.addEventListener("DOMContentLoaded", function(event) {

document.getElementById("post-button").addEventListener("click", toggleVisibility);

function toggleVisibility() {
	var statForm = document.getElementById("status-form");
	statForm.toggle();
}
});