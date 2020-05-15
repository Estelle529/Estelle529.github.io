var express = require("express");
var bodyParser = require("body-parser");

//实列化 express
var app = new express();

//指定静态资源目录为public
app.use(express.static("public"));

//处理post请求的参数
app.use(bodyParser.urlencoded());

//商品列表
var getList = require("./server/getList");
app.get("/getList",getList);

//热品列表
var hotList = require("./server/hotList");
app.get("/hotList",hotList);

//搜索商品
var searchList = require("./server/searchList");
app.get("/searchList",searchList);

//一级分类
var category = require("./server/category");
app.get("/category",category);

//注册
var register = require("./server/register");
app.post("/register",register);

app.listen(3030);
console.log("服务已经开启---localhost:3030");