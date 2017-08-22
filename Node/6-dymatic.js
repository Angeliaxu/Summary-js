const http=require('http');
const fs=require('fs');
const server=http.createServer((request,response)=>{
	const url='node'+request.url;
	
	console.log(url);
	if(/user/.test(url)){
		response.write('{"name":"小红"}');
		response.end();
	}else{
		fs.readFile(url,(error,data)=>{
			response.write(data);
			response.end();
		})
	}
})
server.listen(90);
