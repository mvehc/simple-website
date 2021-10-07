document.getElementById("click-me-button").addEventListener("click", () => {
	document.getElementById("click-me-button").innerHTML = "You Clicked Me!";
	setTimeout(() => {
		document.getElementById("click-me-button").innerHTML = "Click Me";
	}, 1000)
})