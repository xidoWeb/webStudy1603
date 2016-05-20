/*

#header가 상단의 끝에 오면(top:0)에 오면
#header를 position:fixed로 바꿔라!

스크롤의 위치가 화면의 100%에서 -60px뺀만큼 
이동하면 #header를 고정시켜라

........
*/

$(document).ready(function(){
	$(window).on('scroll', function(){
		var sc = $(this).scrollTop();
		var win_h = $(this).height();
		var header_h =$('#header').height();
		var hope_h = win_h - header_h;

		// var h = '100vh' - '50px';
		if(sc >= hope_h){
			$('#header').addClass('scroll');
		}else{
			$('#header').removeClass('scroll');
		}
	});
});
