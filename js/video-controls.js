const video = document.getElementById('video');

const playButton = document.getElementById('play')
const playButtonImg = document.getElementById('play-pause')

const timeElapsed = document.getElementById('time-elapsed')
const duration = document.getElementById('duration')

const progressBar = document.getElementById('progress-bar')
const seek = document.getElementById('seek')
const seekTooltip = document.getElementById('seek-tooltip')

const fullscreenButton = document.getElementById('fullscreen-btn')
const videoContainer = document.getElementById('video-container')

const titleContainer = document.getElementById('title-container')
const controlsContainer = document.getElementById('controls-container')
const controls = document.getElementById('controls')

function formatTime(timeInSeconds){
    const timeInMilliseconds = timeInSeconds * 1000
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
    progressBar.value = Math.floor(video.currentTime)
}



function toggleFullScreen(){
    if (document.fullscreenElement){
        document.exitFullscreen()
        titleContainer.style.top = "20px"
        controlsContainer.style.bottom = "46px"
        controls.style.borderRadius = "0px 0px 14px 14px"
    }
    else {
        videoContainer.requestFullscreen()
        titleContainer.style.top = "0"
        controlsContainer.style.bottom = "67px"
        controls.style.borderRadius = "0px"
    }
}

fullscreenButton.onclick = toggleFullScreen

function init() {
    video.onloadedmetadata = function(e){
        
        const videoDuration = Math.round(video.duration)
        seek.setAttribute('max', videoDuration)
        progressBar.setAttribute('max', videoDuration)
        const time = formatTime(videoDuration)
        duration.innerText = `${time.minutes}:${time.seconds}`;
        duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}`)
    }
}

document.addEventListener("DOMContentLoaded", init, false)

function createIcon(type){
    var typeRoute;
    if (type == "play"){
        typeRoute = "./assets/tutorials/Play.png"
    } else if (type == "pause"){
        typeRoute = "./assets/tutorials/Pause.png"
    } else {
        return
    }
    var centreIcon = document.createElement('div')
    centreIcon.classList.add('centre-icon')
    var iconImg = document.createElement('img')
    iconImg.src = typeRoute
    centreIcon.append(iconImg)
    videoContainer.append(centreIcon)
    setTimeout(() => {
        centreIcon.classList.add('fade-out')
    }, 200);
    setTimeout(() => {
        centreIcon.remove()
    }, 1000);

}

function play(){
    if (video.paused || video.ended){
        playButtonImg.src = "assets/tutorials/Pause.png"
        video.play()
        createIcon("play")
    } else {
        playButtonImg.src = "assets/tutorials/Play.png"
        video.pause()
        createIcon("pause")
    }
}
video.addEventListener('click', play)
video.addEventListener('timeupdate', updateTimeElapsed)
video.addEventListener('timeupdate', updateProgress)

function updateSeekToolTip(event){
    const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
    seek.setAttribute('data-seek', skipTo)
    const t = formatTime(skipTo);
    seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
    const rect = video.getBoundingClientRect();
    const tooltipWidth = seekTooltip.getBoundingClientRect().width
    const position = parseInt(event.pageX - rect.left, 10)

    if (position > rect.width - tooltipWidth){
        console.log("HIT", position)
        seekTooltip.style.left = rect.width - 49 +"px"
    } else {
        console.log("NOT HITIING")
        seekTooltip.style.left = `${event.pageX - rect.left}px`;
    }
}

seek.addEventListener('mousemove', updateSeekToolTip);

function skipAhead(event){
    const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
    video.currentTime = skipTo
    progressBar.value = skipTo
    seek.value = skipTo
}

seek.addEventListener('input', skipAhead)

