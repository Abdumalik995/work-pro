$(document).ready(function() {
	$('main').scrollspy({target:'#main'});
	$('.collapse').collapse();

	$('#targ div').click(function() {
		let bos = $(this).attr("data-target");
		
		if(bos == "#post1") {
			$('#fikr #post1').css('display','block');
			$('#fikr #post1').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
		} else if (bos == "#post2") {
			$('#fikr #post2').css('display','block');
			$('#fikr #post2').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
		} else if (bos == "#post3") {
			$('#fikr #post3').css('display','block');
			$('#fikr #post3').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
			//$(this).css('background','orange');
		} else if (bos == "#post4") {
			$('#fikr #post4').css('display','block');
			$('#fikr #post4').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
		} else if (bos == "#post5") {
			$('#fikr #post5').css('display','block');
			$('#fikr #post5').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
		} else {}
	});

	$('#izla').click(function() {
		$('#naydi').fadeIn('fast');
	});

	
});
	
	