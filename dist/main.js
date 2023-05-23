/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var lib;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getInputValue: () => (/* binding */ getInputValue),\n/* harmony export */   handleKey: () => (/* binding */ handleKey),\n/* harmony export */   handleKeyDown: () => (/* binding */ handleKeyDown),\n/* harmony export */   play: () => (/* binding */ play)\n/* harmony export */ });\n/* harmony import */ var _file_names_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file_names.json */ \"./src/file_names.json\");\n/* harmony import */ var _file_names_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_names_json__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction play() {\n  var audio = document.getElementById('anthom_player');\n  audio.pause();\n  var randomIndex = Math.floor(Math.random() * (_file_names_json__WEBPACK_IMPORTED_MODULE_0___default().length));\n  //add the answer\n  var answer = document.getElementById(\"answer\");\n  answer.style.display = \"none\";\n  answer.id = \"answer\";\n  answer.textContent = (_file_names_json__WEBPACK_IMPORTED_MODULE_0___default())[randomIndex].name;\n  document.body.appendChild(answer);\n\n  //restart win and time text\n  var h1 = document.getElementById(\"winText\");\n  var time = document.getElementById(\"remainingTime\");\n  time.style.removeProperty('color');\n  h1.textContent = \"\";\n  h1.style.removeProperty('color');\n  audio.src = \"../anthoms/\" + (_file_names_json__WEBPACK_IMPORTED_MODULE_0___default())[randomIndex].name;\n  document.body.appendChild(audio);\n  audio.play();\n  //get the play button\n  var playbutton = document.getElementById('play_button');\n  //make the play button invisable\n  playbutton.style.display = 'none';\n  //get the input box and enter button\n  var countryinput = document.getElementById('country_input');\n  var enterbutton = document.getElementById('enter_button');\n  //make both visable\n  countryinput.style.display = 'inline-block';\n  enterbutton.style.display = 'inline-block';\n  var remainingTimeElement = document.getElementById('remainingTime');\n  console.log(\"debug: \" + audio.src);\n\n  // Update remaining time when the audio is loaded\n  audio.addEventListener('loadedmetadata', updateRemainingTime);\n\n  // Update remaining time on time update\n  audio.addEventListener('timeupdate', updateRemainingTime);\n\n  // Add event listener for audio playback end\n  audio.addEventListener('ended', handleAudioEnd);\n\n  // Function to update the remaining time\n  function updateRemainingTime() {\n    var currentTime = audio.currentTime;\n    var duration = audio.duration;\n\n    // Calculate remaining time in seconds\n    var remainingTimeInSeconds = duration - currentTime;\n\n    // Convert remaining time to minutes and seconds\n    var minutes = Math.floor(remainingTimeInSeconds / 60);\n    var seconds = Math.floor(remainingTimeInSeconds % 60);\n\n    // Format the remaining time\n    var remainingTimeFormatted = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;\n\n    // Update the h1 element with the remaining time\n    remainingTimeElement.textContent = 'Time: ' + remainingTimeFormatted;\n  }\n  function handleAudioEnd() {\n    lose();\n  }\n}\nfunction getInputValue() {\n  var input = document.getElementById('country_input');\n  var country = input.value;\n  var answer = document.getElementById('answer');\n  var raw_correct_country = answer.textContent.split(\".mp3\")[0];\n  var clean_correct_country = [];\n  if (country == raw_correct_country) {\n    win();\n  } else {\n    for (var i = 0; i < raw_correct_country.length; i++) {\n      var correct_letter = raw_correct_country[i];\n      if (correct_letter == \"-\") {\n        clean_correct_country.push(\" \");\n      } else {\n        clean_correct_country.push(correct_letter);\n      }\n    }\n    if (country == clean_correct_country.join(\"\")) {\n      win();\n    } else {\n      wrong();\n    }\n  }\n}\nfunction handleKeyDown(event) {\n  if (event.keyCode === 13) {\n    getInputValue();\n  } else if (event.keyCode === 8 || event.keyCode === 46) {\n    var input = document.getElementById('country_input');\n    input.value = input.value.slice(0, -1);\n  } else {\n    var input = document.getElementById('country_input');\n    input.value = input.value + String.fromCharCode(event.keyCode).toLocaleLowerCase();\n  }\n}\nfunction win() {\n  //stop music\n  var audio = document.getElementById('anthom_player');\n  audio.pause();\n  //let the player know they won\n  console.log(\"you win!\");\n  var h1 = document.getElementById(\"winText\");\n  var time = document.getElementById(\"remainingTime\");\n  time.style.color = \"green\";\n  h1.textContent = \"YOU WIN!\";\n  h1.style.color = \"green\";\n  //restart the game\n  restart();\n}\nfunction wrong() {\n  var h2 = document.getElementById(\"lose\");\n  h2.textContent = \"wrong!\";\n  h2.style.color = \"red\";\n  return;\n}\nfunction lose() {\n  //stop music\n  var audio = document.getElementById('anthom_player');\n  audio.pause();\n\n  //find the answer\n  var answer = document.getElementById('answer');\n  var raw_correct_country = answer.textContent.split(\".mp3\")[0];\n  var clean_correct_country = [];\n  for (var i = 0; i < raw_correct_country.length; i++) {\n    var correct_letter = raw_correct_country[i];\n    if (correct_letter == \"-\") {\n      clean_correct_country.push(\" \");\n    } else {\n      clean_correct_country.push(correct_letter);\n    }\n  }\n  clean_correct_country = clean_correct_country.join(\"\");\n  //let the player know they won\n  console.log(\"you lose :(\");\n  var h1 = document.getElementById(\"winText\");\n  var time = document.getElementById(\"remainingTime\");\n  time.style.color = \"red\";\n  h1.textContent = \"you lost :(\";\n  time.textContent = \"The Country Was: \" + clean_correct_country[0].toUpperCase() + clean_correct_country.split(0, 1);\n  h1.style.color = \"red\";\n  //restart the game\n  restart();\n}\nfunction restart() {\n  //get the play button\n  var playbutton = document.getElementById('play_button');\n  //make the play button visable\n  playbutton.style.display = 'inline-block';\n  //get the input box and enter button\n  var countryinput = document.getElementById('country_input');\n  var enterbutton = document.getElementById('enter_button');\n  //make both invisable\n  countryinput.style.display = 'none';\n  enterbutton.style.display = 'none';\n  //restart wrong text\n  var h2 = document.getElementById(\"lose\");\n  h2.textContent = \"\";\n}\nfunction handleKey(key) {\n  var input = document.getElementById('country_input');\n  if (key == \" \") {\n    var button = document.getElementById(\"key-space\");\n  } else {\n    var button = document.getElementById(\"key-\" + key);\n  }\n  button.classList.add(\"button-pressed\");\n  if (input.style.display != \"\" && input.style.display != \"none\") {\n    input.value = input.value + key.toLowerCase();\n  }\n  // Simulate the button release after a short delay\n  setTimeout(function () {\n    button.classList.remove(\"button-pressed\");\n  }, 200);\n}\n\n//# sourceURL=webpack://lib/./src/index.js?");

