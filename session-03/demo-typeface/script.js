$(document).ready(function(){


	$('input[type=range]').on('input', function(){
		 inputType = $(this).attr('id');
		 inputValue = $(this).val();

		 if (inputType == 'brow'){
		 	$('#face').css('--brow-axis', inputValue);
		 }else{
		 	$('#face').css('--mouth-axis', inputValue);
		 }

	});

	$('#play').click(function(){
		$('#face').toggleClass('animated');
	});

});
	