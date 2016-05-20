$(document).ready(function(){

  $(window).on('scroll', function(){

	var sc = $(this).scrollTop();
	var	of = $('.offset').offset().top;
	$('.scrollTop').find('span').text(sc);
	$('.offset').find('span').text(of);
	});

});//jQuery