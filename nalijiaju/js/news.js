var headBannerIndex = 0;
var headBannerTimer = null;
$(".headBanner img").eq(headBannerIndex).css("opacity", "1");
$(".headBanner .article").eq(headBannerIndex).addClass("active");
setHeadBanner();
function setHeadBanner(){
	headBannerTimer = setInterval(function() {
		$(".headBanner img").eq(headBannerIndex).css("opacity", "0");
		$(".headBanner .article").eq(headBannerIndex).removeClass("active");
		headBannerIndex++;
		if (headBannerIndex == 2) {
			headBannerIndex = 0;
		}
		$(".headBanner img").eq(headBannerIndex).css("opacity", "1");
		$(".headBanner .article").eq(headBannerIndex).addClass("active");
	}, 4000)
}

$(".headBanner").hover(function(){
	clearInterval(headBannerTimer);
},function(){
	setHeadBanner();
})

$(".headBanner .btns .pre").click(function() {
	$(".headBanner img").eq(headBannerIndex).css("opacity", "0");
	$(".headBanner .article").eq(headBannerIndex).removeClass("active");
	headBannerIndex--;
	if (headBannerIndex == -1) {
		headBannerIndex = 1;
	}
	$(".headBanner img").eq(headBannerIndex).css("opacity", "1");
	$(".headBanner .article").eq(headBannerIndex).addClass("active");
})

$(".headBanner .btns .next").click(function() {
	$(".headBanner img").eq(headBannerIndex).css("opacity", "0");
	$(".headBanner .article").eq(headBannerIndex).removeClass("active");
	headBannerIndex++;
	if (headBannerIndex == 2) {
		headBannerIndex = 0;
	}
	$(".headBanner img").eq(headBannerIndex).css("opacity", "1");
	$(".headBanner .article").eq(headBannerIndex).addClass("active");
})


$(".headBanner").css("height",$(".headBanner img").height()+"px");
window.onresize = function(){
	$(".headBanner").css("height",$(".headBanner img").height()+"px");
}



function scrollTo(end, time) {
	var start = document.body.scrollTop || document.documentElement.scrollTop;
	var x = start;
	var speed = (end - start) / time * 16.7;
	var timer = setInterval(function() {
		x += speed;
		if (start > end) {
			if (x <= end) {
				x = end;
				clearInterval(timer);
			}
		} else {
			if (x >= end) {
				x = end;
				clearInterval(timer);
			}
		}
		document.documentElement.scrollTop = x;
	}, 16.7);
}
$(".icons .gotoTop").click(function(){
	scrollTo(0,1000);
})