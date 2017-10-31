//封装函数
//username=666 expires=xxx pwd=666;
function setCookie(key,value,time){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+time);
	document.cookie = key+'='+encodeURI(value)+';expires='+oDate.toGMTString();
}
//获取cookie
function getCookie(key){
	var arr1 = document.cookie.split(';');
	for(var i=0;i<arr1.length;i++){
		var arr2 = arr1[i].split('=');
			console.log(arr2[0]);
		if(arr2[0]==key){
			return decodeURI(arr2[1]);
		}
	}
}
//删除cookie
function removeCookie(key){
	setCookie(key,'',-1);
}
//检测自动登录
$(function(){
	console.log(getCookie('username'));
	if(getCookie('username')){
		$('#username').text(getCookie('username'));
	}
})
//导航栏固定
$(window).scroll(function(){
	console.log($('header').height());
	if(scrollY>$('header').height()){
		$('nav').addClass('fix');
	}else{
		$('nav').removeClass('fix');
	}
})
//背景音乐开关
var audioFlag = true;
$('.audioToggle').on('click',function(){
	if(!audioFlag){
		$('audio')[0].play();
		$(this).html('点击关闭背景音乐');
		audioFlag=true;
	}else{
		$('audio')[0].pause();
		$(this).html('点击开启背景音乐');
		audioFlag=false;
	}
});
//返还顶部
$('#up').on('click',function(){
	var Y = window.scrollY;
	var timer = setInterval(function(){
		Y-=50;
		window.scrollTo(0,Y);
		if(Y<=0){
			window.scrollTo(0,0);
			clearInterval(timer);
		}
	},1);
	
});
//模拟百度搜索
$(function(){
	$('#search').on('keyup',function(){
		if($(this).val()!=''){
			var $Script = $('<script><\/script>');
			var Url = 'http://suggestion.baidu.com/su?wd='+ $(this).val() +'&cb=callback';
			$Script.attr('src',Url);
			$(document).append($Script);
		}else{
			$('#searchShow').hide();
		}
	});
//	    		$('#search').blur(function(){
//  				$('#searchShow').hide();
//	    		});
	$('#searchBtn').click(function(){
		window.location="http://www.baidu.com/s?wd="+$('#search').val();
	});
})
//意见反馈
$('#propose').click(function(){
	$('#chat').css({
		bottom:0
	});
	$(this).css({
		backgroundColor:'cornflowerblue'
	})
});
$('#chat').find('button').eq(0).click(function(){
	if(!$('#chat').find('textarea').val()==''){
		setCookie('propose',$('#chat').find('textarea').val(),3);
		alert('感谢您的建议！');
		$('#chat').find('textarea').val('');
		$('#chat').css({
			bottom:'-300px'
		});
		$('#propose').css({
			backgroundColor:'#999'
		})
	}else{
		alert('请输入您的建议');
	}
});
$('#chat').find('button').eq(1).click(function(){
	$('#chat').find('textarea').val('');
	$('#chat').css({
		bottom:'-300px'
	});
	$('#propose').css({
		backgroundColor:'#999'
	})
});