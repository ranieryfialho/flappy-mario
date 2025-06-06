const mario = document.querySelector('.game-board .mario');
const pipe = document.querySelector('.pipe');
const gameOverScreen = document.querySelector('.game-over');
const startScreen = document.querySelector('.start-screen');
const gameBoard = document.querySelector('.game-board');

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

        gameOverScreen.style.display = 'block';
        clearInterval(loop);
    }
}

const startGame = () => {
    startScreen.style.display = 'none';
    gameBoard.style.display = 'block';

    loop = setInterval(checkCollision, 10);
};

const restartGame = () => {
    window.location.reload();
};

document.addEventListener('keydown', jump);