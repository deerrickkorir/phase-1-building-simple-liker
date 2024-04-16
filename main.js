// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
  const likeButtons = document.querySelectorAll('.like');

  likeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      mimicServerCall()
        .then(function(response) {
          if (button.classList.contains('activated-heart')) {
            button.classList.remove('activated-heart');
            button.querySelector('.like-glyph').innerText = EMPTY_HEART;
          } else {
            button.classList.add('activated-heart');
            button.querySelector('.like-glyph').innerText = FULL_HEART;
          }
        })
        .catch(function(error) {
          const modal = document.getElementById('modal');
          const modalMessage = document.getElementById('modal-message');
          modalMessage.innerText = error;
          modal.classList.remove('hidden');
          setTimeout(function() {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});
