
var first_nouns = ['giraffe', 'turtle', 'human'];
var adjectives = ['blue', 'silly', 'deeply wise'];
var second_nouns = ['monkey', 'fruit', 'banana'];

function make_random_sentence()
{
  let first_noun = first_nouns[Math.floor(Math.random() * first_nouns.length)];
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let second_noun = second_nouns[Math.floor(Math.random() * second_nouns.length)];

  let first_noun_slot = $('#first-noun-slot');
  let adjective_slot = $('#adjective-slot');
  let second_noun_slot = $('#second-noun-slot');

  first_noun_slot.text(first_noun);
  adjective_slot.text(adjective);
  second_noun_slot.text(second_noun);
}

$(document).ready(function() {
  make_random_sentence();

  $('button').on('click', function() {
    make_random_sentence();
  });
});
