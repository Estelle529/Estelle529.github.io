var pool = require("./pool");

function hotList(request,response){
	//获取参数
	var page = request.query.page*1 || 1;
	
	//建立连接
	pool.getConnection(function(err,connection){
		connection.query("select * from goods where goodType = 'hot' limit ?,5",[(page-1)*5],function(err,data){
			response.send(data);
			pool.releaseConnection(connection);
		})
	})
}

module.exports = hotList;