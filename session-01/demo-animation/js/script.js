$(document).ready(function(){


	$(".element").click(function(){
		
		//---------------------------------------
		// add 'play' class to activate animation
		//---------------------------------------
		$(this).toggleClass('play');
	});

	$('#toggle').click(function(){
		$('.element').toggleClass('play');
	});
	$('#play').click(function(){
		$('.element').addClass('play');
	});
	$('#pause').click(function(){
		$('.element').removeClass('play');
	});


});

