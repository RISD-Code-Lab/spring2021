
console.log('hello world');

//---------------------------
// setup show hide all button
//---------------------------

let trigger = document.getElementById("showhide");
// this is the element that triggers your interaction

trigger.onclick = function (event) {
// 	we are setting up the trigger to listne to the 'click' event
	console.log('trigger clicked!');

	let detaildivs = document.querySelectorAll('.details');
	
	detaildivs.forEach(function(element){
		element.classList.toggle('active');
	});
};

// alternative syntax is:
// trigger.addEventListener('click', function(event){
		//do stuff here
// });


//------------------------------------
// setup show hide button in each item
//------------------------------------

let items = document.querySelectorAll('.item');

items.forEach(function(element){
	element.onclick = function(event){
		element.querySelector('.details').classList.toggle('active');
	};
});
