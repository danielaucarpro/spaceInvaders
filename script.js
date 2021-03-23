const state = "";
const playerLife = 3;
const enemyLife = 1;

while (state === title) {
    let startBtn = document.getElementById('start');

    //show title screen

    //play music

    //start game
    startBtn.onclick = function () { iniciateGame() };
    function iniciateGame() {
        state = game;
    }
}

while (state === game) {
    //CHANGE SCREEN
    //clear screen
    //display new one

    //ENEMY
    //spawn emenies (waves)
    //death statement
    //load sounds

    //PLAYER OBJ
    //spawn player
    //get player shooting
    //load sounds
    //get player movement
    //get input 

    //GENERAL
    //show lives
    //show score

    //if live = 0 change the state of the game to game over.
    if (life <= 0) {
        state = gameOver;
    }
}

while (state === gameOver) {
    //CHANGE SCREEN
    //clear screen
    //display new one

    //register score

    //set reset button
}

//
//Vector 2d Obj
//

