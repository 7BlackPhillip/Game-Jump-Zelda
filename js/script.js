const hero = document.querySelector('.hero');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score')
const clouds = document.querySelector('.clouds');


let count = 0;

const jump = () => {
    hero.classList.add('jump');

    setTimeout(() => {
    hero.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    // "+" antes da função, para tornar o retorno de string em um valor numérico
    const heroPosition = +window.getComputedStyle(hero).bottom.replace('px', '');

    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');

    count++;
    score.innerHTML = `SCORE: ${count}`;

    //console.log(loop);

    if (pipePosition <= 120 && pipePosition >0 && heroPosition < 85) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        hero.style.animation = 'none';
        hero.style.bottom = `${heroPosition}px`

        hero.src = './assets/link morto2.png'
        hero.style.marginBottom = '-10px'

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`

        count = 0;

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);


