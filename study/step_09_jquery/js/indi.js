//  indi.js

function indi(indiC, banBox){
	var indiBtn = indiC.find('li');
	indiBtn.on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var indexNum = $this.index();
		var banLi = banBox.find('li').width();
		var banAni = indexNum * banLi;
		banBox.animate({'margin-left': -banAni }, 500);
	});
};
