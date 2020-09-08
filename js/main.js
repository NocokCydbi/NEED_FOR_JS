const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

car.classList.add('car');

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const setting = {
    start: false,
    score: 0,
    speed: 3
};

let startGame = ()=>{
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
},
    playGame = () =>{
        if(setting.start){
            requestAnimationFrame(playGame);            
        }
    },
    startRun = (e) => {
    event.preventDefault();
    keys[e.key] = true;
},
    stopRun = (e) => {
        event.preventDefault();
        keys[e.key] = false;    
    }
start.addEventListener('click', startGame )
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

