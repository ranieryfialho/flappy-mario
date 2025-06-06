// Seleciona os elementos corretos
const mario = document.querySelector('.game-board .mario');
const pipe = document.querySelector('.pipe');
const gameOverScreen = document.querySelector('.game-over');
const startScreen = document.querySelector('.start-screen');
const gameBoard = document.querySelector('.game-board');
const clouds = document.querySelector('.game-board .clouds');

let loop;

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const checkCollision = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        const cloudsPosition = window.getComputedStyle(clouds).right;
        clouds.style.animation = 'none';
        clouds.style.right = cloudsPosition;

        gameOverScreen.style.display = 'block';
        clearInterval(loop);
    }
}

const startGame = () => {
    startScreen.style.display = 'none';
    gameBoard.style.display = 'block';

    const referenceWidth = 1920;
    const referenceDuration = 2.2;

    const currentWidth = window.innerWidth;

    let newDuration = referenceDuration * (currentWidth / referenceWidth);

    if (newDuration < 1.0) {
        newDuration = 1.0;
    }

    pipe.style.setProperty('--pipe-speed', `${newDuration.toFixed(2)}s`);

    loop = setInterval(checkCollision, 10);
};

const restartGame = () => {
    gameOverScreen.style.display = 'none';

    mario.src = './img/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '0px';
    mario.style.animation = '';
    mario.style.bottom = '0px';

    pipe.style.left = '';
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';

    clouds.style.right = '';
    clouds.style.animation = 'clouds-animation 20s infinite linear';

    clearInterval(loop);
    loop = setInterval(checkCollision, 10);
};

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);