const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const up = document.getElementById('up');
const down = document.getElementById('down');
const right = document.getElementById('right');
const left = document.getElementById('left');
const buttons = document.getElementById('buttons');
const messages = document.getElementById('messages');
const gameOver = document.getElementById('game-over');

const btnJugar = document.getElementById('btn-jugar');

btnJugar.addEventListener('click', ()=>{
    location.reload();
})

let canvasSize;
let elementSize;
let level = 0;
let lives = 3;


let timeStart;
let timePlayer;
let timeInterval;


const playerPosition = {
    x: undefined,
    y: undefined
};

const giftPosition = {
    x: undefined,
    y: undefined
}

let enemyPosition = []; 

window.addEventListener('load', game);
window.addEventListener('resize', size);

document.addEventListener('keydown', movePlayerByKey);

up.addEventListener('click', movePlayerUp);
down.addEventListener('click', movePlayerDown);
left.addEventListener('click', movePlayerLeft);
right.addEventListener('click', movePlayerRight);



function game(){
    
    if(window.innerHeight>window.innerWidth){
        canvasSize = window.innerWidth*0.7;
    }
    else{
        canvasSize = window.innerHeight*0.7;
    }
    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height',canvasSize);
    
    
    elementSize = canvasSize / 10 - 1.5;

    context.font = elementSize + "px Verdana";
    context.textAlign = "";
    
    const mapa = maps[level];
    if(!mapa){
        gameWin();
        return;
    }

    if(!timeStart){
        timeStart = Date.now();
        timeInterval = setInterval(showTime, 100)
    }

    const mapRows = mapa.trim().split('\n');
    const mapCols = mapRows.map(row => row.trim().split(''));

    showLives();

    context.clearRect(0,0, canvasSize, canvasSize);
    enemyPosition = [];

    mapCols.forEach((row, rowIndex)=>{
        row.forEach((col,colIndex) => {
            const  emoji = emojis[col];
            const posY = elementSize * (rowIndex + 1);
            const posX = elementSize * colIndex;
            context.fillText(emoji, posX, posY)

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                }  
            }else if(col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            }
            else if(col == 'X'){
                enemyPosition.push(
                    {
                        x: posX,
                        y: posY
                    })
            }
            
        })
    })
    movePlayer();  
}

function gameWin(){
    clearInterval(timeInterval);
    level = 0;
    let confirmarRevancha = confirm("Terminó el juego, quieres jugar otra vez?")
    if(confirmarRevancha){
        timeStart = undefined;
        level -= 1;
        game();
    }else{
        canvas.style.display = 'none';
        buttons.style.display = 'none';
        messages.style.display = 'none';
        gameOver.style.display = 'flex';
    }
    
}
const vidas = document.getElementById('vidas');
const tiempo = document.getElementById('tiempo');

function levelFail(){
    lives --;
    if(lives == 0){
        level = 0;
        timeStart = undefined;
        lives = 3;
        game();
        
    }
    playerPosition.x = undefined;
    playerPosition.y = undefined;
    game();
    
}

function showLives(){
    vidas.innerHTML = emojis['HEART'].repeat(lives)
}

function showTime(){
    tiempo.innerHTML = ((Date.now() - timeStart) / 1000).toFixed(2);
}

function levelWin(){
    level++;
    game()
    if(mapa > 2){
        level = 0;
        gameWin();
        return;
    }
}

function size(){
    if(window.innerWidth < window.innerHeight){
        canvasSize = window.innerWidth * 0.6;
    }else if(window.innerHeight > window.innerWidth){
    canvasSize = window .innerHeight * 0.6; 
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    
    game()
}
function movePlayer(){  
    let giftColisionX = playerPosition.x.toFixed(2) == giftPosition.x.toFixed(2);
    let giftColisionY = playerPosition.y.toFixed(2) == giftPosition.y.toFixed(2);
    let giftColision = giftColisionX && giftColisionY;
    if(giftColision){
        levelWin();
    }
   
    const enemyCollision = enemyPosition.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
      });
    
      if (enemyCollision) {
        levelFail()
      }

    context.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}
function movePlayerByKey(evnt){
    const keys = {
        UP: 38 ,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    }
        switch(evnt.keyCode){
            case keys.UP:
                movePlayerUp();
                break;
            case keys.DOWN:
                movePlayerDown();
                break;
            case keys.LEFT:
                movePlayerLeft();
                break;
            case keys.RIGHT:
                movePlayerRight();
                break;
            default: console.log("Incorrecto");    
        }
    
}
function movePlayerUp(){
    if((playerPosition.y - elementSize) > elementSize){
        playerPosition.y -= elementSize;
        game()
    }
}
function movePlayerDown(){
    if((playerPosition.y + elementSize) > canvasSize){
        console.log('out');
    }else{
        playerPosition.y += elementSize;
        game();
    }
    
}
function movePlayerLeft(){
    if((playerPosition.x - elementSize + elementSize) < elementSize){
        console.log('out');
    }else{
        playerPosition.x -= elementSize;
        game();
    }
    
}
function movePlayerRight(){
    if((playerPosition.x + elementSize) < canvasSize - elementSize){
        playerPosition.x += elementSize;
    game();
    }
    
}