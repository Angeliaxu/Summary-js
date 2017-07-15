function ajax(method,urls,data,success){
	var t=null;
			try{
				t=new XMLHttpRequest();
			}catch(e){
				//TODO handle the exception
				t=new ActiveXObject('Microsoft.XMLHTTP');
			}
			//提交方式为get，并且有data值存在，把data值塞入到url中提交
			if(method=='get'&&data){
				urls+='?'+data;
			}
			t.open(method,urls,true);
			//如果提交方式为post，直接无参数提交，否则使用post提交数据
			if(method=='get'){
				t.send();
			}else{
				t.setRequestHeader('content-type','application/x-www-form-urlencoded');
				t.send(data);
			}
			t.onreadystatechange=function(){
				if(t.readyState==4){
					if(t.status==200){
						success&&success(t.responseText);
						}
						
					}
				}
			}

