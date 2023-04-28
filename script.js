const mario = document.querySelector('.mario'); // Recupera o elemento do jogador
const health = document.querySelector('.health'); // Recupera o elemento do obstáculo
const clouds = document.querySelector('.clouds'); // Recupera o elemento das nuvens
const punctuation = document.querySelector('.pontuacao');
const item = document.querySelector('.item');

let counterPunctuation = 0;

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const stopingGame = (healthPosition, marioPosition) => {
  health.style.animation = 'none';
  health.style.left = `${healthPosition}px`;

  mario.style.animation = 'none';
  mario.style.bottom = `${marioPosition}px`;

  health.style.animation = 'none';
  health.style.left = `${healthPosition}px`;

  /* 
    mario.src = 'images/gameover.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
  */
}

const loop = setInterval(() => {
  const healthPosition = health.offsetLeft; // mudar
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (healthPosition <= 120 && healthPosition > 0 && marioPosition < 80 ) {
    stopingGame(healthPosition, marioPosition);

    clearInterval(loop);
  }
}, 10);

const loopPunctuation = setInterval(() => {
  const healthPosition = health.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (healthPosition <= 120 && healthPosition > 0 && marioPosition < 80 ) {
    stopingGame(healthPosition, marioPosition);

    return clearInterval(loopPunctuation);
  }

  counterPunctuation += 1;
  punctuation.innerHTML = `Pontuação: ${ counterPunctuation }`

  if (counterPunctuation === 25) {
    const message = document.querySelector('.message');
    const codification = document.querySelector('.codification');

    item.classList.add('item');
    item.classList.add('polaroid');
    item.classList.add('caption');

    message.classList.add('item');
    message.classList.add('polaroid');
    message.classList.add('caption');

    codification.classList.add('item');
    codification.classList.add('polaroid');
    codification.classList.add('caption');
    
    const polaroid = document.querySelector('.polaroid');

    const image = document.createElement('img');
    image.src = '../images/we.jpeg'

    const div = document.createElement('div');
    // div.innerHTML = 'I Miss London'
    
    message.innerHTML = 'I miss you';
    codification.innerHTML = 'É normal sentir falta de uma garota que vi só durante três dias?'

    polaroid.appendChild(image, div)
    item.appendChild(div);
  }
}, 1500);

document.addEventListener('keydown', jump);

console.log(mario);