context = c.getContext('2d');
const myCanvas = document.getElementById('myCanvas');
const interval = 24;
playerSize = interval

//number variables
const playerLife = 3;
const enemyLife = 1;
const score = 0;

//Creating image class for my assets
//player
const player = new Image();
player.src = './img/player.png'
//player position
playerX = 150;
playerY = 225;
playerSize;

//enemy
const enemy = new Image();
//bullet
const bullet = new Image();
const positionToShoot = '';
const shootVel = 10;



setInterval(() => {
    //score
    context.fillStyle = 'white';
    context.fillText(score++);

    //draw enemies
    //fill a rectangle with imgs
    context.fillRect()

    //draw player
    context.drawImage(player, playerX, playerY, playerSize * (103 / 63), playerSize);

    //player input and player movement
    //right arrow
    context.addEventListener('keydown', function (event) {
        if (event.keyCode === 39) {
            playerX += 1;
        }
        else if (playerX === 300) {
            playerX += 0;
        }
    });
    //left arrow
    context.addEventListener('keydown', function (event) {
        if (event.keyCode === 37) {
            playerX -= 1;
        }
        else if (playerX === 0) {
            playerX -= 0;
        }
    });
    //space
    context.addEventListener('keydown', function (event) {
        if (event.keyCode === 32) {
            shoot();
        }
    });
}, interval)

function shoot(){
    //spawn shoot img in front of player
}