<?php
	header('Content-type:text/html;charset="utf-8');
//获取数据的url地址，.的意思是链接字符串。
$url='https://news-at.zhihu.com/api/4/news/latest';
//把整个文件读入一个字符串中。
$content=file_get_contents($url);
//转化编码从gbk格式转换成utf-8格式。
//$context=iconv('gbk','utf-8',$content);
echo $content;
?>