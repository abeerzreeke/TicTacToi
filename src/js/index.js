

let section = document.createElement('section')
let sec = document.body.children[0]
sec.appendChild(section)


let appHeader = document.createElement('div')
appHeader.classList.add('header')
section.appendChild(appHeader)

let gameTitle = document.createElement('h1')
gameTitle.innerText = 'Tic Tac Toi Game'
appHeader.appendChild(gameTitle)

let desk = document.createElement('div')
desk.classList.add('pc-icon')
desk.innerHTML = 'Play With PC  ' 
desk.innerHTML += ` <i class = 'fas fa-desktop'></i>`
appHeader.appendChild(desk)


let friend= document.createElement('div')
friend.classList.add('frind-icon')
friend.innerHTML = 'Play With Friend  '
friend.innerHTML += `  <i class = 'fas fa-user-friends'></i>`
appHeader.appendChild(friend)




let profile = document.createElement('a')
profile.classList.add('profile')
appHeader.appendChild(profile)

let img = document.createElement('img')
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Daedq6KAHlOIPqMMdRJvn19FNBuJIyujrQ&usqp=CAU'
profile.appendChild(img)

let rival = document.createElement('a')
rival.classList.add('rival')
appHeader.appendChild(rival)


let rivalIcon = document.createElement('div')
rivalIcon.classList.add('rival-icon')
rival.appendChild(rivalIcon)



let resetCurrentProfileRival = document.createElement('div')
resetCurrentProfileRival.setAttribute('class','reset-current-profile')
resetCurrentProfileRival.classList.add('fas')
resetCurrentProfileRival.classList.add('fa-sync-alt')
rival.appendChild(resetCurrentProfileRival)

let  profilePointsRival = document.createElement('p')
profilePointsRival.innerHTML = '0'
profilePointsRival.classList.add('profile-points')
rival.appendChild(profilePointsRival)



let resetCurrentProfile = document.createElement('div')
resetCurrentProfile.setAttribute('class','reset-current-profile')
resetCurrentProfile.classList.add('fas')
resetCurrentProfile.classList.add('fa-sync-alt')
profile.appendChild(resetCurrentProfile)

let  profilePoints = document.createElement('p')
profilePoints.innerHTML = '0'
profilePoints.classList.add('profile-points')
profile.appendChild(profilePoints)


let titleContainer = document.createElement('p')
let pTit = document.body.children[0]
pTit.appendChild(titleContainer)


let gameContainer = document.createElement('div')
gameContainer.classList.add('game-container')
gameContainer.setAttribute('id','ttt-game')
let divCo = document.body.children[1]
divCo.appendChild(gameContainer)
section.appendChild(gameContainer)
section.appendChild(titleContainer)


for (let i = 0; i < 9; i++) {
    var cell = document.createElement('div')
    var cellIndex = document.body.children[0].children[0].children[1]
    cellIndex.appendChild(cell)
    cell.setAttribute('data-cell-index',`${i}`)
    cell.classList.add('cell')

}

let statusDisplay = document.createElement('h2')
statusDisplay.classList.add('game-status')
sec.children[0].appendChild(statusDisplay)

let gameRestart = document.createElement('button')
gameRestart.innerHTML = 'Restart Game'
gameRestart.classList.add('game-restart')




export {sec, gameTitle, statusDisplay, gameContainer, section,titleContainer, gameRestart, rivalIcon, resetCurrentProfileRival,resetCurrentProfile, desk,friend}; 