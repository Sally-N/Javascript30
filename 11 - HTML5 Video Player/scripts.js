"use strict";

const screen = document.querySelector('.player');

const playerControls = screen.querySelector('.player_controls');
const progress = screen.querySelector('.progress')
const progressBar = screen.querySelector('.progress__filled')
const toggle = screen.querySelector('.toggle');
const skipButtons = screen.querySelectorAll('[data-skip]');
const ranges = screen.querySelectorAll('.player__slider');
const video = screen.querySelector('.viewer');



// function playVideo(){
//     if(video.paused || video.ended){
//         video.play();
//     }else{
//         video.pause();
//     }
// }

///arrow function
function playVideo(){
const playMethod = video.paused || video.ended ? 'play' : 'pause';
video[playMethod]();

}

///function to update the video depending on where the video is paused or playing
function updateButton(){
toggle.innerHTML = video.paused ? "►": "❚❚";
}


//handle ranges
///this is used in a functional context
function handleRange(){
    video[this.name] = this.value;
  
}

//handleSkips
function handleSkip(){
 video.currentTime += parseFloat(this.dataset.skip)
}

//handle Progress
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrubTime;
}
///Add Event Listeners 

toggle.addEventListener("click", playVideo);
video.addEventListener("click", playVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

ranges.forEach(range => 
    range.addEventListener('mousemove', handleRange)
)
ranges.forEach(range => 
    range.addEventListener('change', handleRange)
)

skipButtons.forEach(skipButton => skipButton.addEventListener("click", handleSkip));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);