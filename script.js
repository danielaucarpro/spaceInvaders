const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

//number variables
const interval = 24;
const score = 0;
const highscore = 0;
const canvasSize = 450;
//gravity
playerY -= playerDY -= 0.5;

//Creating image class for my assets
//player
const player = new Image();
player.src = './img/player.png'
const playerLife = 3;
const playerX = 0;
const playerY = 200;
const playerSize = 24;

//player object
// const player = {
//     life = 3,
//     xPosition = 0,
//     yPosition = 200,
//     size = 24
// }

//projectile
const projectile = new Image();
projectile.src = '';
const colRectP = {
    x: 20,
    y: 10,
    width: 10,
    height: 10
}

//enemy
const enemy = new Image();
enemy.src = './img/enemy1.png';
// const enemyX = genRandom(350, 300);
const enemyY = genRandom(350, 150);
const enemyLife = genRandom(3, 1);
const enemySize = 24;

const enemy = {
    life: 1,
    xPosition: 0,
    yPosition: genRandom(350, 150),
    size: 24,
    colRect = {
        x: 5,
        y: 5,
        width: 50,
        height: 50
    }
}

function genRandom(max, min) {
    Math.floor(Math.random() * (max - min) + min);
}

//pipe
const pipeWidth = 24;
const topPipeBotY = 24;
const pipeGap = 200;
const pipeX = 450;

//key mapping
myCanvas.onkeyup = function (event) {
    if (event.keyCode === 32) {
        playerY = 9;
    }
}
myCanvas.onclick = () => (shoot());

function shoot() {

}

//GAME LOOP
setInterval(() => {
    //
    context.fillStyle = 'skyblue';
    context.fillRect(0, 0, canvasSize, canvasSize);

    //draw player
    context.drawImage(player, playerX, playerY, playerSize * (103 / 63), playerSize);

    //projectile
    projectileX += 8;

    //pipes
    context.fillStyle = '#d01e00';
    pipeX -= 8;
    pipeX < - pipeWidth && ((pipeX = canvasSize), (topPipeBotY = pipeGap * Math.random()));

    // more pipes
    context.fillRect(pipeX, 0, pipeWidth, topPipeBotY); // Draw top pipe
    context.fillRect(pipeX, topPipeBotY + pipeGap, pipeWidth, canvasSize); // Draw bottom pipe

    //draw enemies
    //fill a rectangle with imgs
    context.fillRect(enemy, enemyX, enemyY, enemySize * (103 / 63), enemySize);
    enemyX -= 8;

    //collision
    if (colRectE.x < colRectP.x + colRectP.width &&
        colRectE.x + colRectE.width > colRectP.x &&
        colRectE.y < colRectP.y + colRectP.height &&
        colRectE.y + colRectE.height > colRectP.y) {
        delete enemy;
        delete colRectE;
    }

    // start with other elements like score
    context.fillStyle = "black";
    //syntax (text, x coordinate, y coordinate)
    context.fillText(score++, 9, 25); // Increase and draw score

    highscore = highscore < score ? score : highscore; // New best score?

    context.fillText(`Best: ${highscore}`, 9, 50); // Draw best score

    (((playerY < topPipeBotY || playerY > topPipeBotY + pipeGap) && pipeX < playerSize * (103 / 63)) // Bird hit pipe?
        || playerY > canvasSize) && // Bird falls off screen
        ((playerDY = 0), (playerY = 200), (pipeX = canvasSize), (score = 0)); // Bird died

}, interval)

function reset() {
    //save the score on leader board
    //sort 
    scoreArr += score;
    let scoreList = document.getElementById('scoreList');
    let scoreArr = [];

    for (i = 0; i < scoreArr.length; i++) {
        scoreList.append(`<li>${scoreArr[i]}</li>`);
        scoreArr.sort()
    }
}