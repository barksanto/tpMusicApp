document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  // console.log(app);
  const db = firebase.firestore();


  const transBtn = document.querySelector('.transatlantacism-btn');
  const transRow = document.querySelector('.added-album-1');


  const revelatorBtn = document.querySelector('.revelator-btn');
  const kidBtn = document.querySelector('.kid-btn');
  const alligatorBtn = document.querySelector('.alligator-btn');
  const blueprintBtn = document.querySelector('.blueprint-btn');

  const newAlbumList = document.querySelector('.new-album-1');
  transBtn.addEventListener('click', () => {
    let data = { songs: "Transatlantacism" };
    let setDoc = db.collection('newPurchase').doc('albums').set(data);

  })

  revelatorBtn.addEventListener('click', () => {
    let data = { songs: "Time the Revalator" };
    let setDoc = db.collection('newPurchase').doc('albums1').set(data);
  })

  kidBtn.addEventListener('click', () => {
    let data = { songs: "Kid A" };
    let setDoc = db.collection('newPurchase').doc('albums2').set(data);

  })

  alligatorBtn.addEventListener('click', () => {
    let data = { songs: "Alligator" };
    let setDoc = db.collection('newPurchase').doc('albums3').set(data);
  })

  blueprintBtn.addEventListener('click', () => {
    let data = { songs: "Blueprint" };
    let setDoc = db.collection('newPurchase').doc('albums4').set(data);
  })


})