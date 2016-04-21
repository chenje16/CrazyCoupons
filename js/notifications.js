$(document).ready(function(){
	$(".notify").find("div.ui-slider").click(function(e) {
		var selector = $("#select-time");
		var state = selector.prop("disabled");
		selector.selectmenu(state ? "enable" : "disable");
	});
	
});