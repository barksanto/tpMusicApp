document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  // console.log(app);
  const db = firebase.firestore();

  const deathcab = db.collection('toBuy').doc('Transatlanticism');
  const gillian = db.collection('toBuy').doc('Time the Revelator');
  const jayZ = db.collection('toBuy').doc('The Blueprint');
  const radiohead = db.collection('toBuy').doc('Kid A');
  const spoon = db.collection('toBuy').doc('Alligator');


  //refactored to run operations one time - 
  //blocking point is that each set of songs will be inserted into different element
  //const buySongsArry = [deathcab, gillian, jayZ, radiohead, spoon];
  // buySongsArry.forEach((album) => {
  //   album.onSnapshot(doc => {
  //     const data = doc.data();
  //     data.songs.forEach((song) => {
  //       console.log(song)
  //     })
  //   })
  // })

  deathcab.onSnapshot(doc => {
    const deathcabData = doc.data();
    deathcabData.songs.forEach((song) => {
      document.querySelector('.new-album-1').insertAdjacentHTML(
        'beforeend',
        `<div class="container pt-3">
          <div class="row">
            <li class="px-2 song-name new-card mx-1 col-6">${song}</li>
            <span class="play-btn">
              <i class="far fa-play-circle col-2"></i>
              <i class="far fa-pause-circle"></i>
            </span>
          </div>
         </div>`);
    })
    let buttons = document.querySelectorAll('.play-btn');
    if (buttons) {
      buttons.forEach(button => {
        // console.log("button", button);
        button.addEventListener("click", togglePlay);
      });
    }
  })

  gillian.onSnapshot(doc => {
    const gillianData = doc.data();
    gillianData.songs.forEach((song) => {
      document.querySelector('.new-album-2').insertAdjacentHTML(
        'beforeend', `
        <div class="container pt-3">
          <div class="row">
            <li class="px-2 song-name new-card mx-1 col-6">${song}</li>
              <span class="play-btn">
                <i class="far fa-play-circle col-2"></i>
                <i class="far fa-pause-circle"></i>
              </span>
            </div>
         </div>`);
    })

    let buttons = document.querySelectorAll('.play-btn');
    if (buttons) {
      buttons.forEach(button => {
        // console.log("button", button);
        button.addEventListener("click", togglePlay);
      });
    }

  })

  jayZ.onSnapshot(doc => {
    const jayZData = doc.data();
    jayZData.songs.forEach((song) => {
      document.querySelector('.new-album-3').insertAdjacentHTML(
        'beforeend', `
        <div class="container pt-3">
          <div class="row">
           <li class="px-2 song-name new-card mx-1 col-6">${song}</li>
            <span class="play-btn">
              <i class="far fa-play-circle col-2"></i>
              <i class="far fa-pause-circle"></i>
            </span>
           </div>
         </div>`);
    })
    let buttons = document.querySelectorAll('.play-btn');
    let buttons2 = document.querySelectorAll('.pause-btn')

    if (buttons) {
      buttons.forEach(button => {
        // console.log("button", button);
        button.addEventListener("click", togglePlay);
      });
    }
  })

  radiohead.onSnapshot(doc => {
    const radioheadData = doc.data();
    radioheadData.songs.forEach((song) => {
      document.querySelector('.new-album-4').insertAdjacentHTML(
        'beforeend', `
        <div class="container pt-3">
          <div class="row">
            <li class="px-2 song-name new-card mx-1 col-6">${song}</li>
              <span class="play-btn">
                <i class="far fa-play-circle col-2"></i>
                <i class="far fa-pause-circle"></i>
              </span>
            </div>
         </div>`);
    })
    let buttons = document.querySelectorAll('.play-btn');
    if (buttons) {
      buttons.forEach(button => {
        // console.log("button", button);
        button.addEventListener("click", togglePlay);
      });
    }
  })

  spoon.onSnapshot(doc => {
    const spoonData = doc.data();
    spoonData.songs.forEach((song) => {
      document.querySelector('.new-album-5').insertAdjacentHTML(
        'beforeend', `
          <div class="container pt-3">
           <div class="row">
            <li class="px-2 song-name new-card mx-1 col-6">${song}</li>
            <span class="play-btn">
              <i class="far fa-play-circle col-2"></i>
              <i class="far fa-pause-circle"></i>
            </span>
           </div>
          </div>`);
    })
    let buttons = document.querySelectorAll('.play-btn');
    if (buttons) {
      buttons.forEach(button => {
        // console.log("button", button);
        button.addEventListener("click", togglePlay);
      });
    }
  })

})


// get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const playerVideo = player.querySelector('.player__video');

// play media code
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value
  // console.log(this.value);
  // console.log(this.name);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // console.log(e)
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

// ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', () => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);



