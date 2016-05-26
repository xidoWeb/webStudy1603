function gallery(){
	var imgbox = $('.box'),
			gallerybox = $('#gallery'),
			gallerybtn = gallerybox.find('a');

	imgbox.html("<img>");
	gallerybtn.on('click', function(e){
		e.preventDefault();
		var data_img = $(this).attr("data-img"),
				a_nar = $(this).text();
		// imgbox.html("<img>").attr({'src','alt'});
		
		imgbox.find('img').css({'width': 100+'%', 'height': 'auto'})
					.attr({'src': data_img, 'alt':a_nar});
	});
}; // gallery
