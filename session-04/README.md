# Working with Data
In this workshop, we will go through how we can use a quantity of data for your p5.js project. It includes two components: 1) JSON (how to write, read, embed the data in p5.js project), 2) API (how to pull data written by someone into your program). 

### Data visualization examples
- [Weather gradient](http://weathergradient.com/)
- [Mapping 24 Emotions Conveyed by Brief Human Vocalization](https://s3-us-west-1.amazonaws.com/vocs/map.html)
- [Why Buses Bunch](https://setosa.io/bus/)

## Data formats
There are a few data formats that are standardized for computer to read. 

### JSON 
- *JavaScript Object Notation*.
- Widely used for storing, serializing, and transmitting structured data.
- A string of data 
- More read 👉 [Mozilla: Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

### CSV
- *Comma-separaated Values*. 
- Represents tabular data: a form of table in which values for each column of the table are separated by commas.
- Simple and light-weight, used to handle a huge amounts of data.
- Easy to use in a Spreadsheet Program.
- More read 👉[What Is a CSV File? Guide to Uses and Benefits](https://flatfile.io/blog/what-is-a-csv-file-guide-to-uses-and-benefits)

### XML
- *eXtensible Markup Language*
- markup language without no predefined tags.
- simple text-based format for representing structured information: documents, data, configuration, books, transactions, invoices, and much more
- More read 👉[Mozilla: XML introduction](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)

### Other filetype 
- text file, PDF, etc



## JSON 

### Syntax

Basic JSON file is a **string** like the following, with the quotations around the brackets.

```js
/* .js */
var color = {
    "name" : "mycolor", 
    "r": 255,
    "g": 0,
    "b": 0
}
```
JSON can be easily bulky and complex to load a length of data. In this case, JSON can be loaded into your project as a stand alone file. There are no variables in this file — it is just an object that starts with the curly brackets.

```js
/* .json */
 {
    "name" : "mycolor",
    "r": 255,
    "g": 0,
    "b": 0
}
```


All property names have to be surrounded by double quotes, and only simple data expressions are allowed. No function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON either.

JSON can have more than one object, and also lets you create nested arrays. 

```js
/* .js */
var shapes = {
  "myshape": [
      { "shape": "circle", // this is data object [0]
        "r": 0,
        "g": 255,
        "b": 0 
      },
      { "shape": "square", // this is data object [1]
        "r": 255,
        "g": 0,
        "b": 0 
      }
   ]
}
```

### Data path
To use JSON data for your project, we need to figure out a path to get into this JSON objects. In order to access any of the values, we will use dot notation that looks like below. The variable name is first, followed by a dot, followed by the key to be accessed.
```js
  color.name //mycolor
  color.r //255
  color.g //0
  color.b //0
```

#### Accessing Array items
If the property name is an array, use the number of index we are looking for. The order of an item in an array is called an index. Think of it as a numerical label. The position number starts at 0 (not 1.). In JS, we can call that item in the array within the context of dot notation like below:
```js
  shapes.myshape[0].r //0
  shapes.myshape[1].shape //square
```

## How to use JSON data in JS

### Internal
If your JSON file is short enough, you can directly implement it into your JS file like the two examples below:

```js
// JSON object
var mycolor = {
    "name": "red", 
    "code": {
      "r": 255,
      "g": 0,
      "b": 0 
    },
    "shapes" : ["circle", "square", "oval"] 
}
// accessing JSON object
console.log(mycolor.name); // red
console.log(mycolor.code); // { r: 255, g: 0, b: 0}
console.log(mycolor.code['r']); // red
console.log(mycolor.shapes[1]); // square
```
### External

You can get JSON data using an AJAX request, and output the result.
To load JSON data using jQuery, use the `getJSON()` or `ajax()` method. The `jQuery.getJSON( )` method loads JSON data from the server using a GET HTTP request.

*⚠️You will need to set up your local server to load JSON in your web project locally. In this demo, I used python in terminal; more details 👉🏼 [Mozilla: How do you set up a local testing server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server); you can also consider using an app such as [MAMP](https://www.mamp.info/) instead.*

```html
<!DOCTYPE html>
<html>
<head>
  <title>How to implement jQuery</title>
</head>
<body>
	<div id="color">
		Color
	</div>
	<button></button>
	<script src="/common/jquery-3.4.1.min.js"></script>
	<script>
		$(document).ready(function() {
			$("button").click(function(event){
			$.getJSON('yourjson.json', function(mycolor) {
				$('#color').html('<p>Red:' + mycolor.r+ '</p>');
				$('#color').append('<p>Green:' + mycolor.g+ '</p>');
				$('#color').append('<p>Blue:' + mycolor.b+ '</p>');
			});
			});
			
		});
	</script>
</body>
</html>
```
