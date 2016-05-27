function gallery(){
	var imgbox = $('.box'),
			gallerybox = $('#gallery'),
			gallerybtn = gallerybox.find('a');

	imgbox.html("<img src='./img/test.jpg'>").find('img')
				.css({'width': 100+'%', 'height': 'auto'});

	// 이미지 설명넣기위한 상자만들기
	imgbox.append('<div>');

	// 좌/우 버튼 클릭
var gal_btn    = $('gall_btn'),
		gal_left	= $('gallery_btn_left'),
		gal_right	= $('gallery_btn_right'),
		thum_box = $('.thumbox'),
		thum_box_ul = thum_box.children('ul'),
		thum_box_li = thum_box_ul.find('li'),
		thum_box_li_w = thum_box_li.width(thum_box.width() / 10),
		thum_box_li_set = thum_box_li.length,
		thum_box_w = parseInt(thum_box_li_w * thum_box_li_set );

		console.log(thum_box_li_w);
		console.log(thum_box_w);
		thum_box_ul.width(thum_box_w);
		gal_btn.on('click', function(){

		});


	// 이미지 클릭
	gallerybtn.on('click', function(e){
		e.preventDefault();

		var imgspan = imgbox.find('div'),
				data_img = $(this).attr("data-img"),
				a_nar = $(this).text();
				a_el = $(this).html();

			// 갤러리 큰창에 이미지 및 alt값 넣기	
		imgbox.find('img')
					.attr({'src': data_img, 'alt':a_nar});

		//자막 내용 보이기(애니메이션 설정)			
		// imgbox.append('<span>');
		// imgbox.find('span').css({'bottom': '-100px'}).text(a_nar).animate({'bottom':0});

		imgbox.find('div').stop().animate({'bottom': '-100px'},300, function(){
			imgspan.html(a_el).animate({'bottom':0},500);
		});
	});
}; // gallery
