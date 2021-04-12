
function update_rectangle(x, y, width, height)
{
  let rect = $('.rectangle');

  rect.css({
    left: x + 'px',
    top: y  + 'px',
    width: width  + 'px',
    height: height  + 'px'
  });
}



$(document).ready(function() {

  update_rectangle(
    window.innerWidth / 2.0 - 50,
    window.innerHeight / 2.0 - 50,
    100,
    100
  );

  $(document).click(function(event) {

    let width = Math.random() * window.innerWidth / 2.0;
    let height = Math.random() * window.innerHeight / 2.0;

    console.log(event);

    let x = event.clientX - (width / 2.0);
    let y = event.clientY - (height / 2.0);

    update_rectangle(x, y, width, height);
  });

  window.setInterval(function() {
    let width = Math.random() * window.innerWidth / 2.0;
    let height = Math.random() * window.innerHeight / 2.0;

    let x = Math.random() * (window.innerWidth - width);
    let y = Math.random() * (window.innerHeight - height);

    update_rectangle(x, y, width, height);
  }, 5000)
})
