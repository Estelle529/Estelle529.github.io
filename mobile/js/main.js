var last = {row:0,col:0};
var curr = {row:1,col:1};
var direction = {up:1,bottom:2,left:3,right:4};
//向上划
$(".page").swipeUp(function(){
	//当前页面变成上一张
	if(curr.row < 5 && curr.col != 2){
		last.row = curr.row;
		last.col = curr.col;
		curr.row = curr.row+1;
		go(1);
	}
});
//向下划
$(".page").swipeDown(function(){
	//当前页面变成上一张
	if(curr.row > 1 && curr.col != 2){
		last.row = curr.row;
		last.col = curr.col;
		curr.row = curr.row-1;
		go(2);
	}
});
//向左划
$(".page").swipeLeft(function(){
	//当前页面变成上一张
	if(curr.col < 2){
		last.row = curr.row;
		last.col = curr.col;
		curr.col = curr.col+1;
		go(3);
	}
});
//向右划
$(".page").swipeRight(function(){
	//当前页面变成上一张
	if(curr.col > 1){
		last.row = curr.row;
		last.col = curr.col;
		curr.col = curr.col - 1;
		go(4);
	}
});
function go(type){
	var lastPage = ".page-" + last.row + "-" + last.col;
	var currPage = ".page-" + curr.row + "-" + curr.col;
	var inClass = '';
	var outClass = '';
	switch(type){
		case direction.up:
		//如果向上滑，定义进场动画对应的类和出场动画对应的类
		inClass = "fromBottom";
		outClass = "toTop";
		break;
		case direction.bottom:
		//如果向下滑，定义进场动画对应的类和出场动画对应的类
		inClass = "fromTop";
		outClass = "toBottom";
		break;
		case direction.left:
		//如果向左滑，定义进场动画对应的类和出场动画对应的类
		inClass = "fromRight";
		outClass = "toLeft";
		break;
		case direction.right:
		//如果向右滑，定义进场动画对应的类和出场动画对应的类
		inClass = "fromLeft";
		outClass = "toRight";
		break;
	}
	$(lastPage).addClass(outClass);
	$(currPage).removeClass("hide").addClass("show");
	$(currPage).addClass(inClass);
	
	//动画执行完之后，清除类名，这样下次添加才能起作用
	setTimeout(function(){
		$(lastPage).removeClass("show").addClass("hide");
		$(lastPage).removeClass(outClass);
		$(currPage).removeClass(inClass);
	},600)
}