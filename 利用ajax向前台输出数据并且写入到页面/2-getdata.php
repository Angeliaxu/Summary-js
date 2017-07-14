<?php
	header('content-type:text/html;charset="utf-8"');
	error_reporting(0);
	$news=array(
		array('title'=>'李克强为何要求《快递条例（草案）》 公开征求全社会意见？','data'=>'2017-7-14'),
		array('title'=>'中国驻日使馆:失联的中国籍姐妹遇害|嫌犯被控制 与姐姐有感情纠葛','data'=>'2017-7-14'),
		array('title'=>'临沂暴走团装备升级再上路:持荧光棒穿反光服','data'=>'2017-7-14'),
		array('title'=>'女子用假户口簿让女儿上真名校|成都突遭暴雨袭击 路边女子被吹飞','data'=>'2017-7-14'),
		array('title'=>'纵火保姆首发声:并未蓄意谋杀|尴尬！女子跳楼被丝袜勾住坠至空调','data'=>'2017-7-14'),
		array('title'=>'纵火保姆首发声:并未蓄意谋杀|尴尬！女子跳楼被丝袜勾住坠至空调','data'=>'2017-7-14'),
		array('title'=>'尼泊尔8月将接入中国互联网|菲前总统被控罪 面临刑事及贪污控告','data'=>'2017-7-14')
	);
	echo json_encode($news);
?>
