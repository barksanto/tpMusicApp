document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  // console.log(app);
  const db = firebase.firestore();

  //Query songs from albums in firebase db
  const queen = db.collection('myAlbums').doc('Live Killers');
  const eagles = db.collection('myAlbums').doc('Their Greatest Hits');
  const michael = db.collection('myAlbums').doc('Thriller');
  const acdc = db.collection('myAlbums').doc('Back In Black');

  
  acdc.onSnapshot(doc => {
    const acdcData = doc.data();
    acdcData.songs.forEach((song) => {
      document.querySelector('.fourthAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name">${song}</h3>`)
    })
  })

  michael.onSnapshot(doc => {
    const michaelData = doc.data();
    michaelData.songs.forEach((song) => {
      document.querySelector('.thirdAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name">${song}</h3>`)
    })
  })

  eagles.onSnapshot(doc => {
    const eaglesData = doc.data();
    eaglesData.songs.forEach((song) => {
      document.querySelector('.secondAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name">${song}</h3>`)
    })
  })

  queen.onSnapshot(doc => {
    const qData = doc.data();
    qData.songs.forEach((song) => {
      document.querySelector('.firstAlbum').insertAdjacentHTML('beforeend', `<h3 class="px-2 song-name">${song}</h3>`);
    })
  })

})





// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();

//   firebase.auth().signInWithPopup(provider)
//     .then(result => {
//       const user = result.user;
//       document.write(`Hello ${ user.displayName }`);
//       console.log(user)
//     })
//     .catch(console.log)
// }