let video = document.getElementsByClassName("alga")[0];



function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function dec() {
  video.playbackRate -= 0.5;
}
function inc() {
  video.playbackRate += 0.5;
}
function retroceder() {
  video.currentTime -= 10;
}
function avanca() {
  video.currentTime += 10;
}
