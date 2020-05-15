var pool = require("./pool");

function category(request,response){
	//建立连接
	pool.getConnection(function(err,connection){
		connection.query("select type_one from goods group by type_one",function(err,data){
			var arr = [];
			for(var i = 0; i < data.length; i++){
				arr.push(data[i].type_one);
			}
			response.send(arr);
			pool.releaseConnection(connection);
		})
	})
}

module.exports = category;