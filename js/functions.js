function isAlpha(a) {
	var code = a.charCodeAt(0);
	if (code >= 65 && code <= 90) {
		return true;
	} else if (code >= 97 && code <= 122) {
		return true;
	} else {
		return false;
	}
}

function nameValidation() {
	var nameBox = document.getElementById("name");
	var name = nameBox.value;
	var success = true;
	for (var i = 0; i < name.length; i++) {
		if (isAlpha(name[i]) == false) {
			success = false;
		}
	}
	if (name.length < 4 || success == false) {
		nameBox.style.borderColor = "red";
	} else {
		nameBox.style.borderColor = "green";
	}
}

function messageValidation() {
	var messageBox = document.getElementById("message");
	var messageText = messageBox.value;
	var message = messageText.length;
	if (message > 10 && message < 30) {
		messageBox.style.borderColor = "green";
	} else {
		messageBox.style.borderColor = "red";
	}
}

function emailValidation() {
	var emailBox = document.getElementById("email");
	var email = emailBox.value;
	var pattern = /.+@.+\..+/;
	if (pattern.test(email)) {
		emailBox.style.borderColor = "green";
	} else {
		emailBox.style.borderColor = "red";
	}
}

function checkReason() {
	var options = document.getElementById("list");
	var productBox = document.getElementById("product");
	var label = document.getElementById("show")
	var opts = options.options;
	var index = options.selectedIndex;
	var selection = opts[index];
	if (selection.index == 2) {
		productBox.className = "show"
		label.className = "show"
	} else {
		productBox.className = "hide"
		label.className = "hide"
	}
}

function checkProduct() {
	var productBox = document.getElementById("product");
	var productText = productBox.value;
	if (productText == "ECHB1" || productText == "ECLB1" || productText == "TCL1" || productText == "TCC1" || productText == "EDS1" || productText == "EDM1" || productText == "EAL1" || productText == "EADS1" || productText == "#ECHB1" || productText == "#ECLB1" || productText == "#TCL1" || productText == "#TCC1" || productText == "#EDS1" || productText == "#EDM1" || productText == "#EAL1" || productText == "#EADS1") {
		productBox.style.borderColor = "green";
	} else {
		productBox.style.borderColor = "red";
	}
}

function scroll() {
	var scroll = window.scrollY;
	var slideIn = document.getElementById("slideIn");
	if (scroll > 1850) {
		slideIn.style.transform = "scale(1.5, 1.5)";
	}
}

function scrollFunction() {
	var scroll = window.scrollY;
	var para = document.getElementById("para");
	var m = -0.25;
	var b = 0;
	var newTop = m * scroll + b;
	para.style.backgroundPositionY = newTop + "px";
}
