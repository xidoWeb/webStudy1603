$(document).ready(function(){

  $('button').hide();

  $(window).on('scroll', function(){

	var sc = $(this).scrollTop();
	var	of = $('.offset').offset().top;
	$('.scrollTop').find('span').text(sc);
	$('.offset').find('span').text(of);

	if(sc <= 500){
		$('button').fadeOut(1000);
		
	}else{
		$('button').fadeIn(1000);
	}

  });// scroll

  $('button').on('click', function(){
  	// $(window).scrollTop(0);
  	$('html, body').animate({'scrollTop':0},500);
  })


});//jQuery