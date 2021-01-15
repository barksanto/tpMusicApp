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
        'beforeend', `<li class="px-2 song-name new-card mx-1">${song}</li>`);
    })
  })

  gillian.onSnapshot(doc => {
    const gillianData = doc.data();
    gillianData.songs.forEach((song) => {
      document.querySelector('.new-album-2').insertAdjacentHTML(
        'beforeend', `<li class="px-2 song-name new-card mx-1">${song}</li>`);
    })
  })

  jayZ.onSnapshot(doc => {
    const jayZData = doc.data();
    jayZData.songs.forEach((song) => {
      document.querySelector('.new-album-3').insertAdjacentHTML(
        'beforeend', `<li class="px-2 song-name new-card mx-1">${song}</li>`);
    })
  })

  radiohead.onSnapshot(doc => {
    const radioheadData = doc.data();
    radioheadData.songs.forEach((song) => {
      document.querySelector('.new-album-4').insertAdjacentHTML(
        'beforeend', `<li class="px-2 song-name new-card mx-1">${song}</li>`);
    })
  })

  spoon.onSnapshot(doc => {
    const spoonData = doc.data();
    spoonData.songs.forEach((song) => {
      document.querySelector('.new-album-5').insertAdjacentHTML(
        'beforeend', `<li class="px-2 song-name new-card mx-1">${song}</li>`);
    })
  })

  
})