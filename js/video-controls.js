var video;

const playButton = document.getElementById('play')

const currentTimeDiv = document.getElementById('current-time')
const videoDuration = document.getElementById('video-duration') 


function init() {
    video = document.getElementById('video')
    video.onloadedmetadata = function(e){
        var length = video.duration
        console.log("DURATION" + length)
        currentTimeDiv.innerHTML = video.currentTime
        videoDuration.innerHTML = video.duration
    }
}

document.addEventListener("DOMContentLoaded", init, false)

function play(event){
    var minutes = parseInt(video.duration / 60, 10)
    var seconds = parseInt(video.duration % 60)
    console.log(seconds)
    if (seconds == 0){
        seconds = "00"
    }
    videoDuration.innerHTML = minutes + ":" + seconds
    var num = parseInt(video.duration)

    video.play()
    
    
    

}