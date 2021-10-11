let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
var bestScores = 0;

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 300);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 50); //adicionado um time out para que a classe selected seja removida. (fazer o Genius piscar ao invéz de ficar aceso)
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        document.getElementById('outScore').value = score;
        document.getElementById('outEvents').value = `Você acertou!\nPróximo nível!`;
        nextLevel();
    }   
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert('Você perdeu o jogo!\nClique no botão START para iniciar um novo jogo.');
    document.getElementById('outScore').value = score;
    if (bestScores <= score) {
        bestScores = score;
        bestScores = score-1;
        if (bestScores < 0) {
            bestScores = 0;
        }
    }      
    document.getElementById('outBestScore').value = bestScores;  
    order = [];
    clickedOrder = [];
    btnComeca();
}

//funcao de inicio do jogo
let playGame = () => {
    document.getElementById('outEvents').value = 'Bem vindo ao Genius!\nIniciando novo jogo...'; 
    score = 0;
    document.getElementById('outScore').value = score;
    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
let btnComeca = () => {
    order = [];
    clickedOrder = [];
    playGame();
}
