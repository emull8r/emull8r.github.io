$(document).ready(function(){
	$(".mocs img").mouseenter(function(){
		$(this).attr("z-index","1");
		$(this).attr("width","600");
	});
	$(".mocs img").mouseleave(function(){
		$(this).attr("z-index", "0");
		$(this).attr("width","200");
	});
});