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
	}, function() {
		$(this).slideUp("100");
	})
});

$(".product").click(function() {
	$(".clickGet").css("left", $(this).offset().left + "px");
	$(".clickGet").css("width", $(this).outerWidth() + "px");
	$(".clickGet").slideToggle("500");
});

$(".nav-sub li").each(function() {
	$(".nav-sub li").mouseover(function() {
		$(".nav-sub li").attr("class", "mCate");
		$(this).addClass("mouseOn");
		$(".subNav").css("display", "none");
		var index = $(".nav-sub li").index($(this));
		$(".subNav").eq(index).css("display", "flex")
	})
	$(".nav-sub li").mouseout(function() {
		$(".nav-sub li").attr("class", "mCate");
		$(".subNav").css("display", "none");
	})
})

var bannerIndex = 0;
var timer = null;
$(".mainBanner a img").eq(bannerIndex).css("opacity", "1");
$(".mainBanner ul li").eq(bannerIndex).css("backgroundColor", "#e02445");
setInter();

function setInter() {
	timer = setInterval(function() {
		$(".mainBanner a img").eq(bannerIndex).css("opacity", "0");
		$(".mainBanner ul li").eq(bannerIndex).css("backgroundColor", "#fff");
		bannerIndex++;
		if (bannerIndex == 5) {
			bannerIndex = 0;
		}
		$(".mainBanner a img").eq(bannerIndex).css("opacity", "1");
		$(".mainBanner ul li").eq(bannerIndex).css("backgroundColor", "#e02445");
	}, 2000)
}
$(".mainBanner").hover(function() {
	clearInterval(timer);
}, function() {
	setInter();
})
$(".mainBanner ul li").each(function() {
	$(this).mouseover(function() {
		var index = $(".mainBanner ul li").index($(this));
		$(".mainBanner a img").eq(bannerIndex).css("opacity", "0");
		$(".mainBanner ul li").eq(bannerIndex).css("backgroundColor", "#fff");
		bannerIndex = index;
		$(".mainBanner a img").eq(bannerIndex).css("opacity", "1");
		$(".mainBanner ul li").eq(bannerIndex).css("backgroundColor", "#e02445");
	})
})
$(".newCon li").each(function() {
	$(this).mouseover(function() {
		$(".newCon .newMes").attr("class", "newMes");
		$(".newCon li").attr("class", "");
		$(this).addClass("hoverMes");
		var index = $(".newCon li").index($(this));
		$(".newCon .newMes").eq(index).addClass("show");
		$(".newCon .newMes").eq(index).css("left", "0px");
	})
})
var itemIndex = 1;
var timer1 = null;
$(".infoBanner ul li").eq(0).css("backgroundColor", "#e02445");
setItemInter();

function setItemInter() {
	timer1 = setInterval(function() {
		itemIndex++;
		if (itemIndex == 6) {
			$(".infoBanner .itemList").css("transition", "0s");
			$(".infoBanner .itemList").css("left", "-340px");
			setTimeout(function() {
				$(".infoBanner .itemList").css("transition", "0.5s");
				itemIndex = 2;
				$(".infoBanner .itemList").css("left", -340 * itemIndex + "px");
				$(".infoBanner ul li").css("backgroundColor", "#fff");
				$(".infoBanner ul li").eq(itemIndex - 1).css("backgroundColor", "#e02445");
			}, 16.7)
		} else {
			$(".infoBanner .itemList").css("left", -340 * itemIndex + "px");
			if (itemIndex == 5) {
				$(".infoBanner ul li").css("backgroundColor", "#fff");
				$(".infoBanner ul li").eq(0).css("backgroundColor", "#e02445");
			} else {
				$(".infoBanner ul li").css("backgroundColor", "#fff");
				$(".infoBanner ul li").eq(itemIndex - 1).css("backgroundColor", "#e02445");
			}
		}
	}, 2000)
}
$(".infoBanner ul li").each(function() {
	$(this).mouseover(function() {
		itemIndex = $(".infoBanner ul li").index($(this)) + 1;
		$(".infoBanner ul li").css("backgroundColor", "#fff");
		$(".infoBanner ul li").eq(itemIndex - 1).css("backgroundColor", "#e02445");
		$(".infoBanner .itemList").css("left", -340 * itemIndex + "px");
	})
})
$(".infoBanner").mouseover(function() {
	clearInterval(timer1);
})
$(".infoBanner").mouseout(function() {
	setItemInter();
})


var lock = -1;
var activeFloor = 0;
//设置页面的滚动高度
$(".btns .btn").each(function() {
	$(this).click(function() {
		$(".btns .btn").eq(activeFloor).removeClass("active");
		activeFloor = $(".btns .btn").index($(this));
		$(".btns .btn").eq(activeFloor).addClass("active");
		var end = $(".floor").eq(activeFloor).offset().top;
		scrollTo(end, 500);
	})
})

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

window.onscroll = function() {
	//获取窗口滚动高度
	var st = document.body.scrollTop || document.documentElement.scrollTop;
	if(st > 200){
		$(".fixLogo").css("display","block");
	}else{
		$(".fixLogo").css("display","none");
	}
	if(st > 980){
		$(".btns").css("display","block");
		//倒着循环 寻找符合 的元素
		for (var i = $(".floor").length - 1; i >= 0; i--) {
			//获取每个楼层的offsetTop
			var ot = $(".floor").eq(i).offset().top;
			//不能直接判断相等  滚动过快 可能会跳过相等的值  所以确定一个范围
			if (st + window.innerHeight / 2 >= ot) {
				//在相同范围内 只执行一次  不会在滚动的时候 一直执行
				if (i != lock) {
					lock = i;
					//把上一个按钮清除样式
					$(".btns .btn").eq(activeFloor).removeClass("active");
					//获得此次i值
					activeFloor = i;
					//添加样式
					$(".btns .btn").eq(activeFloor).addClass("active");
				}
				//找到之后 直接退出循环
				break;
			}
		}
	}else{
		$(".btns").css("display","none");
	}
	
}

$(".icons .topIcon").click(function(){
	scrollTo(0,1000);
})