$(document).ready(function(){
	var randomChoices = ["Pin.png", "Axle.png", "plate.png", "tile.png"]
	$("#antiSpamImage").attr("src","pics/" + randomChoices[Math.floor(Math.random()*randomChoices.length)]);
});