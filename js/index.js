const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');
const $mute = document.querySelector('#mute');
const $unmute = document.querySelector('#unmute');
const $fullscreen = document.querySelector('#fullscreen');
const $pip = document.querySelector('#pip');
const $duration = document.querySelector('#duration');

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('play')
}

function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('play')
}

function handleBackward () {
    $video.currentTime -= 10
    console.log('-10')
}

function handleForward(){
    $video.currentTime += 10
    console.log('10', $video.currentTime)
}

function handleLoaded () {
    let totalDuration = ($video.duration / 60).toFixed(2);
    let total = document.createTextNode(totalDuration.replace('.',":"));
    $duration.appendChild(total);
    $progress.max = $video.duration
    
    console.log('cargo video', $video.duration)
}

function handleTimeUpdate () {
    $progress.value = $video.currentTime;
}

function handleInput () {
    $video.currentTime = $progress.value;

}

function handleMute () {
    $video.muted = false
    $mute.hidden = true
    $unmute.hidden = false
}

function handleUnMute () {
    $video.muted = true
    $mute.hidden = false
    $unmute.hidden = true
}

function handleFullScreen () {
    $video.requestFullscreen();
}

function handlePip() {
    $video.requestPictureInPicture();
}



$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);

$mute.addEventListener('click', handleMute);
$unmute.addEventListener('click', handleUnMute);
$fullscreen.addEventListener('click', handleFullScreen);
$pip.addEventListener('click', handlePip);

