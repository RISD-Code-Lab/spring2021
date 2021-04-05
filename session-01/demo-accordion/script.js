
console.log('accordion demo');


$(document).ready(function(){

	//------------------------------------
	// show hide each itme
	//------------------------------------

	$('.item').click(function(){
		$(this).toggleClass('active');
	});

	//---------------------------
	// setup show hide all button
	//---------------------------
	$("#showhide").click(function(){
		
		$('.item').toggleClass('active');
	});

});