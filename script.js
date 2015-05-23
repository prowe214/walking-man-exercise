var daMan = document.getElementById('gif'),
    direction = 200;

function move() {
  var currentPos = parseInt(daMan.style.left) || 0;

  if (currentPos > (parseInt(window.innerWidth) - daMan.width)) {
    direction = -2;
    daMan.classList.toggle('left');
  };
  if (currentPos < 0) {
    direction = 2;
    daMan.classList.toggle('left');
  };

  daMan.style.left = currentPos + direction + 'px';


};
setInterval(move, 10);
