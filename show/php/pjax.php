<?php
	$id=$_GET['id'];
	$url='article.php?id='.$id;
echo '<head>
		<meta charset="UTF-8">
		<meta name="referrer" content="never">
		<title></title>
		<link rel="stylesheet" href="../css/header.css" />
		<link rel="stylesheet" href="../css/article.css" />
		<script src="../js/index.js"></script>
	</head>
	<body>
		<!--头部导航-->
		<header>
			<a href="javascript:;">☜</a>
			<a href="javascript:;">✍</a>
			<a href="javascript:;">❤</a>
		</header>
		<script type="text/javascript" src="../js/jquery-3.2.1.min.js">	</script>
		<script type="text/javascript">
			$.ajax({
				url:"'.$url.'",
				dataType:"json",
				type:"get",
				success:function(data){
					$("body").append(data.body);
					$s=$("<link>").attr("href",data.css).attr("rel","stylesheet");
					$("head").append($s);			
			}
			})
			$("a").eq(0).click(function(){
				history.go(-1);
			})
		</script>		
	</body>';
?>