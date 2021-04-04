$('.menu-button').click(function() {
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
  $('.menu-bg').toggleClass('cover');
});