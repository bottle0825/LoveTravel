<?php
	header('content-type:text/html;charset=utf-8');
	//---get
//	echo 'load请求返还的数据';
	
//	if($_GET['username']=='ajax'){
//		echo 'load请求返还的数据';
//	}else{
//		echo '请求无效';
//	}
	
	//---post
	if($_POST['username']=='ajax'&&$_POST['pwd']=='123'){
		echo true;
	}else{
		echo false;
	}
?>