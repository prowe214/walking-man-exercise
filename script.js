var daMan = document.getElementById('gif');

currentPos = 0;
daMan.style.left = currentPos + 'px';

window.addEventListener('click', function() {
  currentPos += 20;
  daMan.style.left = currentPos + 'px';
});




/* var interval;

function moveDaMan() {
  interval = setInterval(cripWalk, 1000)
} */
