window.addEventListener('resize', function() {
	changeBack("http://wallpaper-download.net/wallpapers/random-wallpapers-blue-pattern-background-wallpaper-32590.jpg");
}, false)

function changeBack(url) {
	if(window.matchMedia("(min-width:600px)").matches) {
		document.body.style.background = "url("+url+")";
	} else {
		document.body.style.background = "blue";
	}
}


changeBack("http://wallpaper-download.net/wallpapers/random-wallpapers-blue-pattern-background-wallpaper-32590.jpg");