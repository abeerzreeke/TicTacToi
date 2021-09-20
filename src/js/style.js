import { gameTitle, statusDisplay, gameContainer, gameRestart, section} from './index.js';


statusDisplay.style.color = ' rgb(36 35 33)'
statusDisplay.style.fontSize = '50px'
statusDisplay.style.margin = '0px auto'
statusDisplay.style.fontFamily = '"Permanent Marker", cursive'
statusDisplay.style.marginTop = '31%'


section.style.textAlign = 'center'

gameTitle.style.fontFamily = '"Permanent Marker", cursive'
gameTitle.style.fontSize = '45px'
gameTitle.style.color = '#d7a62f'
gameTitle.style.padding = '5%'

gameContainer.style.display = 'grid'
gameContainer.style.gridTemplateColumns = 'repeat(3, auto)'
gameContainer.style.width = '310px'
gameContainer.style.margin = '14% auto'  
gameContainer.style.color = 'black'
gameContainer.style.fontFamily = '"Permanent Marker", cursive'


var cell= document.querySelectorAll('.cell')
for (let i = 0; i < 9; i++) {
    cell[i].style.width = '100px'
    cell[i].style.height = '100px'
    cell[i].style.boxShadow = '2px 2px 2px 2px rgb(215, 166, 47)'
    cell[i].style.border = '2px solid rgb(215, 166, 47)'
    cell[i].style.lineHeight = '100px'
    cell[i].style.fontSize = '60px'
    cell[i].style.cursor = 'pointer'
}


gameRestart.style.backgroundColor = 'rgb(247, 228, 172);'
gameRestart.style.width = '200px'
gameRestart.style.height = '50px'
gameRestart.style.fontSize = '25px'
gameRestart.style.color = 'rgb(232 171 22)'
gameRestart.style.border = '3px solid rgb(52 53 46)'
gameRestart.style.cursor = 'pointer'
gameRestart.style.fontFamily = '"Permanent Marker", cursive'
