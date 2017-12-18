var http = require("http");
var url = require("url");
var router = require("./router")

function start(){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+ pathname+" received.");

		router.route(pathname);

		response.writeHead(200,{"Context-Type":"text/plain"});
		response.write("HELLO !!!");
		response.write("\n");
		response.end();
	}
	http.createServer(onRequest).listen(8888);

	console.log("服务已经启动");
};
exports.start = start;
