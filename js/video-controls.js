var video = document.getElementById('video');

const playButton = document.getElementById('play')
const playButtonImg = document.getElementById('play-pause')

const timeElapsed = document.getElementById('time-elapsed')
const duration = document.getElementById('duration')

const progressBar = document.getElementById('progress-bar')
const seek = document.getElementById('seek')

const fullscreenButton = document.getElementById('fullscreen-btn')
const videoContainer = document.getElementById('video-container')

function formatTime(timeInSeconds){
    const timeInMilliseconds = timeInSeconds * 1000
    console.log("format" + timeInMilliseconds)
    const result = new Date(timeInMilliseconds).toISOString().substr(11, 8)

    return {
        milliseconds: toString(timeInMilliseconds),
        minutes: result.substr(3,2),
        seconds: result.substr(6, 2),
    }
}

function updateTimeElapsed(){
    const time = formatTime(Math.round(video.currentTime))
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`
    timeElapsed.setAttribute('datetime', `${time.minutes}m:${time.seconds}s`)
    if (video.ended){
        playButtonImg.src = "assets/tutorials/Play.png"
    }
}

function updateProgress(){
    seek.value = Math.floor(video.currentTime)
}



function toggleFullScreen(){
    if (document.fullscreenElement){
        document.exitFullscreen()
    }
    else {
        videoContainer.requestFullscreen()
        
    }
}

fullscreenButton.onclick = toggleFullScreen

function init() {
    video.onloadedmetadata = function(e){
        
        const videoDuration = Math.round(video.duration)
        seek.setAttribute('max', videoDuration)
        const time = formatTime(videoDuration)
        console.log(`Init ${time.milliseconds}`)
        duration.innerText = `${time.minutes}:${time.seconds}`;
        duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}`)
    }
}

document.addEventListener("DOMContentLoaded", init, false)

function play(event){
    if (video.paused || video.ended){
        playButtonImg.src = "assets/tutorials/Pause.png"
        video.play()
    } else {
        playButtonImg.src = "assets/tutorials/Play.png"
        video.pause()
    }
}

video.addEventListener('timeupdate', updateTimeElapsed)
video.addEventListener('timeupdate', updateProgress)


