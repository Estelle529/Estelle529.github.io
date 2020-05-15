var http = require("http");
var fs = require("fs");

var Server = http.createServer(function(request,response){
	fs.readFile("index.html",function(err,data){
		response.end(data);
	})
})

Server.listen(3030);
console.log("服务已经启动---localhost:3030")