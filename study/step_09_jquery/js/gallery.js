function gallery(){
	var imgbox = $('.box'),
			gallerybox = $('#gallery'),
			gallerybtn = gallerybox.find('a');

	imgbox.html("<img src='./img/test.jpg'>").find('img')
				.css({'width': 100+'%', 'height': 'auto'});

	imgbox.append('<span>');
	gallerybtn.on('click', function(e){
		e.preventDefault();
		
		var imgspan = imgbox.find('span'),
				data_img = $(this).attr("data-img"),
				a_nar = $(this).text();

		imgbox.find('img')
					.attr({'src': data_img, 'alt':a_nar});
		// imgbox.append('<span>');
		// imgbox.find('span').css({'bottom': '-100px'}).text(a_nar).animate({'bottom':0});

		imgbox.find('span').animate({'bottom': '-100px'},300, function(){
			imgspan.text(a_nar).animate({'bottom':0},500);
		});
	});
}; // gallery