/***/ }),

/***/ "./src/file_names.json":
/*!*****************************!*\
  !*** ./src/file_names.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = [{\"name\":\"afghanistan.mp3\"},{\"name\":\"albania.mp3\"},{\"name\":\"algeria.mp3\"},{\"name\":\"angola.mp3\"},{\"name\":\"antigua-and-barbuda.mp3\"},{\"name\":\"argentina.mp3\"},{\"name\":\"armenia.mp3\"},{\"name\":\"aruba.mp3\"},{\"name\":\"australia.mp3\"},{\"name\":\"austria.mp3\"},{\"name\":\"bahamas.mp3\"},{\"name\":\"bahrain.mp3\"},{\"name\":\"bangladesh.mp3\"},{\"name\":\"barbados.mp3\"},{\"name\":\"belarus.mp3\"},{\"name\":\"belgium.mp3\"},{\"name\":\"belize.mp3\"},{\"name\":\"benin.mp3\"},{\"name\":\"bolivia.mp3\"},{\"name\":\"bosnia-herzegovina.mp3\"},{\"name\":\"botswana.mp3\"},{\"name\":\"brazil.mp3\"},{\"name\":\"brunei.mp3\"},{\"name\":\"bulgaria.mp3\"},{\"name\":\"burkina-faso.mp3\"},{\"name\":\"cambodia.mp3\"},{\"name\":\"cameroon.mp3\"},{\"name\":\"canada.mp3\"},{\"name\":\"cape-verde.mp3\"},{\"name\":\"central-african-republic.mp3\"},{\"name\":\"chad.mp3\"},{\"name\":\"chile.mp3\"},{\"name\":\"china.mp3\"},{\"name\":\"colombia.mp3\"},{\"name\":\"comoros.mp3\"},{\"name\":\"congo.mp3\"},{\"name\":\"cook-islands.mp3\"},{\"name\":\"costa-rica.mp3\"},{\"name\":\"cote-divoire.mp3\"},{\"name\":\"croatia.mp3\"},{\"name\":\"cuba.mp3\"},{\"name\":\"czech-republic.mp3\"},{\"name\":\"denmark.mp3\"},{\"name\":\"desktop.ini\"},{\"name\":\"djibouti.mp3\"},{\"name\":\"dominica.mp3\"},{\"name\":\"dominican-republic.mp3\"},{\"name\":\"east-timor.mp3\"},{\"name\":\"ecuador.mp3\"},{\"name\":\"egypt.mp3\"},{\"name\":\"el-salvador.mp3\"},{\"name\":\"eritrea.mp3\"},{\"name\":\"estonia.mp3\"},{\"name\":\"ethiopia.mp3\"},{\"name\":\"european-union.mp3\"},{\"name\":\"fiji.mp3\"},{\"name\":\"finland.mp3\"},{\"name\":\"france.mp3\"},{\"name\":\"gabon.mp3\"},{\"name\":\"gambia.mp3\"},{\"name\":\"georgia.mp3\"},{\"name\":\"germany.mp3\"},{\"name\":\"ghana.mp3\"},{\"name\":\"greece.mp3\"},{\"name\":\"guatemala.mp3\"},{\"name\":\"guinea-bissau.mp3\"},{\"name\":\"guinea.mp3\"},{\"name\":\"guyana.mp3\"},{\"name\":\"haiti.mp3\"},{\"name\":\"honduras.mp3\"},{\"name\":\"hungary.mp3\"},{\"name\":\"iceland.mp3\"},{\"name\":\"india.mp3\"},{\"name\":\"indonesia.mp3\"},{\"name\":\"iraq.mp3\"},{\"name\":\"ireland.mp3\"},{\"name\":\"israel.mp3\"},{\"name\":\"italy.mp3\"},{\"name\":\"jamaica.mp3\"},{\"name\":\"japan.mp3\"},{\"name\":\"jordan.mp3\"},{\"name\":\"kazakhstan.mp3\"},{\"name\":\"kenya.mp3\"},{\"name\":\"south-korea.mp3\"},{\"name\":\"kosovo.mp3\"},{\"name\":\"kuwait.mp3\"},{\"name\":\"kyrgyzstan.mp3\"},{\"name\":\"laos.mp3\"},{\"name\":\"latvia.mp3\"},{\"name\":\"lebanon.mp3\"},{\"name\":\"lesotho.mp3\"},{\"name\":\"liberia.mp3\"},{\"name\":\"libya.mp3\"},{\"name\":\"liechtenstein.mp3\"},{\"name\":\"lithuania.mp3\"},{\"name\":\"luxembourg.mp3\"},{\"name\":\"macedonia.mp3\"},{\"name\":\"madagascar.mp3\"},{\"name\":\"malawi.mp3\"},{\"name\":\"malaysia.mp3\"},{\"name\":\"maldives.mp3\"},{\"name\":\"mali.mp3\"},{\"name\":\"malta.mp3\"},{\"name\":\"marshall-islands.mp3\"},{\"name\":\"mauritania.mp3\"},{\"name\":\"mauritius.mp3\"},{\"name\":\"mexico.mp3\"},{\"name\":\"micronesia.mp3\"},{\"name\":\"moldova.mp3\"},{\"name\":\"monaco.mp3\"},{\"name\":\"montenegro.mp3\"},{\"name\":\"morocco.mp3\"},{\"name\":\"mozambique.mp3\"},{\"name\":\"myanmar.mp3\"},{\"name\":\"namibia.mp3\"},{\"name\":\"nepal.mp3\"},{\"name\":\"netherlands-antilles.mp3\"},{\"name\":\"netherlands.mp3\"},{\"name\":\"new-zealand.mp3\"},{\"name\":\"nicaragua.mp3\"},{\"name\":\"nigeria.mp3\"},{\"name\":\"northern-mariana-islands.mp3\"},{\"name\":\"norway.mp3\"},{\"name\":\"oman.mp3\"},{\"name\":\"pakistan.mp3\"},{\"name\":\"palau.mp3\"},{\"name\":\"panama.mp3\"},{\"name\":\"papua-new-guinea.mp3\"},{\"name\":\"peru.mp3\"},{\"name\":\"philippines.mp3\"},{\"name\":\"poland.mp3\"},{\"name\":\"portugal.mp3\"},{\"name\":\"puerto-rico.mp3\"},{\"name\":\"qatar.mp3\"},{\"name\":\"romania.mp3\"},{\"name\":\"russia.mp3\"},{\"name\":\"rwanda.mp3\"},{\"name\":\"sao-tome-and-principe.mp3\"},{\"name\":\"saudi-arabia.mp3\"},{\"name\":\"senegal.mp3\"},{\"name\":\"serbia.mp3\"},{\"name\":\"seychelles.mp3\"},{\"name\":\"sierra-leone.mp3\"},{\"name\":\"slovak-republic.mp3\"},{\"name\":\"slovenia.mp3\"},{\"name\":\"somalia.mp3\"},{\"name\":\"south-africa.mp3\"},{\"name\":\"south-sudan.mp3\"},{\"name\":\"spain.mp3\"},{\"name\":\"sri-lanka.mp3\"},{\"name\":\"st-kitts-and-nevis.mp3\"},{\"name\":\"sudan.mp3\"},{\"name\":\"swaziland.mp3\"},{\"name\":\"sweden.mp3\"},{\"name\":\"switzerland.mp3\"},{\"name\":\"tajikistan.mp3\"},{\"name\":\"tanzania.mp3\"},{\"name\":\"togo.mp3\"},{\"name\":\"trinidad-and-tobago.mp3\"},{\"name\":\"tunisia.mp3\"},{\"name\":\"turkey.mp3\"},{\"name\":\"turkmenistan.mp3\"},{\"name\":\"uganda.mp3\"},{\"name\":\"ukraine.mp3\"},{\"name\":\"united-arab-emirates.mp3\"},{\"name\":\"united-kingdom.mp3\"},{\"name\":\"united-states.mp3\"},{\"name\":\"uruguay.mp3\"},{\"name\":\"uzbekistan.mp3\"},{\"name\":\"vanuatu.mp3\"},{\"name\":\"vatican.mp3\"},{\"name\":\"venezuela.mp3\"},{\"name\":\"vietnam.mp3\"},{\"name\":\"virgin-islands.mp3\"},{\"name\":\"yemen.mp3\"}]\n\n//# sourceURL=webpack://lib/./src/file_names.json?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	lib = __webpack_exports__;
/******/ 	
/******/ })()
;