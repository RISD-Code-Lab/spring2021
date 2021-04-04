
// 1. toggle items — comment out each lines and see what happens on the page!
  $(document).ready(function() {
    $('button').click(function() {
      $('div').toggle();
      // $('.group1').toggleClass('red');
      // $('.group2').toggleClass('blue');
    });
  });

// 2. toggle the copy of the button
 $('button').on('click', function() {
    if ($(this).text() == $(this).data('copy-swap')) {
      $(this).text($(this).data('copy-original')) 
    } else {
      $(this).text($(this).data('copy-swap'));
    }
  });
  