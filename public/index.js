document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  // console.log(app);
  const db = firebase.firestore();

  //Query songs from albums in firebase db
  const queen = db.collection('myAlbums').doc('Live Killers');
  const eagles = db.collection('myAlbums').doc('Their Greatest Hits');
  const michael = db.collection('myAlbums').doc('Thriller');
  const acdc = db.collection('myAlbums').doc('Back In Black');
  const meatLoaf = db.collection('myAlbums').doc('Bat Out of Hell');
  const pinkFloyd = db.collection('myAlbums').doc('The Dark Side of the Moon');
  const whitney = db.collection('myAlbums').doc('The Bodyguard');
  const beegees = db.collection('myAlbums').doc('Saturday Night Fever');
  const fleetwood = db.collection('myAlbums').doc('Rumours');
  const shania = db.collection('myAlbums').doc('Come On Over');

  shania.onSnapshot(doc => {
    const shaniaData = doc.data();
    shaniaData.songs.forEach((song) => {
      document.querySelector('.tenthAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 pt song-name ml-2">${song}</h3>`)
    })
  })

  fleetwood.onSnapshot(doc => {
    const fleetwoodData = doc.data();
    fleetwoodData.songs.forEach((song) => {
      document.querySelector('.ninthAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name ml-2">${song}</h3>`)
    })
  })

  beegees.onSnapshot(doc => {
    const beegeesData = doc.data();
    beegeesData.songs.forEach((song) => {
      document.querySelector('.eighthAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name ml-2">${song}</h3>`)
    })
  })

  whitney.onSnapshot(doc => {
    const whitneyData = doc.data();
    whitneyData.songs.forEach((song) => {
      document.querySelector('.seventhAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name ml-2">${song}</h3>`)
    })
  })

  pinkFloyd.onSnapshot(doc => {
    const pinkFloydData = doc.data();
    pinkFloydData.songs.forEach((song) => {
      document.querySelector('.sixthAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name ml-2">${song}</h3>`)
    })
  })

  meatLoaf.onSnapshot(doc => {
    const meatLoafData = doc.data();
    meatLoafData.songs.forEach((song) => {
      document.querySelector('.fifthAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name ml-2">${song}</h3>`)
    })
  })

  acdc.onSnapshot(doc => {
    const acdcData = doc.data();
    acdcData.songs.forEach((song) => {
      document.querySelector('.fourthAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name ml-2">${song}</h3>`)
    })
  })

  michael.onSnapshot(doc => {
    const michaelData = doc.data();
    michaelData.songs.forEach((song) => {
      document.querySelector('.thirdAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name ml-2">${song}</h3>`)
    })
  })

  eagles.onSnapshot(doc => {
    const eaglesData = doc.data();
    eaglesData.songs.forEach((song) => {
      document.querySelector('.secondAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name ml-2">${song}</h3>`)
    })
  })

  queen.onSnapshot(doc => {
    const qData = doc.data();
    qData.songs.forEach((song) => {
      document.querySelector('.firstAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name ml-2">${song}</h3>`);
    })
  })

})

const albumBtn = document.querySelector('.album-btn');
const top10 = document.querySelector('#album10');
albumBtn.addEventListener('click', () => {
  top10.classList.toggle('d-none')

})

