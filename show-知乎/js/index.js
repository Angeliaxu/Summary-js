(function(){
	var pixelRatio = 1 / window.devicePixelRatio;
	document.write('<meta name="viewport" content="width=device-width,initial-scale='+ pixelRatio +',minimum-scale='+ pixelRatio +',maximum-scale='+ pixelRatio +',user-scalable=no" />');	
	//获取html节点
	var html = document.getElementsByTagName('html')[0];
	//获取屏幕宽度
	var pageWidth = html.getBoundingClientRect().width;
	//html的字号
	html.style.fontSize = pageWidth/16 + 'px';
	
	
	
})()

		