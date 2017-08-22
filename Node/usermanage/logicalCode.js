const http=require('http');
const fs=require('fs');
let arr=[
	{username:'徐畅',passwords:'123456'},
	{username:'管管',passwords:'123456'},
	{username:'脏脏',passwords:'123456'}
];
let txt={
	code:0
}
const server=http.createServer((request,response)=>{
	const url='www'+(request.url=='/'?'/index.html':request.url);
	if(/user/.test(request.url)){
			const userinfo=request.url.split('?')[1];
			const arr1=userinfo.split('&');
			const j={};
			arr1.forEach(function(e,i){	
				const str=e.split('=');
				j[str[0]]=str[1];
				
			})
			j.username = decodeURI(j['username']);
			if(j.act=='register'){
				if(arr.find((e)=>e.username==j.username)){
					txt.mg="该用户名已被注册，请更换另一个名字";
				}else{
					txt.code=1;
					txt.mg="注册成功";
					arr.push(j);
				}
				
			}else if(j.act=='login'){
					txt.code=1;
					txt.mg="登录成功";
			}
			
			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			response.write(JSON.stringify(txt));
			response.end();
	}else if(/html$|txt$/.test(url)){
		fs.readFile(url,(error,data)=>{
			response.write(data);
			response.end();
		})
	}
	
})
server.listen(90);
