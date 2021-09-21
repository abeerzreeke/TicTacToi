/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/js/index.js\");\n\r\n\r\nvar level = 0\r\nvar profileO = document.querySelector('.header .rival .profile-points')\r\nvar pointO = parseInt(profileO.innerHTML)\r\n\r\nvar profileX = document.querySelector('.header .profile .profile-points')\r\nvar pointX = parseInt(profileX.innerHTML)\r\n\r\nlet gameActive = true;\r\nlet currentPlayer = \"X\";\r\nlet gameState = [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"];\r\n\r\nvar playWithPc = false\r\nvar cellPlayer = []\r\nvar cellPc = []\r\nvar pcPlay = true\r\nvar clickOnHeader = true\r\n\r\nconst numLevel = () => `Level   ${parseInt(level + 1)}/5`;\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = `Welcome <br> Please Choose With Who You Want To Play`\r\n\r\nconst winningConditions = [\r\n\r\n    [0, 1, 2],\r\n    [3, 4, 5],\r\n    [6, 7, 8],\r\n    [0, 3, 6],\r\n    [1, 4, 7],\r\n    [2, 5, 8],\r\n    [0, 4, 8],\r\n    [2, 4, 6]\r\n];\r\n\r\n\r\nfunction handleCellPlayed(clickedCell, clickedCellIndex) {\r\n    gameState[clickedCellIndex] = currentPlayer;\r\n    clickedCell.innerHTML = currentPlayer;\r\n}\r\n\r\nfunction handleCellPlayedWithPC(clickedCell, clickedCellIndex) {\r\n\r\n    if(cellPlayer.length == 1){\r\n        gameState[clickedCellIndex] = 'X';\r\n        clickedCell.innerHTML = 'X';\r\n    }\r\n    else{\r\n        if(cellPlayer.length == cellPc.length + 1){\r\n            gameState[clickedCellIndex] = 'X';\r\n            clickedCell.innerHTML = 'X';\r\n        }\r\n    }\r\n   \r\n}\r\n\r\nfunction handlePlayerChange() {\r\n    currentPlayer = currentPlayer === \"X\" ? \"O\" : \"X\";\r\n}\r\n\r\nfunction reStart() {\r\n\r\n    for (let i = 0; i < 9; i++) {\r\n        var cellCu = _index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.children[i]\r\n        if (playWithPc) {\r\n            cellCu.removeEventListener('click', handleCellClick)\r\n            cellCu.addEventListener('click', handleCellClickPc)\r\n        }\r\n    }\r\n\r\n    gameActive = true;\r\n    currentPlayer = \"X\";\r\n    gameState = [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"];\r\n    cellPc = []\r\n    cellPlayer = []\r\n    pcPlay = true\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = numLevel()\r\n    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = \"\");\r\n    return;\r\n}\r\n\r\nfunction showWin() {\r\n\r\n    gameActive = false\r\n    clickOnHeader = false\r\n    level = 0\r\n    pcPlay = false\r\n\r\n    if (pointX > pointO) {\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = `Player X has won! <br> ${pointX} - ${pointO}`\r\n\r\n    }\r\n    else if (pointO > pointX) {\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = `Player O has won! <br> ${pointO} - ${pointX}`\r\n    }\r\n    else {\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = `Game ended in a draw! <br> ${pointX} - ${pointO} `\r\n    }\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.sec.children[0].appendChild(_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart)\r\n    return\r\n}\r\n\r\nfunction handleResultValidation() {\r\n\r\n    let roundWon = false;\r\n    for (let i = 0; i <= 7; i++) {\r\n\r\n        const winCondition = winningConditions[i];\r\n        let a = gameState[winCondition[0]];\r\n        let b = gameState[winCondition[1]];\r\n        let c = gameState[winCondition[2]];\r\n\r\n        if (a === '' || b === '' || c === '') {\r\n            continue;\r\n        }\r\n        if (a === b && b === c) {\r\n            roundWon = true;\r\n            break\r\n        }\r\n    }\r\n\r\n    if (roundWon) {\r\n        level += 1\r\n        if (level == 5) {\r\n            if (currentPlayer == 'X') {\r\n\r\n                pointX += 1\r\n                profileX.innerHTML = pointX\r\n            }\r\n            else {\r\n                pointO += 1\r\n                profileO.innerHTML = pointO\r\n            }\r\n\r\n            showWin()\r\n            return\r\n        }\r\n        if (currentPlayer == 'X') {\r\n            pcPlay = false\r\n            pointX += 1\r\n            profileX.innerHTML = pointX\r\n            gameActive = false\r\n            setTimeout(function () {\r\n                reStart()\r\n            }, 1500);\r\n        }\r\n        else {\r\n            pcPlay = false\r\n            pointO += 1\r\n            profileO.innerHTML = pointO\r\n            gameActive = false\r\n            setTimeout(function () {\r\n                reStart()\r\n            }, 1500);\r\n        }\r\n    }\r\n\r\n    let roundDraw = !gameState.includes(\"\");\r\n    if (roundDraw) {\r\n        level += 1\r\n\r\n        if (level == 5) {\r\n            showWin()\r\n            return\r\n        }\r\n        gameActive = false\r\n        setTimeout(function () {\r\n            reStart()\r\n        }, 1500);\r\n        return;\r\n    }\r\n    if(!playWithPc){\r\n        handlePlayerChange();\r\n    }\r\n    \r\n}\r\n\r\nfunction generateRandom(min, max) {\r\n    var num = Math.floor(Math.random() * (max - min + 1)) + min;\r\n    return (cellPlayer.includes(num) || cellPc.includes(num)) ? generateRandom(min, max) : num;\r\n}\r\n\r\nfunction handleCellPC() {\r\n    currentPlayer = 'O'\r\n    var random = generateRandom(0, 8)\r\n    cellPc.push(random)\r\n    var cellPC = document.getElementsByClassName('cell')[random]\r\n    gameState[random] = 'O'\r\n\r\n    setTimeout(() => {\r\n        cellPC.innerHTML = 'O';\r\n    }, 500);\r\n\r\n    handleResultValidation();\r\n\r\n    for (let i = 0; i < 9; i++) {\r\n        var cellCu = _index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.children[i]\r\n        cellCu.addEventListener('click', handleCellClickPc)\r\n    }\r\n}\r\n\r\nfunction handleCellClickPc(clickedCellEvent) {\r\n\r\n    const clickedCell = clickedCellEvent.target;\r\n    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));\r\n    if(!(cellPlayer.includes(clickedCellIndex)) && !(cellPc.includes(clickedCellIndex)) ){\r\n        cellPlayer.push(clickedCellIndex)\r\n    }\r\n\r\n    if (gameState[clickedCellIndex] !== \"\" || !gameActive) {\r\n        return;\r\n    }\r\n\r\n    handleCellPlayedWithPC(clickedCell, clickedCellIndex);\r\n    currentPlayer = 'X'\r\n    handleResultValidation();\r\n\r\n    if (pcPlay) {\r\n        handleCellPC()\r\n    }\r\n\r\n}\r\n\r\nfunction handleCellClick(clickedCellEvent) {\r\n\r\n    const clickedCell = clickedCellEvent.target;\r\n    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));\r\n\r\n    if (gameState[clickedCellIndex] !== \"\" || !gameActive) {\r\n        return;\r\n    }\r\n    handleCellPlayed(clickedCell, clickedCellIndex);\r\n    handleResultValidation();\r\n}\r\n\r\nfunction chooseUserOrPc(cureentChoose) {\r\n\r\n    if ((cureentChoose.getAttribute('class')) == 'pc-icon') {\r\n        playWithPc = true\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.rivalIcon.innerHTML = '<i class=\"fas fa-desktop\"></i>'\r\n        emptyContuner()\r\n        for (let i = 0; i < 9; i++) {\r\n            var cellCu = _index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.children[i]\r\n            cellCu.removeEventListener('click', handleCellClick)\r\n            cellCu.addEventListener('click', handleCellClickPc)\r\n        }\r\n\r\n        return false\r\n    }\r\n\r\n    else if ((cureentChoose.getAttribute('class')) == 'frind-icon') {\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.rivalIcon.innerHTML = ' <i class=\"fas fa-user-friends\"></i>'\r\n        emptyContuner()\r\n        playWithPc = false\r\n        for (let i = 0; i < 9; i++) {\r\n            var cellCu = _index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.children[i]\r\n            cellCu.removeEventListener('click', handleCellClickPc)\r\n            cellCu.addEventListener('click', handleCellClick)\r\n        }\r\n        return false\r\n    }\r\n}\r\n\r\nfunction emptyArr(){\r\n    cellPc = []\r\n    cellPlayer = []\r\n    gameState = [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"];\r\n    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = \"\");\r\n}\r\n\r\nfunction emptyContuner() {\r\n\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = numLevel();\r\n    pcPlay = true\r\n    emptyArr()\r\n}\r\n\r\n\r\nfunction start() {\r\n\r\n    level = 0\r\n    pointX = 0\r\n    pointO = 0\r\n    profileO.innerHTML = parseInt(0)\r\n    profileX.innerHTML = parseInt(0)\r\n    currentPlayer = \"X\";\r\n    emptyArr()\r\n    \r\n}\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.desk.onclick = function chooseWith(e) {\r\n    if (clickOnHeader) {\r\n        start()\r\n        chooseUserOrPc(e.target)\r\n    }\r\n}\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.friend.onclick = function chooseWith(e) {\r\n    if (clickOnHeader) {\r\n        start()\r\n        chooseUserOrPc(e.target)\r\n    }\r\n}\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.resetCurrentProfileRival.onclick = function resetPoint() {\r\n    if (clickOnHeader) {\r\n        start()\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = numLevel()\r\n    }\r\n}\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.resetCurrentProfile.onclick = function resetPoint() {\r\n    if (clickOnHeader) {\r\n        start()\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = numLevel()\r\n    }\r\n}\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart.onclick = function handleRestartGame() {\r\n\r\n\r\n    if(playWithPc){\r\n        pcPlay = true\r\n        for (let i = 0; i < 9; i++) {\r\n            var cellCu = _index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.children[i]\r\n            cellCu.addEventListener('click', handleCellClickPc)\r\n\r\n        }\r\n    }\r\n    cellPc = []\r\n    cellPlayer = []\r\n    clickOnHeader = true\r\n    gameActive = true;\r\n    pointX = 0\r\n    pointO = 0\r\n    profileX.innerHTML = 0\r\n    profileO.innerHTML = 0\r\n    currentPlayer = \"X\";\r\n    gameState = [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"];\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.statusDisplay.innerHTML = ''\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = ''\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.titleContainer.innerHTML = numLevel()\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.sec.children[0].removeChild(_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart)\r\n    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = \"\");\r\n}\r\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sec\": () => (/* binding */ sec),\n/* harmony export */   \"gameTitle\": () => (/* binding */ gameTitle),\n/* harmony export */   \"statusDisplay\": () => (/* binding */ statusDisplay),\n/* harmony export */   \"gameContainer\": () => (/* binding */ gameContainer),\n/* harmony export */   \"section\": () => (/* binding */ section),\n/* harmony export */   \"titleContainer\": () => (/* binding */ titleContainer),\n/* harmony export */   \"gameRestart\": () => (/* binding */ gameRestart),\n/* harmony export */   \"rivalIcon\": () => (/* binding */ rivalIcon),\n/* harmony export */   \"resetCurrentProfileRival\": () => (/* binding */ resetCurrentProfileRival),\n/* harmony export */   \"resetCurrentProfile\": () => (/* binding */ resetCurrentProfile),\n/* harmony export */   \"desk\": () => (/* binding */ desk),\n/* harmony export */   \"friend\": () => (/* binding */ friend)\n/* harmony export */ });\n\r\n\r\nlet section = document.createElement('section')\r\nlet sec = document.body.children[0]\r\nsec.appendChild(section)\r\n\r\n\r\nlet appHeader = document.createElement('div')\r\nappHeader.classList.add('header')\r\nsection.appendChild(appHeader)\r\n\r\nlet gameTitle = document.createElement('h1')\r\ngameTitle.innerText = 'Tic Tac Toi Game'\r\nappHeader.appendChild(gameTitle)\r\n\r\nlet desk = document.createElement('div')\r\ndesk.classList.add('pc-icon')\r\ndesk.innerHTML = 'Play With PC  ' \r\ndesk.innerHTML += ` <i class = 'fas fa-desktop'></i>`\r\nappHeader.appendChild(desk)\r\n\r\n\r\nlet friend= document.createElement('div')\r\nfriend.classList.add('frind-icon')\r\nfriend.innerHTML = 'Play With Friend  '\r\nfriend.innerHTML += `  <i class = 'fas fa-user-friends'></i>`\r\nappHeader.appendChild(friend)\r\n\r\n\r\n\r\n\r\nlet profile = document.createElement('a')\r\nprofile.classList.add('profile')\r\nappHeader.appendChild(profile)\r\n\r\nlet img = document.createElement('img')\r\nimg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Daedq6KAHlOIPqMMdRJvn19FNBuJIyujrQ&usqp=CAU'\r\nprofile.appendChild(img)\r\n\r\nlet rival = document.createElement('a')\r\nrival.classList.add('rival')\r\nappHeader.appendChild(rival)\r\n\r\n\r\nlet rivalIcon = document.createElement('div')\r\nrivalIcon.classList.add('rival-icon')\r\nrival.appendChild(rivalIcon)\r\n\r\n\r\n\r\nlet resetCurrentProfileRival = document.createElement('div')\r\nresetCurrentProfileRival.setAttribute('class','reset-current-profile')\r\nresetCurrentProfileRival.classList.add('fas')\r\nresetCurrentProfileRival.classList.add('fa-sync-alt')\r\nrival.appendChild(resetCurrentProfileRival)\r\n\r\nlet  profilePointsRival = document.createElement('p')\r\nprofilePointsRival.innerHTML = '0'\r\nprofilePointsRival.classList.add('profile-points')\r\nrival.appendChild(profilePointsRival)\r\n\r\n\r\n\r\nlet resetCurrentProfile = document.createElement('div')\r\nresetCurrentProfile.setAttribute('class','reset-current-profile')\r\nresetCurrentProfile.classList.add('fas')\r\nresetCurrentProfile.classList.add('fa-sync-alt')\r\nprofile.appendChild(resetCurrentProfile)\r\n\r\nlet  profilePoints = document.createElement('p')\r\nprofilePoints.innerHTML = '0'\r\nprofilePoints.classList.add('profile-points')\r\nprofile.appendChild(profilePoints)\r\n\r\n\r\nlet titleContainer = document.createElement('p')\r\nlet pTit = document.body.children[0]\r\npTit.appendChild(titleContainer)\r\n\r\n\r\nlet gameContainer = document.createElement('div')\r\ngameContainer.classList.add('game-container')\r\ngameContainer.setAttribute('id','ttt-game')\r\nlet divCo = document.body.children[1]\r\ndivCo.appendChild(gameContainer)\r\nsection.appendChild(gameContainer)\r\nsection.appendChild(titleContainer)\r\n\r\n\r\nfor (let i = 0; i < 9; i++) {\r\n    var cell = document.createElement('div')\r\n    var cellIndex = document.body.children[0].children[0].children[1]\r\n    cellIndex.appendChild(cell)\r\n    cell.setAttribute('data-cell-index',`${i}`)\r\n    cell.classList.add('cell')\r\n\r\n}\r\n\r\nlet statusDisplay = document.createElement('h2')\r\nstatusDisplay.classList.add('game-status')\r\nsec.children[0].appendChild(statusDisplay)\r\n\r\nlet gameRestart = document.createElement('button')\r\ngameRestart.innerHTML = 'Restart Game'\r\ngameRestart.classList.add('game-restart')\r\n\r\n\r\n\r\n\r\n \n\n//# sourceURL=webpack://tic-tac-toe/./src/js/index.js?");

