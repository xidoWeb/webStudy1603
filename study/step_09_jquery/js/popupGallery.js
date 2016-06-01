// popupGallery.js

function popupGallery(){
	var popupBtn = $('.popup_btn').find('li'),
	 		close = $('.close'),
		 	popup = $('.popup1');

	popupBtn.on('click', function(e){
		e.preventDefault();
		var thisImg =  $(this).find('a').attr('href'),
				thisNar = $(this).find('span').text();
		popup.fadeIn(100).find('img').attr({'src': thisImg, 'alt': thisNar});

	});
	close.on('click', function(){
		popup.fadeOut(100);
	});
	popup.on('click', function(){
		popup.fadeOut(100);
	});
};
