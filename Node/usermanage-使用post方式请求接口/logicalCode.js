const http=require('http');
const fs=require('fs');
const qs=require('querystring');
const URL=require('url');
let arr=[
	{username:'小红',passwords:'123456'},
	{username:'管管',passwords:'123456'},
	{username:'脏脏',passwords:'123456'}
];
let txt={
	code:0
}
const server=http.createServer((request,response)=>{
	console.log(request.url);
	const url='www'+(request.url=='/'?'/index.html':request.url);
	const path=URL.parse(request.url,true);
	let j=null;
	if(path.pathname=='/user'){
		let str='';
			request.on('data',(data)=>{
				str+=data;
			
			})
			request.on('end',()=>{
				j=qs.parse(str);
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
			})
			
			
	}else if(/html$|txt$/.test(url)){
		fs.readFile(url,(error,data)=>{
			response.write(data);
			response.end();
		})
	}
	
})
server.listen(91);
