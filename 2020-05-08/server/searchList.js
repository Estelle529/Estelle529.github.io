var pool = require("./pool");

function searchList(request,response){
	//获取参数
	var key = request.query.key;
	if(key){
		//建立连接
		pool.getConnection(function(err,connection){
			connection.query("select * from goods where title like '%" + key + "%' ",function(err,data){
				response.send(data);
				pool.releaseConnection(connection);
			})
		})
	}else{
		response.send("请检查搜索关键词");
	}
	
}

module.exports = searchList;