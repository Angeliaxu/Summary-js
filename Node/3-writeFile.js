const fs=require('fs');
 fs.writeFile('2.txt','to be or not to be',(error,data)=>{
 	if(error){
 		console.log('faild');
 	}else{
 		console.log('success');
 	}
 })
//写入本地文件