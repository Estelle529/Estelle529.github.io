function getParameters() {
	var str = location.search.replace("?", "");
	var arr = str.split("&");
	var parameters = {};
	for (var i = 0; i < arr.length; i++) {
		var arr1 = arr[i].split("=");
		parameters[arr1[0]] = arr1[1];
	}
	return parameters;
}


function getData(methord,path,params,callback){
		//显示加载图标
		$(".loading").css("display","block");
		//发起请求
		$.ajax({
			type:methord,
			url:"http://vebcoder.cn:9090/"+path,
			data:params,
			success:function(res){
				//隐藏加载图标
				$(".loading").css("display","none");
				callback(res.data);
			}
		});
}