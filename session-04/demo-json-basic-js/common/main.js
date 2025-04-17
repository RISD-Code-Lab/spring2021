document.addEventListener("DOMContentLoaded", function() {
    const color = {
        "r": "red",
        "g": "green",
        "b": "blue"
    };

    const shapes = [
        { "shape": "circle", "r": 0, "g": 255, "b": 0 },
        { "shape": "square", "r": 255, "g": 0, "b": 0 }
    ];

    const myshape = {
        "name": "myshape", 
        "code": {
            "r": 255,
            "g": 0,
            "b": 0 
        },
        "shapes" : ["circle", "square", "oval"]
    };

    console.log(shapes[0].r);           // 0
    console.log(myshape.code);          // { r: 255, g: 0, b: 0 }
    console.log(myshape.code['r']);     // 255
    console.log(myshape.shapes[1]);     // square

    document.querySelector("button").addEventListener("click", function() {
        const colorDiv = document.getElementById("color");
        colorDiv.innerHTML = `<p>Red: ${myshape.code.r}</p>`;
        colorDiv.innerHTML += `<p>Green: ${myshape.code.g}</p>`;
        colorDiv.innerHTML += `<p>Blue: ${myshape.code.b}</p>`;

        // To load external JSON, you'd use fetch:
        // fetch('./common/myshape.json')
        //     .then(response => response.json())
        //     .then(myshape => {
        //         colorDiv.innerHTML = `<p>Red: ${myshape.code.r}</p>`;
        //         colorDiv.innerHTML += `<p>Green: ${myshape.code.g}</p>`;
        //         colorDiv.innerHTML += `<p>Blue: ${myshape.code.b}</p>`;
        //     });
    });
});