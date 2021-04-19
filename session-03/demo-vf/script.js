$(document).ready(function(){

	console.log('script loaded');

	const wghtmax = 900;
	const wdthmax = 150;

	//standard sliders
	$('.axis-range').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		// console.log(value);

		const slidertype = $(this).data('type'); //get slider axis

		// console.log("--"+slidertype, value );

		$('#bigletter').css("--"+slidertype, value);

	});

	//click buttons
	$('#default').click(function(event) {
		// console.log('default clicked');
		$("#content").css({
			"--wdth": 100,
			"--wght": 400,
			"--XHGT": 0
		});	
	});

	$('#thincomp').click(function(event) {
		$("#content").css({
			"--wdth": 40,
			"--wght": 100,
			"--XHGT": 0
		});	
	});

	$('#blackext').click(function(event) {
		$("#content").css({
			"--wdth": 150,
			"--wght": 900,
			"--XHGT": 0
		});	
	});


	$('#random').click(function(event) {
		let randomwidth = randomNumber(40,150);
		let randomwght = randomNumber(100,900);
		let randomxhgt = randomNumber(0,100);
		
		$("#content").css({
			"--wdth": randomwidth,
			"--wght": randomwght,
			"--XHGT": randomxhgt,
		});	
	});


	//mouseposition
	$('#intro').mousemove(function(event) {

		console.log(event.pageX, event.pageY);

		let cursorX = event.pageX / $(this).width();
		let cursorY = 1 - (event.pageY) / $(this).height();

		let settingX = Math.floor(cursorX * wdthmax);
		let settingY = Math.floor(cursorY * wghtmax);

		// console.log( settingX, settingY)

		$("#bigletter").css({
			"--wdth": settingX,
			"--wght": settingY
		});
		
	});
});


// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}


