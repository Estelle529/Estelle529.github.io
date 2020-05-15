var pool = require("./pool");

function getList(request,response){
	//获取参数
	var page = request.query.page*1 || 1;
	var size = request.query.size*1 || 5;
	var type_one = request.query.type_one || "饮食";
	
	//建立连接
	pool.getConnection(function(err,connection){
		connection.query("select * from goods where type_one = ? limit ?,?",[type_one,(page-1)*size,size],function(err,data){
			response.send(data);
			pool.releaseConnection(connection);
		})
	})
}

module.exports = getList;