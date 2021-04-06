$(document).ready(function() {
  $('button').click(function() {
    // 1. toggle items — comment out each lines and see what happens on the page!
    $('div').toggle();
    // $('.group1').toggleClass('red');
    // $('.group2').toggleClass('blue');

    // 2. toggle the copy of the button
    $(this).toggleClass('active');
  });
});