# Codelab Session 3: Introduction to Variable Fonts

🎥 **We recorded a walkthrough of some of these demos^ on April 20, 2021.** Find that video [here](https://risd.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=354d95e4-8a96-4ae9-8b0f-ad1001236c9d).

## What’s a variable font?
A variable font is a single font file contains many different variations of a typeface, instead of having a separate font file for every style of the type family. This format was developed in collaboration by Adobe, Apple, Google, and Microsoft.

### Advantages of variable fonts
- Font loading
	- HTTP requests
	- KB of data (depends on character set and design space)
- Purer expression of type design process
- Options!

*See more on [We Are Family! I’ve Got All My Variations With Me](https://vimeo.com/251494096) with David Jonathan Ross*

### Disadvantages of variable fonts
- Lack of support, especially in Desktop programs
- Compromised drawing flexibility — difficulty in developing compatibile outlines

## Futher Reference (Post-Meeting) 
- [A Variable Fonts Primer](https://variablefonts.io/)
- [OpenType Variable Fonts: Moving Right Along](https://www.typenetwork.com/brochure/opentype-variable-fonts-moving-right-along/)
- [Typetura](https://typetura.scottkellum.com/typetura-js)

## Variable Fonts and CSS
You can import a variable font in the same way as any other typeface, using the `@font-face` rule.
Variable fonts can be set by CSS, using `font-variation-settings.`

```css
@font-face {
  font-family: 'Magmatic';
  src: url('MagmaticVF.ttf') format('truetype-variations');
}

p{
  font-family: 'Magmatic', sans-serif;
  font-variation-settings: 'wght' 200,'wdth' 100; 👈
}
```

The `font-variation-settings` is the CSS property for variable fonts. 
- Values for multiple axes are separated by `,`
- Each axis name is in in between `' '` marks, with the value after it
- Standard axes for variation are in **lowercase**, custom axes are in **uppercase**

### Standard (registered) axes
|syntax| description | Non-VF equivalent 
|---|---| ---
|wght| weight | `font-weight` 
|wdth| width | `font-stretch`
|opsz| optical sizing | `font-optical-sizing`
|ital| italicization | `font-style: italic` 
|slnt| slant | `font-style: oblique` 

- Read more with the [Open Type specs](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- Read a [caveat for italics](https://rwt.io/typography-tips/getting-bent-current-state-italics-variable-font-support)

# jQuery Review

For a review on jQuery, check back to our notes from [Code Lab session 4](https://github.com/RISD-Code-Lab/cl-spring2020/tree/master/session-04) and the [jQuery lecture slides](https://drive.google.com/open?id=1OtUk6oscLMCWcnWABUfOOfygT5P_BhSi-18GCEGcnHY).

Some useful jQuery methods you might use include:

 - Click
```js
$('.yourelement').on('click', function() {
	// do something when .yourelement is clicked
});
```

 - Hover / Mouseover
```js
$('.yourelement').on('mousemove', function(e) {
	// e is a parameter that captures the event
	console.log( e.pageX ); // mouse x-coordinate 
	console.log( e.pageY ); // mouse y-coordimate
});
```

- Sliders
```js
$('input[type=range]').on('input', function(){
	 console.log( $(this).val() ); // value of slider input
});
```

- Class manipulation
```js
$('.triggerelement').on('click', function(){
	$('.targetelement').addClass('classname'); // adds classname
	$('.targetelement').removeClass('classname'); // removes classname
	$('.targetelement').toggleClass('classname'); // toggles classname: adds it if it doesn’t have it, removes it otherwise
});
```