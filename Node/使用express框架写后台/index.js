const express=require ('express');
const app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));

let arr=[
	{username:'小红',passwords:'123456'},
	{username:'管管',passwords:'123456'},
	{username:'脏脏',passwords:'123456'}
];
let txt={
	code:0
}
app.get('/user',function(req,res){
		let j=req.query;
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
	res.send(JSON.stringify(txt));
})
app.use(express.static('www'));
app.listen(92);



//使用post方式请求的接口
//app.post('/user',function(req,res){
//	let j=req.body;
//	if(j.act=='register'){
//				if(arr.find((e)=>e.username==j.username)){
//					txt.mg="该用户名已被注册，请更换另一个名字";
//				}else{
//					txt.code=1;
//					txt.mg="注册成功";
//					arr.push(j);
//				}
//				
//			}else if(j.act=='login'){
//					txt.code=1;
//					txt.mg="登录成功";
//			}
//	res.send(JSON.stringify(txt));
//})