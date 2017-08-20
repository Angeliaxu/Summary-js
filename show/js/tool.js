(function(){
	getNewsList(newsList,loopPicture);
	userManage();
	getMore();
	userManage();
})()


//封装事件函数，判断是否是当日新闻

function date(){
	var now=new Date();
	var year=now.getFullYear();
	var month=now.getMonth()+1;
	var date=now.getDate();
	month=month<10?'0'+month:month;
	date=date<10?'0'+date:date;
	return `${year}${month}${date}`;
}


//利用Ajax获取新闻列表
function getNewsList($0,$1){
	$.ajax({
		url:'php/interface.php',
		dataType:'json',
		type:'get',
		success:function(data){
			$0(data);
			$1(data);
	}
	})
}


//渲染列表的代码
function newsList(data){
	var title=data.date==date()?'今日新闻':data.date;
			$('.list').append($title=$('<h2>').text(title));
			$.each(data.stories, function(i,e) {
				$newsList=$(`<a class="news" href="php/pjax.php?id=${e.id}">
				<dl>
					<dt><img  src="${e.images}"/></dt>
					<dd>${e.title}</dd>
				</dl>
			</a>`)
				$('.list').append($newsList);
			});
			
		}



//封装轮播图
function loopPicture(data){

	$.each(data.top_stories, function(i,e) {
		$a=$(`<a  href="php/pjax.php?id=${e.id}" class="swiper-slide news">
		<img src="${e.image}"/>
		<span>❃${e.title}</span>
		</a>`)
		$('.swiper-wrapper').append($a);
	});
	var mySwiper=new Swiper('.swiper-container',{
				//时间间隔
				autoplay:2000,
				//方向：水平(horizontal)或垂直(vertical)
				direction : 'horizontal',
				//速度：默认300
				speed:1000,
				//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
				autoplayDisableOnInteraction : false,
				//切换效果
				//effect : 'fade',
				//effect : 'cube'
				/*effect : 'coverflow',
				coverflow: {
					//去掉阴影
		            slideShadows : false
		        },*/
				//effect : 'flip',
				//分页
				pagination : '.swiper-pagination',
				paginationType : 'bullets',
				paginationClickable :true,
				/*
					‘bullets’  圆点（默认）
					‘fraction’  分式 
					‘progress’  进度条
				*/
				//设置slider容器能够同时显示的slides数量
				//slidesPerView :3
			})
}

//用户管理
function userManage(){
	$('.toggle-button').click(function(){
		$('.login').animate('left')
	})
}
//首页懒加载
function getMore(){
	$('body').scroll(function(){
		console.log($('#index').innerHeight());
	});
}
//用户管理页面
function userManage(){
	$('.toggle-button').click(function(){
		$('.login').css({
			display:'block'
		});
		$('body').css('overflow','hidden');
		$('.mask').css({
			display:'block',
			opacity:1
		})
	})
}
