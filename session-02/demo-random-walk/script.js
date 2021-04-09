
function make_rgb(c)
{
  return 'rgb(' + c.join(', ') + ')';
}

function make_gradient(c1, c2)
{
  return 'linear-gradient(' + make_rgb(c1) + ', ' + make_rgb(c2) + ')';
}


$(document).ready(function() {

  let bottom_color = [173, 216, 230];
  let top_color = [255, 165, 0];


  let sky = $('#sky');
  let g = make_gradient(bottom_color, top_color);
  sky.css({background: g});

  window.setInterval(function() {

    /**
     * Pick two random indices, one for the
     * top color and one for the
     */
    let bc_i = Math.floor(Math.random() * 3);
    let tc_i = Math.floor(Math.random() * 3);

    /*
     * Pick a random step size between 0 and 2.
     * try tweaking 2 to a different number to change
     * how fast the sun sets :p
     *
     *
     */
    let step = Math.random() * 2;

    /*
     * Update each color in a random channel.
     */
    top_color[tc_i] -= step;
    bottom_color[bc_i] -= step;

    /*
     * Clamp each channel to make sure it falls between 0 and 255.
     */
    top_color[tc_i] = Math.min(Math.max(top_color[tc_i], 0), 255);
    bottom_color[bc_i] = Math.min(Math.max(bottom_color[bc_i], 0), 255);

    /*
     * Make the gradient.
     */
    let g = make_gradient(bottom_color, top_color);

    /**
     * Set the background.
     */
    sky.css({background: g});

  }, 1000 / 24); // 24 frames per second
});
