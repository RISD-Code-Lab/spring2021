
var first_nouns = ['giraffe', 'turtle', 'human'];
var adjectives = ['blue', 'silly', 'deeply wise'];
var second_nouns = ['monkey', 'fruit', 'banana'];

function make_random_sentence()
{
  let first_noun = first_nouns[Math.floor(Math.random() * first_nouns.length)];
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let second_noun = second_nouns[Math.floor(Math.random() * second_nouns.length)];

  let first_noun_slot = document.getElementById('first-noun-slot');
  let adjective_slot = document.getElementById('adjective-slot');
  let second_noun_slot = document.getElementById('second-noun-slot');

  first_noun_slot.innerText = first_noun;
  adjective_slot.innerText = adjective;
  second_noun_slot.innerText = second_noun;
}

$(document).ready(function() {
  make_random_sentence();

  $('button').on('click', function() {
    make_random_sentence();
  });
});
