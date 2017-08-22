const http=require('http');
const fs=require('fs');
const server=http.createServer((request,response)=>{
	const url=request.url;
	switch(url){
		case '/example.html':
			fs.readFile('example.html',(error,data)=>{
				response.write(data);
				response.end();
			})
			break;
		case '/json':
			response.write(
				'{name:"小红",age:18}');
			response.end();
			break;
		case '/':
			fs.readFile('index.html',(error,data)=>{
				response.write(data);
				response.end();
			})
			break;
		default :
			response.write('404,你要找的页面不存在');
			response.end();
			break;
	}
	
})
server.listen(89);
/*
 	过程：先创建一个服务器，然后创建一个端口，createServer里面有两个参数，第一个参数是接受从
 	浏览器端发过来的请求。可以使用request.url来获取浏览器发过来的url，浏览器页面与服务器页面在
 	同一个在同一级目录下。
 		然后根据浏览器端请求地址来匹配，读取根目录文件，并输出到页面当中。
 * 
 * 
 * */