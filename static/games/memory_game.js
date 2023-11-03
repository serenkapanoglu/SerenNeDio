document.addEventListener("DOMContentLoaded", () => {
    const cardsArray = [
    {
    name:'image1',
    img:"/static/gorseller/image1.jpeg",
    },
    {
    name:'image2',
    img:"/static/gorseller/image2.jpg",
    },
    {
    name:'image3',
    img:"/static/gorseller/image3.jpg",
    },
    {
    name:'image3',
    img:"/static/gorseller/image4.jpg",
    },
    {
    name:'image4',
    img:"/static/gorseller/image5.jpg",
    },
    {
    name:'image6',
    img:"/static/gorseller/image7.jpg",
    },
    {
    name:'image7',
    img:"/static/gorseller/image8.jpg",
},
{
    name:'image8',
    img:"/static/gorseller/image9.jpeg",
},
{
    name:'image9',
    img:"/static/gorseller/image10.jpeg",
},
{
    name:'image10',
    img:"/static/gorseller/image11.png",
},
{
    name:'image11',
    img:"/static/gorseller/image12.jpeg",
},
{
    name:'image12',
    img:"/static/gorseller/image13.webp",
},
];
const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
const resetBtn = document.querySelector(".resetBtn");
grid.setAttribute('class', 'grid');
game.appendChild(grid);




gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};


const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

  resetBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('card');
    cards.forEach(card => {
      card.remove();
    });
    
  })




});







});