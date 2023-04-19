const hero = document.querySelector('.hero');
const tree = document.querySelector('.tree');
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

    const treePosition = tree.offsetLeft;

    // "+" antes da função, para tornar o retorno de string em um valor numérico
    const heroPosition = +window.getComputedStyle(hero).bottom.replace('px', '');

    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');

    count++;
    score.innerHTML = `SCORE: ${count}`;

    //console.log(loop);

    if (treePosition <= 120 && treePosition >0 && heroPosition < 85) {

        tree.style.animation = 'none';
        tree.style.left = `${treePosition}px`

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