/***/ }),

/***/ "./src/js/style.js":
/*!*************************!*\
  !*** ./src/js/style.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/js/index.js\");\n\r\n\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.statusDisplay.style.color = ' rgb(36 35 33)'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.statusDisplay.style.fontSize = '50px'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.statusDisplay.style.margin = '0px auto'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.statusDisplay.style.fontFamily = '\"Permanent Marker\", cursive'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.statusDisplay.style.marginTop = '31%'\r\n\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.section.style.textAlign = 'center'\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameTitle.style.fontFamily = '\"Permanent Marker\", cursive'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameTitle.style.fontSize = '45px'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameTitle.style.color = '#d7a62f'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameTitle.style.padding = '5%'\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.style.display = 'grid'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.style.gridTemplateColumns = 'repeat(3, auto)'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.style.width = '310px'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.style.margin = '14% auto'  \r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.style.color = 'black'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameContainer.style.fontFamily = '\"Permanent Marker\", cursive'\r\n\r\n\r\nvar cell= document.querySelectorAll('.cell')\r\nfor (let i = 0; i < 9; i++) {\r\n    cell[i].style.width = '100px'\r\n    cell[i].style.height = '100px'\r\n    cell[i].style.boxShadow = '2px 2px 2px 2px rgb(215, 166, 47)'\r\n    cell[i].style.border = '2px solid rgb(215, 166, 47)'\r\n    cell[i].style.lineHeight = '100px'\r\n    cell[i].style.fontSize = '60px'\r\n    cell[i].style.cursor = 'pointer'\r\n}\r\n\r\n\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart.style.backgroundColor = 'rgb(247, 228, 172);'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart.style.width = '200px'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart.style.height = '50px'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart.style.fontSize = '25px'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart.style.color = 'rgb(232 171 22)'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart.style.border = '3px solid rgb(52 53 46)'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart.style.cursor = 'pointer'\r\n_index_js__WEBPACK_IMPORTED_MODULE_0__.gameRestart.style.fontFamily = '\"Permanent Marker\", cursive'\r\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/js/style.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("app." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("c9854cba7470a07d01e8")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "tic-tac-toe:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatetic_tac_toe"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	__webpack_require__("./src/js/game.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/style.js");
/******/ 	
/******/ })()
;