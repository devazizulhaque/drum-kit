window.addEventListener("keydown", playSound);
function playSound(event){
  let keyCode = event.keyCode;
  let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  let key = document.querySelector(`.key[data-key="${keyCode}"]`);
  key.classList.add("playing");
  }
let keys = document.querySelectorAll(".key");
keys.forEach(keyClass => keyClass.addEventListener("transitionend", removeClass));
function removeClass(e) {
  if (e.propertyName == "transform") {
    this.classList.remove("playing");
  } return;
};