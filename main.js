// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMessage = document.querySelector('#modal')
let hearts = document.querySelectorAll('.like-glyph');

for(heart of hearts){
  heart.addEventListener('click', clickHeart);
}

function clickHeart(e){
  let currentHeart = e.target;

  mimicServerCall()
  .then(serverMessage => {
    if (currentHeart.innerText == EMPTY_HEART){
      currentHeart.innerText = FULL_HEART;
      currentHeart.className = 'activated-heart';
    } else{
      currentHeart.innerText = EMPTY_HEART;
      currentHeart.className = '';
    }
    errorMessage.setAttribute('class', 'hidden');
   })
   .catch(error => {
     errorMessage.setAttribute('class', '');
   });
 }
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
