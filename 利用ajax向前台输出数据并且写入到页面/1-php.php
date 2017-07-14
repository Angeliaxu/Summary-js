<?php
	header('content-type:text/html;charset="utf-8"');
	error_reporting(0);
	
	//后端这里接受两个值
//	$username=$_GET['username'];
//	$age=$_GET['age'];
	$arr1=array('leo','momo','zhangshen');
/*	$arr2=array('username'=>'leo','age'=>32);*/
	/*echo "你的名字：{$username},年龄：{$age}"*/
	//类数组，其实是个字符串
	echo json_encode($arr1);
	//转换成json格式的数据
	/*echo json_encode($arr2);*/
?>