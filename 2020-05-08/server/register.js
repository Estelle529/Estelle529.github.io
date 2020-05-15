var pool = require("./pool");

function register(request, response) {
	//获取参数
	var uName = request.body.name;
	var passWord = request.body.password;
	//建立连接
	pool.getConnection(function(err, connection) {
		connection.query("select * from user where name = ?", [uName], function(err, data) {
			if (data.length > 0) {
				response.send("fail");
				pool.releaseConnection(connection);
			} else {
				connection.query("insert into user (name,pwd) values (?,?)", [uName, passWord], function(err, data) {
					if (!err) {
						response.send("success");
					}
					pool.releaseConnection(connection);
				})
			}
		})
	})
}

module.exports = register;
