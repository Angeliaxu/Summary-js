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
$url='http://www.wookmark.com/api/json/popular?page='.$cpage;
$content=file_get_contents($url);
$context=iconv('gbk','utf-8',$content);
echo $content;
?>