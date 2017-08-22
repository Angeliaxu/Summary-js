
const fs=require('fs');
fs.readFile('1.txt',(error,data)=>{
	if(error){
		console.log('Nothave');
	}else{
		console.log(data.toString());
	}
})
//读取本地文件
