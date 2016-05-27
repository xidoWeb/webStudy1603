// slidebanner.js

function slideBanner(banner){
	var b_box = banner,
			b_box_ul = b_box.find('ul'),
			b_box_li = b_box.find('li'),
			b_box_li_width = b_box.find('li').width();
			l_btn = $('.btn_left'),
			r_btn = $('.btn_right');

	// $('.banner_box').find('li').last().prependTo('.banner_box>ul');
	b_box_li.last().prependTo(b_box_ul);

	l_btn.on('click', function(){
		b_box_li.first().animate({'margin-left': b_box_li_width }, 700);
	});
	r_btn.on('click', function(){

	});

}// slidebanner