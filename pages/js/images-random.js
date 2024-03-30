const imgEl = document.getElementById('random-image');

const srcArray = [
'./images/law-1.jpg',
'./images/law-5.jpg',
'./images/law-12.jpg',
'./images/law3.jpg',
'./images/law4.jpg'
];


imgEl.addEventListener('click', () => {
  randomImage();
});

let index;
randomImage();

function randomImage() {
  const randomIndex = Math.floor(Math.random()*srcArray.length);
  if (randomIndex !== index) 
  {
    imgEl.src = srcArray[randomIndex];
    index = randomIndex;
  }
  else 
  {
    randomImage();
  }
}