const cardContainer = document.querySelector('.card-container');
const winz = document.querySelector('.winz');
const losez = document.querySelector('.losez');

const [smallBtn, mediumBtn, largeBtn] = document.querySelectorAll('button');
let wins = 0;
let loseesss = 0;
let initalCardsNumbers = 0;
const btnList = [smallBtn, mediumBtn, largeBtn];

smallBtn.addEventListener('click', () => {
  initalCardsNumbers = 12;
  safe(12);
  startTimer();
  for (const b of btnList) {
    b.classList.add('disapear');
  }
});
mediumBtn.addEventListener('click', () => {
  initalCardsNumbers = 24;
  safe(24);
  startTimer();
  for (const b of btnList) {
    b.classList.add('disapear');
  }
});
largeBtn.addEventListener('click', () => {
  initalCardsNumbers = 36;
  safe(36);
  startTimer();
  for (const b of btnList) {
    b.classList.add('disapear');
  }
});

console.log('🏊 ');
const cardsArray = [];
let currentData = 0;
let currentCards = [];

const createCards = (numOfCards) => {
  for (let i = 0; i < numOfCards; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    if (i % 2 === 0) {
      currentData = i;
    }
    card.setAttribute('data', `${currentData}`);
    card.innerHTML = `${currentData}`;
    // ev on cards
    card.addEventListener('click', (e) => {
      const cardy = e.currentTarget;
      console.log(currentCards);
      if (currentCards.length < 2 && !currentCards.includes(cardy)) {
        currentCards.push(cardy);
        cardy.classList.remove('hide-card');
        tick();
        // console.log(cardy.getAttribute('data'));
      }
    });
    cardsArray.push(card);
  }
};
function clearCurrentList() {
  setTimeout(() => {
    currentCards = [];
  }, 1000);
}
function checkForWin() {
  if (wins === (initalCardsNumbers / 2)) {
    alert('you won!');
    location.reload();
  }
}
async function waitFortime() {
  await hideCards2();
  await clearCurrentList();
}
function hideCards2() {
  for (const card of currentCards) {
    setTimeout(() => { card.classList.add('hide-card'); }, 1000);
  }
}
function shuffle(array) {
  let currentIndex = array.length; let temporaryValue; let
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function appendCards() {
  for (const card of cardsArray) {
    cardContainer.append(card);
  }
}
async function hideCards() {
  for (const card of cardsArray) {
    await card.classList.add('hide-card');
  }
}
// *COMP
function tick() {
  if (currentCards[1]) {
    if (currentCards[0].getAttribute('data') === currentCards[1].getAttribute('data')) {
      for (const card of currentCards) {
        card.classList.add('disapear');
      }
      waitFortime();
      wins++;
      winz.innerHTML = wins;
      checkForWin();
    } else {
      waitFortime();
      loseesss++;
      losez.innerHTML = loseesss;
    }
  }
}

async function safe(numberOfCards) {
  await createCards(numberOfCards);
  await shuffle(cardsArray);
  await hideCards();
  await appendCards();
}
// safe(12); // call
