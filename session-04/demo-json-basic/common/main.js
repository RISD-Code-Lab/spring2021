$(document).ready(function() {
    var color = {
        "r": "red",
        "g": "green",
        "b": "blue"
    };

    var shapes = [
        { "shape": "circle", //this is element 0`
            "r": 0,
            "g": 255,
            "b": 0 
        },
        { "shape": "square", //this is element 1
            "r": 255,
            "g": 0,
            "b": 0 
        }
    ];

    var myshape = {
        "name": "myshape", 
        "code": {
            "r": 255,
            "g": 0,
            "b": 0 
        },
        "shapes" : ["circle", "square", "oval"]
    };

    console.log(shapes[0].r); // 0
    console.log(myshape.code); // { r: 255, g: 0, b: 0}
    console.log(myshape.code['r']); // red
    console.log(myshape.shapes[1]); // square

    $("button").click(function(event){
        //load json from data objects above
        $('#color').html('<p>Red: ' + myshape.code['r'] + '</p>');
        $('#color').append('<p>Green: ' + myshape.code['g'] + '</p>');
        $('#color').append('<p>Blue: ' + myshape.code['b'] + '</p>');

        //load json from myshape.json
        // $.getJSON('./common/myshape.json', function(myshape) {
        //     $('#color').html('<p>Red:' + myshape.code['r']+ '</p>');
        //    $('#color').append('<p>Green:' + myshape.code['g']+ '</p>');
        //    $('#color').append('<p>Blue:' + myshape.code['b']+ '</p>');
        // });
    });
});