<?php
	header('Content-type:text/html;charset="utf-8');
/*
 API：
 	getPics.php
 	
 	参数：
 		cpage：获取数据的页数
 * 
 * */
//isset函数判断一个变量是否被定义过	
$cpage=isset($_GET['cpage'])? $_GET['cpage']:1;
//获取数据的url地址，.的意思是链接字符串。
$url='http://www.wookmark.com/api/json/popular?page='.$cpage;
//把整个文件读入一个字符串中。
$content=file_get_contents($url);
//转化编码从gbk格式转换成utf-8格式。
$context=iconv('gbk','utf-8',$content);
echo $context;
?>