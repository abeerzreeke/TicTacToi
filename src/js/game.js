import { desk, friend, sec, statusDisplay, gameContainer, gameRestart, titleContainer, rivalIcon, resetCurrentProfileRival, resetCurrentProfile } from './index.js';

var level = 0
var profileO = document.querySelector('.header .rival .profile-points')
var pointO = parseInt(profileO.innerHTML)

var profileX = document.querySelector('.header .profile .profile-points')
var pointX = parseInt(profileX.innerHTML)

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

var playWithPc = false
var cellPlayer = []
var cellPc = []
var pcPlay = true

const numLevel = () => `Level   ${parseInt(level + 1)}/5`;
titleContainer.innerHTML = `Welcome <br> Please Choose With Who You Want To Play` 

const winningConditions = [
    
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handleCellPlayedWithPC(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = 'X';
    clickedCell.innerHTML = 'X';
}


function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}
function reStart() {
    for (let i = 0; i < 9; i++) {
        var cellCu = gameContainer.children[i]
        if(playWithPc){
            cellCu.removeEventListener('click', handleCellClick)
            cellCu.addEventListener('click', handleCellClickPc)
        }
        
        
    }
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    cellPc = []
    cellPlayer = []
    pcPlay = true
    titleContainer.innerHTML = numLevel()
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    return;
}

function showWin() {
    gameActive = false
    level = 0
    if (pointX > pointO) {
        titleContainer.innerHTML = `Player X has won! <br> ${pointX} - ${pointO}`
        
    }
    else if (pointO > pointX) {
        titleContainer.innerHTML = `Player O has won! <br> ${pointO} - ${pointX}`
    }
    else {
        titleContainer.innerHTML = `Game ended in a draw! <br> ${pointX} - ${pointO} `
    }
    sec.children[0].appendChild(gameRestart)
    return
}

function handleResultValidation() {

    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    console.log(level)
    if (roundWon) {
        level += 1
        if (level == 5) {
            if (currentPlayer == 'X') {

                pointX += 1
                profileX.innerHTML = pointX
            }
            else {
                pointO += 1
                profileO.innerHTML = pointO
            }

            showWin()
            return
        }
        if (currentPlayer == 'X') {
            pcPlay = false
            pointX += 1
            profileX.innerHTML = pointX
            gameActive = false
            setTimeout(function () {
                reStart()
            }, 1500);
        }
        else {
            pcPlay = false
            pointO += 1
            profileO.innerHTML = pointO
            gameActive = false
            setTimeout(function () {
                reStart()
            }, 1500);
        }
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        level += 1

        if (level == 5) {
            showWin()
            return
        }
        gameActive = false
        setTimeout(function () {
            reStart()
        }, 1500);
        return;
    }
    handlePlayerChange();
}

function generateRandom(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (cellPlayer.includes(num) || cellPc.includes(num)) ? generateRandom(min, max) : num;
}

function handleCellPC(){

    var random = generateRandom(0, 8)    
    cellPc.push(random)
    var cellPC = document.getElementsByClassName('cell')[random]
    gameState[random] = 'O'
    setTimeout(() => {
        cellPC.innerHTML = 'O';
    }, 500);
    console.log(gameState)
    handleResultValidation();
    for (let i = 0; i < 9; i++) {
        var cellCu = gameContainer.children[i]
        cellCu.addEventListener('click', handleCellClickPc)
    }
}

function handleCellClickPc(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    cellPlayer.push(clickedCellIndex)

    for (let i = 0; i < 9; i++) {
        var cellCu = gameContainer.children[i]
        cellCu.removeEventListener('click', handleCellClickPc)
        
    }

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayedWithPC(clickedCell, clickedCellIndex);
    handleResultValidation();
    if(pcPlay){
        handleCellPC()
    }
    
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

gameRestart.onclick = function handleRestartGame() {
    gameActive = true;
    pointX = 0
    pointO = 0
    profileX.innerHTML = 0
    profileO.innerHTML = 0
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = ''
    titleContainer.innerHTML = ''
    titleContainer.innerHTML = `Welcome <br> Please Choose With Who You Want To Play` 
    sec.children[0].removeChild(gameRestart)
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}


function emptyContuner(){
    titleContainer.innerHTML = numLevel();
    pcPlay = true
    cellPc = []
    cellPlayer = []
    gameState = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}


function chooseUserOrPc(cureentChoose) {

    if ((cureentChoose.getAttribute('class')) == 'pc-icon') {
        playWithPc = true
        rivalIcon.innerHTML = '<i class="fas fa-desktop"></i>'
        emptyContuner()
        for (let i = 0; i < 9; i++) {
            var cellCu = gameContainer.children[i]
            cellCu.removeEventListener('click', handleCellClick)
            cellCu.addEventListener('click', handleCellClickPc)
            
        }
        return false
    }
    else if ((cureentChoose.getAttribute('class')) == 'frind-icon') {
        rivalIcon.innerHTML = ' <i class="fas fa-user-friends"></i>'
        emptyContuner()
        playWithPc = false
        for (let i = 0; i < 9; i++) {
            var cellCu = gameContainer.children[i]
            cellCu.removeEventListener('click', handleCellClickPc)
            cellCu.addEventListener('click', handleCellClick)
        }
        return false
    }
}

function start(){
    cellPc = []
    cellPlayer = []
    level = 0
    pointX = 0
    pointO = 0
    profileO.innerHTML = parseInt(0)
    profileX.innerHTML = parseInt(0)
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

desk.onclick = function chooseWhith(e) {
    start()
    chooseUserOrPc(e.target)
}

friend.onclick = function chooseWhith(e) {
    start()
    chooseUserOrPc(e.target)
}

resetCurrentProfileRival.onclick = function resetPoint() {
    start()
    titleContainer.innerHTML = numLevel()
   
}

resetCurrentProfile.onclick = function resetPoint() {
    start()
    titleContainer.innerHTML = numLevel()
   
}

