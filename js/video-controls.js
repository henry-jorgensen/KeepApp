var video = document.getElementById('video');

const playButton = document.getElementById('play')

const timeElapsed = document.getElementById('time-elapsed')
const duration = document.getElementById('duration')

function formatTime(timeInSeconds){
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8)

    return {
        minutes: result.substr(3,2),
        seconds: result.substr(6, 2),
    }
}

function updateTimeElapsed(){
    const time = formatTime(Math.round(video.currentTime))
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`
    timeElapsed.setAttribute('datetime', `${time.minutes}m:${time.seconds}s`)
}

function init() {
    video.onloadedmetadata = function(e){
        const videoDuration = Math.round(video.duration)
        const time = formatTime(videoDuration)
        duration.innerText = `${time.minutes}:${time.seconds}`;
        duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}`)
    }
}

document.addEventListener("DOMContentLoaded", init, false)

function play(event){
    if (video.paused || video.ended){
        video.play()
    } else {
        video.pause()
    }

}

video.addEventListener('timeupdate', updateTimeElapsed)