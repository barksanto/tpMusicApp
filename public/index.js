document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  // console.log(app);
  const db = firebase.firestore();

  //Query songs from albums in firebase db for albums
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

  //These blocks of code take each of the songs from the Album and insert them as h3s into respective place
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
      document.querySelector('.firstAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name mx-1">${song}</h3>`);
    })
  })

  const mySongs = db.collection('mytop10').doc('topsongs');
  mySongs.onSnapshot(doc => {
    const mySongsData = doc.data();
    mySongsData.songs.forEach((song) => {
      const myList = document.querySelector('.my10songs');
      myList.insertAdjacentHTML('beforeend', `<li class="pl-4 my-song-name col-8 text-left">${song}</li>`);
    })
  })


  // songs to buy pulling from db
  const transRow = document.querySelector('.added-album-1');
  const transData = db.collection('newPurchase').doc('albums')

  const revRow = document.querySelector('.added-album-2');
  const revData = db.collection('newPurchase').doc('albums1');

  const kidRow = document.querySelector('.added-album-3');
  const kidData = db.collection('newPurchase').doc('albums2');

  const alligatorRow = document.querySelector('.added-album-4');
  const alligatorData = db.collection('newPurchase').doc('albums3');

  const blueprintRow = document.querySelector('.added-album-5');
  const blueprintData = db.collection('newPurchase').doc('albums4');

  const newAlbumRows = [transRow, revRow, kidRow, alligatorRow, blueprintRow]
  //add display:none to these elemet suntil they are purchased
  newAlbumRows.forEach((element) => {
    element.classList.add('d-none');
  })

  // if boolean is true, remove the d-none class form the div so it can show
  transData.onSnapshot(doc => {
    const trans = doc.data()
    if (trans.songs) {
      transRow.innerHTML = trans.songs
      transRow.classList.remove('d-none');
    }
    return
  })

  revData.onSnapshot(doc => {
    const rev = doc.data()
    if (rev.songs) {
      revRow.innerHTML = rev.songs
      revRow.classList.remove('d-none');
    }
    return
  })

  kidData.onSnapshot(doc => {
    const kid = doc.data()
    if (kid.songs) {
      kidRow.innerHTML = kid.songs
      kidRow.classList.remove('d-none');
    }
    return
  })

  alligatorData.onSnapshot(doc => {
    const alligator = doc.data()
    if (alligator.songs) {
      alligatorRow.innerHTML = alligator.songs
      alligatorRow.classList.remove('d-none');
    }
    return
  })

  blueprintData.onSnapshot(doc => {
    const blueprint = doc.data()
    if (blueprint.songs) {
      blueprintRow.innerHTML = blueprint.songs
      blueprintRow.classList.remove('d-none');
    }
    return
  })

})

// change text in button depending if list is active or not
const albumBtn = document.querySelector('.album-btn');
const top10 = document.querySelector('#album10');
albumBtn.addEventListener('click', () => {
  top10.classList.toggle('d-none');
  if (top10.classList.contains('d-none')) {
    albumBtn.innerHTML = "Show Top 10 Albums"
  } else {
    albumBtn.innerHTML = "Hide Top 10 Albums"
  }
})

const mySongBtn = document.querySelector('.my-songs-btn');
const my10songs = document.querySelector('.my10songs');
mySongBtn.addEventListener('click', () => {
  my10songs.classList.toggle('d-none');
  if (my10songs.classList.contains('d-none')) {
    mySongBtn.innerHTML = "Show My Songs";
  } else {
    mySongBtn.innerHTML = "Hide My Songs";
  }
})


// add one of the top 10 songs to db
