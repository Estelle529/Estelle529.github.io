var timer = null;
$(".phone").hover(function() {
	$(".phoneImg").slideDown("100");
	$(".phoneImg").css("left", $(".phone").offset().left + "px");
}, function() {
	$(".phoneImg").slideUp("100");
})

$(".rightFlex").each(function() {
	$(this).hover(function() {
		var index = $(".rightFlex").index($(this));
		$(".hovGet").eq(index).slideDown("100");
		if (index == 5) {
			$(".hovGet").eq(index).css("left", $(this).offset().left + $(this).outerWidth() - $(".hovGet").eq(index).outerWidth() +
				"px");
		} else {
			$(".hovGet").eq(index).css("left", $(this).offset().left + "px");
		}
		if (index == 0 || index == 1 || index == 2 || index == 4) {
			$(".hovGet").eq(index).css("width", $(this).outerWidth() + "px");
		}
	}, function() {
		//this指的是 放上去的rightFlex
		var that = this;
		timer = setTimeout(function() {
			var index = $(".rightFlex").index($(that));
			$(".hovGet").eq(index).slideUp("100");
		}, 200);
	})
})
$(".hovGet").each(function() {
	$(this).hover(function() {
		clearTimeout(timer);
	},function(){
		$(this).slideUp("100");
	})
});
