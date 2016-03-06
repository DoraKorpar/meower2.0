document.addEventListener("DOMContentLoaded", function() {

	var replyButtons = document.getElementsByClassName("reply-button");

	for (var i = 0; i < replyButtons.length; i++) {
		replyButtons[i].addEventListener("click", function() {
			var replyNumber = this.dataset.index;
			var elemId = document.getElementById(replyNumber);
			elemId.toggle();
		});
		
	}
});