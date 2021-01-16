document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  // console.log(app);
  const db = firebase.firestore();


  const transBtn = document.querySelector('.transatlantacism-btn');
  const revelatorBtn = document.querySelector('.revelator-btn');
  const kidBtn = document.querySelector('.kid-btn');
  const alligatorBtn = document.querySelector('.alligator-btn');
  const blueprintBtn = document.querySelector('.blueprint-btn');

  const newAlbumList = document.querySelector('.new-album-1');

  function myFunction(albumName) {
    alert(`${albumName} was added to My New Albums on the home page!`);
  }

  transBtn.addEventListener('click', () => {
    let data = { songs: "Transatlantacism" };
    let setDoc = db.collection('newPurchase').doc('albums').set(data);
    // myFunction("Transatlantacism");
    myFunction("Transatlantacism")
  })

  revelatorBtn.addEventListener('click', () => {
    let data = { songs: "Time the Revalator" };
    let setDoc = db.collection('newPurchase').doc('albums1').set(data);
    myFunction("Time the Revalator");
  })

  kidBtn.addEventListener('click', () => {
    let data = { songs: "Kid A" };
    let setDoc = db.collection('newPurchase').doc('albums2').set(data);
    myFunction("Time the Revalator");

  })

  alligatorBtn.addEventListener('click', () => {
    let data = { songs: "Alligator" };
    let setDoc = db.collection('newPurchase').doc('albums3').set(data);
    myFunction("Alligator");
  })

  blueprintBtn.addEventListener('click', () => {
    let data = { songs: "Blueprint" };
    let setDoc = db.collection('newPurchase').doc('albums4').set(data);
    myFunction("Blueprint");
  })


})