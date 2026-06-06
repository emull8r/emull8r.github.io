$(document).ready(function(){
	var randomChoices = ["fantasy/Airboat.jpg", "fantasy/Metal_Valkyrie.jpg", "fantasy/Passageway_Panic_main.jpg"]
	$("#randomImage").attr("src","pics/mocs/" + randomChoices[Math.floor(Math.random()*randomChoices.length)]);
});