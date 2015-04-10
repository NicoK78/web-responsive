window.addEventListener('resize', function() {
	changeBack("http://wallpaper-download.net/wallpapers/random-wallpapers-blue-pattern-background-wallpaper-32590.jpg");
}, false)

document.getElementById("mybutton").addEventListener('touchstart', function () {
	console.log(123);
	displayDiv();
}, false)

function displayDiv() {
	// if(document.getElementById("mydiv").style.display = none)
	if(document.getElementById("mydiv").classList.contains("displayDiv")) {
		console.log("contains");
		document.getElementById("mydiv").classList.remove("displayDiv");
	}
	else {
		console.log("not contains");
		document.getElementById("mydiv").classList.add("displayDiv");
	}
}

function changeBack(url) {
	if(window.matchMedia("(min-width:600px)").matches) {
		document.body.style.background = "url("+url+")";
	} else {
		document.body.style.background = "blue";
	}
}


changeBack("http://wallpaper-download.net/wallpapers/random-wallpapers-blue-pattern-background-wallpaper-32590.jpg");