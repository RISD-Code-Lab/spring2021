# APIs and JSON
In this workshop, we will go through how we can process a quantity of data in your web project by looking at two methods: APIs and JSON data. Through demos, we will look at how to write, read a data object, as well as how we can request data written by someone into your web project. 

🎥 **We recorded a walkthrough of some of these demos^ on April 27, 2021.** Find that video [here](https://risd.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2b18b084-de0e-427f-860b-ad1700fa15bb)

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
- *Comma-separated Values*. 
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
};
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
};
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
var myshape = {
    "name": "myshape", 
    "code": {
      "r": 255,
      "g": 0,
      "b": 0 
    },
    "shapes" : ["circle", "square", "oval"] 
};
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
<html lang="en">
    <head>
        <title>JSON Demo</title>
    </head>
    <body>
      <div id="color">My Color</div>
      <button>Click</button>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script>
        $(document).ready(function() {
           $("button").click(function(event){
              $.getJSON('yourjson.json', function(mycolor) {
                 $('#color').html('<p>Red:' + mycolor.code['r'] + '</p>');
                 $('#color').append('<p>Green:' + mycolor.code['g'] + '</p>');
                 $('#color').append('<p>Blue:' + mycolor.code['b'] + '</p>');
              });
           });
        });
     </script>
    </body>
</html>
```

## APIs 

Data is usually loaded as an external file or request it from an API. API stands for Application Programming Interface, it is a set of routines, protocols, and tools for building software applications. You can think API as a messenger that tells requests and tells a system what you want to do, and returns the response back. In this workshop, I will use Open Weather Map as a sample API source. 

### Query string
Let’s review some examples from Open Weather Map API calls.
```
    api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
```
*⚠️ API key is a unique identifier used to authenticate a user, developer, or calling program to an API. The API key shown in the demos is one I generated for this workshop. To get an access the API in Open Weather Map for your project, you will need to create an account in their website and generate your own API key.*

- The question mark `?q=` followed by the parameters and their values is referred to as the query string. It assigns a parameter of data by querying a specific condition. In the query string, each parameter is listed one right after the other with an ampersand `&` separating them. The order of the query string parameters does not matter. 
- To review JSON file on browser, [JSON formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) plugin is useful.
- More read 👉🏼 [Query String,  Documenting APIs: Parameters](https://idratherbewriting.com/learnapidoc/docapis_doc_parameters.html#query_string_parameters)


## Other resources
- [Mozilla: Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [Mozilla: Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [JSON.org](https://www.json.org/json-en.html)
