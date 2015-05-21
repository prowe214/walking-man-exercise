var daMan = document.getElementById('gif');
var interval;
var winWidth = document.body.clientWidth
currentPos = 0;
daMan.style.left = currentPos + 'px';


(function moveDaMan() {
  alert('yo');
  interval = setInterval(cripWalk, 200);
  while (winWidth < daMan.style.left) {
    daMan.className = 'right';
  };
})();

function cripWalk() {
  currentPos += 10;
  daMan.style.left = currentPos + 'px';
};
