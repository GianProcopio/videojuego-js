const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const up = document.getElementById('up');
const down = document.getElementById('down');
const right = document.getElementById('right');
const left = document.getElementById('left');

let canvasSize;
let elementSize;

const playerPosition = {
    x: undefined,
    y: undefined
};

const giftPosition = []

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

    const mapa = maps[0];
    const mapRows = mapa.trim().split('\n');
    const mapCols = mapRows.map(row => row.trim().split(''));

    context.clearRect(0,0, canvasSize, canvasSize);
    
    mapCols.forEach((row, rowIndex)=>{
        row.forEach((col,colIndex) => {
            const  emoji = emojis[col];
            const posY = elementSize * (rowIndex + 1);
            const posX = elementSize * colIndex;
            context.fillText(emoji, posX, posY)

            if(col == ['O']){
                if(playerPosition.x == undefined && playerPosition.y == undefined){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                }
                
            }
            
        })
    })
    movePlayer();
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
// const movement = elementSize;
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