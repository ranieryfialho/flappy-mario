// Seleciona os elementos corretos
const mario = document.querySelector('.game-board .mario');
const pipe = document.querySelector('.pipe');
const gameOverScreen = document.querySelector('.game-over');
const startScreen = document.querySelector('.start-screen');
const gameBoard = document.querySelector('.game-board');
const clouds = document.querySelector('.game-board .clouds');

const audio = document.getElementById("bgm");
const audioToggleBtn = document.getElementById("toggle-audio");
const pointSound = document.getElementById('point-sound');
const gameOverSound = document.getElementById('gameover-sound');

let loop;
let audioEnabled = true;
let isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
let gameStarted = false;

audio.volume = 0.5;
audio.loop = true;

let score = 0;

window.addEventListener("DOMContentLoaded", () => {
    if (!isMobile && audioEnabled) {
        audio.play().catch(() => {});
    }
});

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const checkCollision = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition < 0 && !pipe.passed) {
        pipe.passed = true;
        score += 100;
        const scoreElement = document.getElementById('score');
        if(scoreElement) scoreElement.textContent = `Score: ${score}`;

        if (audioEnabled && pointSound) {
            pointSound.currentTime = 0;
            pointSound.play();
        }
    }


    if (pipePosition > 300) {
        pipe.passed = false;
    }


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

        audio.pause();

        if (audioEnabled && gameOverSound) {
            gameOverSound.currentTime = 0;
            gameOverSound.play();
        }
    }
};

function startGame() {
    if (!gameStarted) {
        gameStarted = true;

        startScreen.style.display = 'none';
        gameBoard.style.display = 'block';

        if (isMobile && audioEnabled) {
            audio.play().catch(() => {});
        }

        const referenceWidth = 1920;
        const referenceDuration = 2.2;
        const currentWidth = window.innerWidth;

        let newDuration = referenceDuration * (currentWidth / referenceWidth);
        if (newDuration < 1.0) {
            newDuration = 1.0;
        }

        pipe.style.setProperty('--pipe-speed', `${newDuration.toFixed(2)}s`);
        loop = setInterval(checkCollision, 10);
    }
}

function restartGame() {
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

    score = 0;
    const scoreElement = document.getElementById('score');
    if(scoreElement) scoreElement.textContent = `Score: ${score}`;

    if (audioEnabled) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }
}

function MenuGame() {
    window.location.href = "index.html";
}

audioToggleBtn.addEventListener("click", () => {
    audioEnabled = !audioEnabled;

    if (audioEnabled) {
        audio.play().catch(() => {});
        audioToggleBtn.textContent = "🔈 Som ligado";
    } else {
        audio.pause();
        audioToggleBtn.textContent = "🔇 Som desligado";
    }
});

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);