let http=require('http');
const fs=require('fs');
//console.log(http);

//通过http模块创建了一个服务器
const server=http.createServer((request,response)=>{
	//request :请求。可以访问到浏览器发送的信息
	//reponse:响应，向浏览器发送信息
	//浏览器发送请求，服务器读取本地文件，返回给浏览器，前端是无法操作本地文件的
	response.write('hello');
	response.end();
	console.log(request.url);
})
console.log(fs);
//listen里面放端口号,能够监听到起的服务，在浏览器输入localhost：88，服务器就响应
server.listen(88);
