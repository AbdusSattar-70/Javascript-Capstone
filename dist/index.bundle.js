"use strict";
(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _asset_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/logo.png */ "./src/asset/logo.png");
/* harmony import */ var _modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMeals.js */ "./src/modules/displayMeals.js");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/modules/popUp.js");




const logo = document.querySelector('#logo');
logo.src = _asset_logo_png__WEBPACK_IMPORTED_MODULE_1__;
(0,_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiUrlDetail": () => (/* binding */ ApiUrlDetail),
/* harmony export */   "ApiUrlSearch": () => (/* binding */ ApiUrlSearch),
/* harmony export */   "involvmentApiUrlComments": () => (/* binding */ involvmentApiUrlComments),
/* harmony export */   "involvmentApiUrlLikes": () => (/* binding */ involvmentApiUrlLikes)
/* harmony export */ });
const ApiUrlSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
const ApiUrlDetail = 'www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
const involvmentApiUrlLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HFdMRM8ja26wIc0XEhGU/likes/';
const involvmentApiUrlComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HFdMRM8ja26wIc0XEhGU/comments/';


/***/ }),

/***/ "./src/modules/displayMeals.js":
/*!*************************************!*\
  !*** ./src/modules/displayMeals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchMeals.js */ "./src/modules/fetchMeals.js");
/* harmony import */ var _asset_heart_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/heart.png */ "./src/asset/heart.png");


const displayMeals = async () => {
  const data = await (0,_fetchMeals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const mealsContainer = document.querySelector('.meals-container');
  data.meals.forEach(meal => {
    const item = document.createElement('div');
    mealsContainer.appendChild(item);
    item.className = 'meal';
    item.insertAdjacentHTML('beforeend', `<img id="mealImg" src=${meal.strMealThumb}>
    <p><span id="mealTitle">${meal.strMeal}</span><button type="button" class="likeBtn"><img src="${_asset_heart_png__WEBPACK_IMPORTED_MODULE_1__}" alt="heart" id="like"></button><span id="likesCounter">0</span>Likes</p>
    <button type="button" class="comment">Comment</button>
    <button type="button" class="reserve">Reservation</button>`);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeals);

/***/ }),

/***/ "./src/modules/fetchMeals.js":
/*!***********************************!*\
  !*** ./src/modules/fetchMeals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/modules/API.js");

const fetchMeals = async () => {
  const response = await fetch(_API_js__WEBPACK_IMPORTED_MODULE_0__.ApiUrlSearch);
  const data = await response.json();
  return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeals);

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/modules/API.js");
/* harmony import */ var _fetchMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchMeals.js */ "./src/modules/fetchMeals.js");
/* harmony import */ var _asset_cross_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/cross.png */ "./src/asset/cross.png");



const commentContainer = document.querySelector('.popUpComments');
const mainDisplayContainer = document.querySelector('.mainDisplayContainer');
const header = document.querySelector('.header');
const postCommentOnApi = async (url, id, username, comment) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment
      })
    });
    if (response.ok) {
      await displayComment(id);
    }
  } catch (error) {
    console.log(error);
  }
};
const getCommetsFromApi = async (url, id) => {
  const res = await fetch(`${url}?item_id=${id}`);
  const comments = await res.json();
  return comments;
};
const closePopUp = () => {
  const crossBtn = document.querySelector('.cross');
  crossBtn.addEventListener('click', e => {
    e.preventDefault();
    commentContainer.style.display = 'none';
    header.style.display = 'flex';
    mainDisplayContainer.style.display = 'block';
  });
};
const displayComment = async id => {
  const comments = await getCommetsFromApi(_API_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiUrlComments, id);
  const commentList = document.querySelector(`.commentList-${id}`);
  commentList.innerHTML = '';
  if (!Array.isArray(comments)) {
    return;
  }
  comments.forEach(comment => {
    commentList.innerHTML += `<li>${comment.creation_date} :${comment.username} : ${comment.comment}</li> `;
  });
  const commentCounts = document.querySelector(`#commentCounts-${id}`);
  commentCounts.innerText = comments.length;
};
const submitComment = async id => {
  const form = document.querySelector(`.form-${id}`);
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const {
      username,
      commentText
    } = form.elements;
    const name = username.value;
    const comment = commentText.value;
    await postCommentOnApi(_API_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiUrlComments, id, name, comment);
    form.reset();
    await displayComment(id);
  });
};
const createPopUp = async (data, index) => {
  commentContainer.innerHTML = '';
  const id = index + 1;
  const items = `
      <div class="poUpCountainer">
          <div class ="imgContainer">
          <img class="cross" src="${_asset_cross_png__WEBPACK_IMPORTED_MODULE_2__}" alt="">
          <img class="comment-img" src="${data.strMealThumb}" alt="">
          </div>
          <h2 class="title">${data.strMeal}</h2>
          <div class="Ingredients">
              <p class="Ingredients1"><strong>Ingredients: </strong>${data.strIngredient1},  ${data.strIngredient2},  ${data.strIngredient3},  ${data.strIngredient4},  ${data.strIngredient5}</p>
          </div>
          <div class= "Measure">
           <p> <strong>Measurement:</strong> ${data.strMeasure1}, ${data.strMeasure2}, ${data.strMeasure3}, ${data.strMeasure4}</p>
          </div>
          <div class= "source">
           <p> <strong> Source: </strong><a href="${data.strSource}" target="_blank">Check Here</a></p>
          </div>
          <div class= "youtube">
           <p><strong> Video : </strong><a href="${data.strYoutube}" target="_blank">See Live</a></p>
          </div>
          <div class ="instructions">
            <p><strong>How to Make: </strong>${data.strInstructions}</p>
          </div>
          <div class="commentSection">
          <h3>Comments(<span id="commentCounts-${id}">0</span>)</h3>
          <ul class="commentList-${id}">

          </ul>
          <h4>Add a comment</h4>
          <form class="form-${id}" action="submit" >
              <input type="text" placeholder="Your name" name="username" required>
              <textarea cols="15" rows="4" placeholder="Your insight" name="commentText" required></textarea>
              <button type="submit">Comment</button>
          </form>
          </div>`;
  commentContainer.innerHTML = items;
  closePopUp();
  await submitComment(id);
  await displayComment(id);
};
const displayPopUp = async () => {
  const data = await (0,_fetchMeals_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((commentBtn, index) => {
    commentBtn.addEventListener('click', async e => {
      e.preventDefault();
      const meal = data.meals[index];
      await createPopUp(meal, index);
      commentContainer.style.display = 'block';
      mainDisplayContainer.style.display = 'none';
      header.style.display = 'none';
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopUp());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/wonderbar);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Wonderbar', sans-serif;\r\n  text-align: center;\r\n  font-size: 5vw;\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  margin: 1vh;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 2rem;\r\n  background-color: rgba(8, 250, 225, 0.117);\r\n  background-blend-mode: hard-light;\r\n}\r\n\r\n.headerUl {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.headerUl li {\r\n  font-size: 2rem;\r\n  color: rgb(123, 8, 253);\r\n}\r\n\r\n.headerUl li:hover,\r\n.headerUl li:focus {\r\n  color: red;\r\n  background-color: aliceblue;\r\n}\r\n\r\n#logo {\r\n  width: 3%;\r\n  height: 3%;\r\n}\r\n\r\n.meals-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(3, 25vw);\r\n  gap: 3vw;\r\n}\r\n\r\n.meal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  border-radius: 6px;\r\n  align-items: center;\r\n  row-gap: 0.8rem;\r\n  height: 60vh;\r\n}\r\n\r\n#mealImg {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  padding: 0.2rem;\r\n}\r\n\r\n#mealTitle {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#like {\r\n  width: 20px;\r\n}\r\n\r\n#likesCounter {\r\n  font-size: 1rem;\r\n}\r\n\r\n#mealTitle,\r\n.likeBtn {\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.likeBtn {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .meals-container {\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: repeat(2, 35vw);\r\n    gap: 5vw;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,0CAA0C;EAC1C,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;;EAEE,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sCAAsC;EACtC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,sCAAsC;IACtC,QAAQ;EACV;AACF","sourcesContent":["@import url('https://fonts.cdnfonts.com/css/wonderbar');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Wonderbar', sans-serif;\r\n  text-align: center;\r\n  font-size: 5vw;\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  margin: 1vh;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 2rem;\r\n  background-color: rgba(8, 250, 225, 0.117);\r\n  background-blend-mode: hard-light;\r\n}\r\n\r\n.headerUl {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.headerUl li {\r\n  font-size: 2rem;\r\n  color: rgb(123, 8, 253);\r\n}\r\n\r\n.headerUl li:hover,\r\n.headerUl li:focus {\r\n  color: red;\r\n  background-color: aliceblue;\r\n}\r\n\r\n#logo {\r\n  width: 3%;\r\n  height: 3%;\r\n}\r\n\r\n.meals-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(3, 25vw);\r\n  gap: 3vw;\r\n}\r\n\r\n.meal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  border-radius: 6px;\r\n  align-items: center;\r\n  row-gap: 0.8rem;\r\n  height: 60vh;\r\n}\r\n\r\n#mealImg {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  padding: 0.2rem;\r\n}\r\n\r\n#mealTitle {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#like {\r\n  width: 20px;\r\n}\r\n\r\n#likesCounter {\r\n  font-size: 1rem;\r\n}\r\n\r\n#mealTitle,\r\n.likeBtn {\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.likeBtn {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .meals-container {\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: repeat(2, 35vw);\r\n    gap: 5vw;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/asset/cross.png":
/*!*****************************!*\
  !*** ./src/asset/cross.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/cross.png";

/***/ }),

/***/ "./src/asset/heart.png":
/*!*****************************!*\
  !*** ./src/asset/heart.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/heart.png";

/***/ }),

/***/ "./src/asset/logo.png":
/*!****************************!*\
  !*** ./src/asset/logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/logo.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFCO0FBQ2U7QUFDaUI7QUFDUDtBQUU5QyxNQUFNRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM1Q0YsSUFBSSxDQUFDRyxHQUFHLEdBQUdOLDRDQUFJO0FBRWZDLG9FQUFZLEVBQUU7QUFDZEMsNkRBQVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZCxNQUFNSyxZQUFZLEdBQUcsd0RBQXdEO0FBQzdFLE1BQU1DLFlBQVksR0FBRyxvREFBb0Q7QUFDekUsTUFBTUMscUJBQXFCLEdBQUcscUdBQXFHO0FBQ25JLE1BQU1DLHdCQUF3QixHQUFHLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIaEc7QUFDRjtBQUV2QyxNQUFNVCxZQUFZLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO0VBQy9CLE1BQU1ZLElBQUksR0FBRyxNQUFNRiwwREFBVSxFQUFFO0VBQy9CLE1BQU1HLGNBQWMsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDakVRLElBQUksQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLENBQUVDLElBQUksSUFBSztJQUMzQixNQUFNQyxJQUFJLEdBQUdkLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMxQ0wsY0FBYyxDQUFDTSxXQUFXLENBQUNGLElBQUksQ0FBQztJQUNoQ0EsSUFBSSxDQUFDRyxTQUFTLEdBQUcsTUFBTTtJQUN2QkgsSUFBSSxDQUFDSSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUcseUJBQXdCTCxJQUFJLENBQUNNLFlBQWE7QUFDcEYsOEJBQThCTixJQUFJLENBQUNPLE9BQVEsMERBQXlEWiw2Q0FBTTtBQUMxRztBQUNBLCtEQUErRCxDQUFDO0VBQzlELENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxpRUFBZVgsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDakJhO0FBRXhDLE1BQU1VLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVk7RUFDN0IsTUFBTWMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ25CLGlEQUFZLENBQUM7RUFDMUMsTUFBTU0sSUFBSSxHQUFHLE1BQU1ZLFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0VBQ2xDLE9BQU9kLElBQUk7QUFDYixDQUFDO0FBQ0QsaUVBQWVGLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDJCO0FBQ1g7QUFDRjtBQUV2QyxNQUFNa0IsZ0JBQWdCLEdBQUd6QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNqRSxNQUFNeUIsb0JBQW9CLEdBQUcxQixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztBQUM1RSxNQUFNMEIsTUFBTSxHQUFHM0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBRWhELE1BQU0yQixnQkFBZ0IsR0FBRyxNQUFBQSxDQUFPQyxHQUFHLEVBQUVDLEVBQUUsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEtBQUs7RUFDN0QsSUFBSTtJQUNGLE1BQU1YLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNPLEdBQUcsRUFBRTtNQUNoQ0ksTUFBTSxFQUFFLE1BQU07TUFDZEMsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFO01BQ2xCLENBQUM7TUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztRQUFFQyxPQUFPLEVBQUVSLEVBQUU7UUFBRUMsUUFBUTtRQUFFQztNQUFRLENBQUM7SUFDekQsQ0FBQyxDQUFDO0lBQ0YsSUFBSVgsUUFBUSxDQUFDa0IsRUFBRSxFQUFFO01BQ2YsTUFBTUMsY0FBYyxDQUFDVixFQUFFLENBQUM7SUFDMUI7RUFDRixDQUFDLENBQUMsT0FBT1csS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDcEI7QUFDRixDQUFDO0FBRUQsTUFBTUcsaUJBQWlCLEdBQUcsTUFBQUEsQ0FBT2YsR0FBRyxFQUFFQyxFQUFFLEtBQUs7RUFDM0MsTUFBTWUsR0FBRyxHQUFHLE1BQU12QixLQUFLLENBQUUsR0FBRU8sR0FBSSxZQUFXQyxFQUFHLEVBQUMsQ0FBQztFQUMvQyxNQUFNZ0IsUUFBUSxHQUFHLE1BQU1ELEdBQUcsQ0FBQ3RCLElBQUksRUFBRTtFQUNqQyxPQUFPdUIsUUFBUTtBQUNqQixDQUFDO0FBRUQsTUFBTUMsVUFBVSxHQUFHQSxDQUFBLEtBQU07RUFDdkIsTUFBTUMsUUFBUSxHQUFHaEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ2pEK0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztJQUN4Q0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEIxQixnQkFBZ0IsQ0FBQzJCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDdkMxQixNQUFNLENBQUN5QixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQzdCM0Isb0JBQW9CLENBQUMwQixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0VBQzlDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNYixjQUFjLEdBQUcsTUFBT1YsRUFBRSxJQUFLO0VBQ25DLE1BQU1nQixRQUFRLEdBQUcsTUFBTUYsaUJBQWlCLENBQUN0Qyw2REFBd0IsRUFBRXdCLEVBQUUsQ0FBQztFQUN0RSxNQUFNd0IsV0FBVyxHQUFHdEQsUUFBUSxDQUFDQyxhQUFhLENBQUUsZ0JBQWU2QixFQUFHLEVBQUMsQ0FBQztFQUNoRXdCLFdBQVcsQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7RUFFMUIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ1gsUUFBUSxDQUFDLEVBQUU7SUFDNUI7RUFDRjtFQUNBQSxRQUFRLENBQUNsQyxPQUFPLENBQUVvQixPQUFPLElBQUs7SUFDNUJzQixXQUFXLENBQUNDLFNBQVMsSUFBSyxPQUFNdkIsT0FBTyxDQUFDMEIsYUFBYyxLQUFJMUIsT0FBTyxDQUFDRCxRQUFTLE1BQUtDLE9BQU8sQ0FBQ0EsT0FBUSxRQUFPO0VBQ3pHLENBQUMsQ0FBQztFQUVGLE1BQU0yQixhQUFhLEdBQUczRCxRQUFRLENBQUNDLGFBQWEsQ0FBRSxrQkFBaUI2QixFQUFHLEVBQUMsQ0FBQztFQUNwRTZCLGFBQWEsQ0FBQ0MsU0FBUyxHQUFHZCxRQUFRLENBQUNlLE1BQU07QUFDM0MsQ0FBQztBQUVELE1BQU1DLGFBQWEsR0FBRyxNQUFPaEMsRUFBRSxJQUFLO0VBQ2xDLE1BQU1pQyxJQUFJLEdBQUcvRCxRQUFRLENBQUNDLGFBQWEsQ0FBRSxTQUFRNkIsRUFBRyxFQUFDLENBQUM7RUFDbERpQyxJQUFJLENBQUNkLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFPQyxDQUFDLElBQUs7SUFDM0NBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCLE1BQU07TUFBRXBCLFFBQVE7TUFBRWlDO0lBQVksQ0FBQyxHQUFHRCxJQUFJLENBQUNFLFFBQVE7SUFDL0MsTUFBTUMsSUFBSSxHQUFHbkMsUUFBUSxDQUFDb0MsS0FBSztJQUMzQixNQUFNbkMsT0FBTyxHQUFHZ0MsV0FBVyxDQUFDRyxLQUFLO0lBQ2pDLE1BQU12QyxnQkFBZ0IsQ0FBQ3RCLDZEQUF3QixFQUFFd0IsRUFBRSxFQUFFb0MsSUFBSSxFQUFFbEMsT0FBTyxDQUFDO0lBQ25FK0IsSUFBSSxDQUFDSyxLQUFLLEVBQUU7SUFDWixNQUFNNUIsY0FBYyxDQUFDVixFQUFFLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU11QyxXQUFXLEdBQUcsTUFBQUEsQ0FBTzVELElBQUksRUFBRTZELEtBQUssS0FBSztFQUN6QzdDLGdCQUFnQixDQUFDOEIsU0FBUyxHQUFHLEVBQUU7RUFDL0IsTUFBTXpCLEVBQUUsR0FBR3dDLEtBQUssR0FBRyxDQUFDO0VBQ3BCLE1BQU1DLEtBQUssR0FBSTtBQUNqQjtBQUNBO0FBQ0Esb0NBQW9DL0MsNkNBQU07QUFDMUMsMENBQTBDZixJQUFJLENBQUNVLFlBQWE7QUFDNUQ7QUFDQSw4QkFBOEJWLElBQUksQ0FBQ1csT0FBUTtBQUMzQztBQUNBLHNFQUFzRVgsSUFBSSxDQUFDK0QsY0FBZSxNQUFLL0QsSUFBSSxDQUFDZ0UsY0FBZSxNQUFLaEUsSUFBSSxDQUFDaUUsY0FBZSxNQUFLakUsSUFBSSxDQUFDa0UsY0FBZSxNQUFLbEUsSUFBSSxDQUFDbUUsY0FBZTtBQUM5TDtBQUNBO0FBQ0EsK0NBQStDbkUsSUFBSSxDQUFDb0UsV0FBWSxLQUFJcEUsSUFBSSxDQUFDcUUsV0FBWSxLQUFJckUsSUFBSSxDQUFDc0UsV0FBWSxLQUFJdEUsSUFBSSxDQUFDdUUsV0FBWTtBQUMvSDtBQUNBO0FBQ0Esb0RBQW9EdkUsSUFBSSxDQUFDd0UsU0FBVTtBQUNuRTtBQUNBO0FBQ0EsbURBQW1EeEUsSUFBSSxDQUFDeUUsVUFBVztBQUNuRTtBQUNBO0FBQ0EsK0NBQStDekUsSUFBSSxDQUFDMEUsZUFBZ0I7QUFDcEU7QUFDQTtBQUNBLGlEQUFpRHJELEVBQUc7QUFDcEQsbUNBQW1DQSxFQUFHO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QkEsRUFBRztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtFQUNmTCxnQkFBZ0IsQ0FBQzhCLFNBQVMsR0FBR2dCLEtBQUs7RUFDbEN4QixVQUFVLEVBQUU7RUFDWixNQUFNZSxhQUFhLENBQUNoQyxFQUFFLENBQUM7RUFDdkIsTUFBTVUsY0FBYyxDQUFDVixFQUFFLENBQUM7QUFDMUIsQ0FBQztBQUVELE1BQU1oQyxZQUFZLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO0VBQy9CLE1BQU1XLElBQUksR0FBRyxNQUFNRiwwREFBVSxFQUFFO0VBQy9CLE1BQU02RSxXQUFXLEdBQUdwRixRQUFRLENBQUNxRixnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7RUFDekRELFdBQVcsQ0FBQ3hFLE9BQU8sQ0FBQyxDQUFDMEUsVUFBVSxFQUFFaEIsS0FBSyxLQUFLO0lBQ3pDZ0IsVUFBVSxDQUFDckMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU9DLENBQUMsSUFBSztNQUNoREEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFDbEIsTUFBTXRDLElBQUksR0FBR0osSUFBSSxDQUFDRSxLQUFLLENBQUMyRCxLQUFLLENBQUM7TUFDOUIsTUFBTUQsV0FBVyxDQUFDeEQsSUFBSSxFQUFFeUQsS0FBSyxDQUFDO01BQzlCN0MsZ0JBQWdCLENBQUMyQixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO01BQ3hDM0Isb0JBQW9CLENBQUMwQixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQzNDMUIsTUFBTSxDQUFDeUIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUMvQixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsaUVBQWV2RCxZQUFZLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJN0I7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnR0FBZ0c7QUFDaEc7QUFDQSx3RUFBd0UsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsdUJBQXVCLDZCQUE2QixnREFBZ0QsS0FBSyxZQUFZLDJDQUEyQyx5QkFBeUIscUJBQXFCLHVCQUF1QixLQUFLLGdCQUFnQixzQkFBc0IsS0FBSyxnQkFBZ0IseUJBQXlCLGtCQUFrQixLQUFLLGlCQUFpQixvQkFBb0Isb0NBQW9DLDBCQUEwQix1QkFBdUIsaURBQWlELHdDQUF3QyxLQUFLLG1CQUFtQixvQkFBb0IsZ0JBQWdCLEtBQUssc0JBQXNCLHNCQUFzQiw4QkFBOEIsS0FBSyxtREFBbUQsaUJBQWlCLGtDQUFrQyxLQUFLLGVBQWUsZ0JBQWdCLGlCQUFpQixLQUFLLDBCQUEwQixvQkFBb0IsOEJBQThCLDZDQUE2QyxlQUFlLEtBQUssZUFBZSxvQkFBb0IsNkJBQTZCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHNCQUFzQixtQkFBbUIsS0FBSyxrQkFBa0Isa0JBQWtCLGtCQUFrQixLQUFLLCtCQUErQixzQkFBc0IsS0FBSyxvQkFBb0Isd0JBQXdCLEtBQUssZUFBZSxrQkFBa0IsS0FBSyx1QkFBdUIsc0JBQXNCLEtBQUssaUNBQWlDLDJCQUEyQixLQUFLLGtCQUFrQiw4QkFBOEIsbUJBQW1CLEtBQUssOENBQThDLHdCQUF3QixzQkFBc0IsZ0NBQWdDLCtDQUErQyxpQkFBaUIsT0FBTyxLQUFLLFdBQVcsa0ZBQWtGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxpRkFBaUYsc0NBQXNDLGdCQUFnQixpQkFBaUIsNEJBQTRCLHVCQUF1Qiw2QkFBNkIsZ0RBQWdELEtBQUssWUFBWSwyQ0FBMkMseUJBQXlCLHFCQUFxQix1QkFBdUIsS0FBSyxnQkFBZ0Isc0JBQXNCLEtBQUssZ0JBQWdCLHlCQUF5QixrQkFBa0IsS0FBSyxpQkFBaUIsb0JBQW9CLG9DQUFvQywwQkFBMEIsdUJBQXVCLGlEQUFpRCx3Q0FBd0MsS0FBSyxtQkFBbUIsb0JBQW9CLGdCQUFnQixLQUFLLHNCQUFzQixzQkFBc0IsOEJBQThCLEtBQUssbURBQW1ELGlCQUFpQixrQ0FBa0MsS0FBSyxlQUFlLGdCQUFnQixpQkFBaUIsS0FBSywwQkFBMEIsb0JBQW9CLDhCQUE4Qiw2Q0FBNkMsZUFBZSxLQUFLLGVBQWUsb0JBQW9CLDZCQUE2Qiw4QkFBOEIseUJBQXlCLDBCQUEwQixzQkFBc0IsbUJBQW1CLEtBQUssa0JBQWtCLGtCQUFrQixrQkFBa0IsS0FBSywrQkFBK0Isc0JBQXNCLEtBQUssb0JBQW9CLHdCQUF3QixLQUFLLGVBQWUsa0JBQWtCLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLGlDQUFpQywyQkFBMkIsS0FBSyxrQkFBa0IsOEJBQThCLG1CQUFtQixLQUFLLDhDQUE4Qyx3QkFBd0Isc0JBQXNCLGdDQUFnQywrQ0FBK0MsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUI7QUFDcnJKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL0FQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheU1lYWxzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9mZXRjaE1lYWxzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9wb3BVcC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9hc3NldC9sb2dvLnBuZyc7XG5pbXBvcnQgZGlzcGxheU1lYWxzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5TWVhbHMuanMnO1xuaW1wb3J0IGRpc3BsYXlQb3BVcCBmcm9tICcuL21vZHVsZXMvcG9wVXAuanMnO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28nKTtcbmxvZ28uc3JjID0gTG9nbztcblxuZGlzcGxheU1lYWxzKCk7XG5kaXNwbGF5UG9wVXAoKTtcbiIsImNvbnN0IEFwaVVybFNlYXJjaCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9mPWUnO1xyXG5jb25zdCBBcGlVcmxEZXRhaWwgPSAnd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9NTI3NzInO1xyXG5jb25zdCBpbnZvbHZtZW50QXBpVXJsTGlrZXMgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSEZkTVJNOGphMjZ3SWMwWEVoR1UvbGlrZXMvJztcclxuY29uc3QgaW52b2x2bWVudEFwaVVybENvbW1lbnRzID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0hGZE1STThqYTI2d0ljMFhFaEdVL2NvbW1lbnRzLyc7XHJcblxyXG5leHBvcnQge1xyXG4gIEFwaVVybFNlYXJjaCwgQXBpVXJsRGV0YWlsLCBpbnZvbHZtZW50QXBpVXJsTGlrZXMsIGludm9sdm1lbnRBcGlVcmxDb21tZW50cyxcclxufTsiLCJpbXBvcnQgZmV0Y2hNZWFscyBmcm9tICcuL2ZldGNoTWVhbHMuanMnO1xuaW1wb3J0IGhlYXJ0IGZyb20gJy4uL2Fzc2V0L2hlYXJ0LnBuZyc7XG5cbmNvbnN0IGRpc3BsYXlNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoTWVhbHMoKTtcbiAgY29uc3QgbWVhbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMtY29udGFpbmVyJyk7XG4gIGRhdGEubWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZWFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdtZWFsJztcbiAgICBpdGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxpbWcgaWQ9XCJtZWFsSW1nXCIgc3JjPSR7bWVhbC5zdHJNZWFsVGh1bWJ9PlxuICAgIDxwPjxzcGFuIGlkPVwibWVhbFRpdGxlXCI+JHttZWFsLnN0ck1lYWx9PC9zcGFuPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlrZUJ0blwiPjxpbWcgc3JjPVwiJHtoZWFydH1cIiBhbHQ9XCJoZWFydFwiIGlkPVwibGlrZVwiPjwvYnV0dG9uPjxzcGFuIGlkPVwibGlrZXNDb3VudGVyXCI+MDwvc3Bhbj5MaWtlczwvcD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvbW1lbnRcIj5Db21tZW50PC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZXNlcnZlXCI+UmVzZXJ2YXRpb248L2J1dHRvbj5gKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVhbHM7IiwiaW1wb3J0IHsgQXBpVXJsU2VhcmNoIH0gZnJvbSAnLi9BUEkuanMnO1xuXG5jb25zdCBmZXRjaE1lYWxzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFwaVVybFNlYXJjaCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZldGNoTWVhbHM7XG4iLCJpbXBvcnQgeyBpbnZvbHZtZW50QXBpVXJsQ29tbWVudHMgfSBmcm9tICcuL0FQSS5qcyc7XG5pbXBvcnQgZmV0Y2hNZWFscyBmcm9tICcuL2ZldGNoTWVhbHMuanMnO1xuaW1wb3J0IGNyb3NzIGZyb20gJy4uL2Fzc2V0L2Nyb3NzLnBuZyc7XG5cbmNvbnN0IGNvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBDb21tZW50cycpO1xuY29uc3QgbWFpbkRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkRpc3BsYXlDb250YWluZXInKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuY29uc3QgcG9zdENvbW1lbnRPbkFwaSA9IGFzeW5jICh1cmwsIGlkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkLCB1c2VybmFtZSwgY29tbWVudCB9KSxcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGF3YWl0IGRpc3BsYXlDb21tZW50KGlkKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBnZXRDb21tZXRzRnJvbUFwaSA9IGFzeW5jICh1cmwsIGlkKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3VybH0/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBjb21tZW50cztcbn07XG5cbmNvbnN0IGNsb3NlUG9wVXAgPSAoKSA9PiB7XG4gIGNvbnN0IGNyb3NzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyb3NzJyk7XG4gIGNyb3NzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29tbWVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1haW5EaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWV0c0Zyb21BcGkoaW52b2x2bWVudEFwaVVybENvbW1lbnRzLCBpZCk7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbW1lbnRMaXN0LSR7aWR9YCk7XG4gIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShjb21tZW50cykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCArPSBgPGxpPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSA6JHtjb21tZW50LnVzZXJuYW1lfSA6ICR7Y29tbWVudC5jb21tZW50fTwvbGk+IGA7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbW1lbnRDb3VudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY29tbWVudENvdW50cy0ke2lkfWApO1xuICBjb21tZW50Q291bnRzLmlubmVyVGV4dCA9IGNvbW1lbnRzLmxlbmd0aDtcbn07XG5cbmNvbnN0IHN1Ym1pdENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JtLSR7aWR9YCk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgY29tbWVudFRleHQgfSA9IGZvcm0uZWxlbWVudHM7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lLnZhbHVlO1xuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50VGV4dC52YWx1ZTtcbiAgICBhd2FpdCBwb3N0Q29tbWVudE9uQXBpKGludm9sdm1lbnRBcGlVcmxDb21tZW50cywgaWQsIG5hbWUsIGNvbW1lbnQpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudChpZCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlUG9wVXAgPSBhc3luYyAoZGF0YSwgaW5kZXgpID0+IHtcbiAgY29tbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaWQgPSBpbmRleCArIDE7XG4gIGNvbnN0IGl0ZW1zID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInBvVXBDb3VudGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcyA9XCJpbWdDb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiY3Jvc3NcIiBzcmM9XCIke2Nyb3NzfVwiIGFsdD1cIlwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJjb21tZW50LWltZ1wiIHNyYz1cIiR7ZGF0YS5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj4ke2RhdGEuc3RyTWVhbH08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJJbmdyZWRpZW50c1wiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIkluZ3JlZGllbnRzMVwiPjxzdHJvbmc+SW5ncmVkaWVudHM6IDwvc3Ryb25nPiR7ZGF0YS5zdHJJbmdyZWRpZW50MX0sICAke2RhdGEuc3RySW5ncmVkaWVudDJ9LCAgJHtkYXRhLnN0ckluZ3JlZGllbnQzfSwgICR7ZGF0YS5zdHJJbmdyZWRpZW50NH0sICAke2RhdGEuc3RySW5ncmVkaWVudDV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9IFwiTWVhc3VyZVwiPlxuICAgICAgICAgICA8cD4gPHN0cm9uZz5NZWFzdXJlbWVudDo8L3N0cm9uZz4gJHtkYXRhLnN0ck1lYXN1cmUxfSwgJHtkYXRhLnN0ck1lYXN1cmUyfSwgJHtkYXRhLnN0ck1lYXN1cmUzfSwgJHtkYXRhLnN0ck1lYXN1cmU0fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSBcInNvdXJjZVwiPlxuICAgICAgICAgICA8cD4gPHN0cm9uZz4gU291cmNlOiA8L3N0cm9uZz48YSBocmVmPVwiJHtkYXRhLnN0clNvdXJjZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5DaGVjayBIZXJlPC9hPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSBcInlvdXR1YmVcIj5cbiAgICAgICAgICAgPHA+PHN0cm9uZz4gVmlkZW8gOiA8L3N0cm9uZz48YSBocmVmPVwiJHtkYXRhLnN0cllvdXR1YmV9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VlIExpdmU8L2E+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3MgPVwiaW5zdHJ1Y3Rpb25zXCI+XG4gICAgICAgICAgICA8cD48c3Ryb25nPkhvdyB0byBNYWtlOiA8L3N0cm9uZz4ke2RhdGEuc3RySW5zdHJ1Y3Rpb25zfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFNlY3Rpb25cIj5cbiAgICAgICAgICA8aDM+Q29tbWVudHMoPHNwYW4gaWQ9XCJjb21tZW50Q291bnRzLSR7aWR9XCI+MDwvc3Bhbj4pPC9oMz5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50TGlzdC0ke2lkfVwiPlxuXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8aDQ+QWRkIGEgY29tbWVudDwvaDQ+XG4gICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLSR7aWR9XCIgYWN0aW9uPVwic3VibWl0XCIgPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjE1XCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodFwiIG5hbWU9XCJjb21tZW50VGV4dFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgY29tbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBpdGVtcztcbiAgY2xvc2VQb3BVcCgpO1xuICBhd2FpdCBzdWJtaXRDb21tZW50KGlkKTtcbiAgYXdhaXQgZGlzcGxheUNvbW1lbnQoaWQpO1xufTtcblxuY29uc3QgZGlzcGxheVBvcFVwID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hNZWFscygpO1xuICBjb25zdCBjb21tZW50QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50Jyk7XG4gIGNvbW1lbnRCdG5zLmZvckVhY2goKGNvbW1lbnRCdG4sIGluZGV4KSA9PiB7XG4gICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBtZWFsID0gZGF0YS5tZWFsc1tpbmRleF07XG4gICAgICBhd2FpdCBjcmVhdGVQb3BVcChtZWFsLCBpbmRleCk7XG4gICAgICBjb21tZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgbWFpbkRpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQb3BVcCgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL3dvbmRlcmJhcik7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LWZhbWlseTogJ1dvbmRlcmJhcicsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDV2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDF2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMjUwLCAyMjUsIDAuMTE3KTtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCBsaSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogcmdiKDEyMywgOCwgMjUzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclVsIGxpOmhvdmVyLFxcclxcbi5oZWFkZXJVbCBsaTpmb2N1cyB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogMyU7XFxyXFxuICBoZWlnaHQ6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDI1dncpO1xcclxcbiAgZ2FwOiAzdnc7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMC44cmVtO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbEltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCxcXHJcXG4ucmVzZXJ2ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNtZWFsVGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNsaWtlIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlrZXNDb3VudGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lYWxUaXRsZSxcXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VCdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVhbHMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDM1dncpO1xcclxcbiAgICBnYXA6IDV2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNDQUFzQztFQUN0QyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLFFBQVE7RUFDVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3Mvd29uZGVyYmFyJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnV29uZGVyYmFyJywgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAyNTAsIDIyNSwgMC4xMTcpO1xcclxcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBoYXJkLWxpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclVsIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMTIzLCA4LCAyNTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVWwgbGk6aG92ZXIsXFxyXFxuLmhlYWRlclVsIGxpOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAzJTtcXHJcXG4gIGhlaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi5tZWFscy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjV2dyk7XFxyXFxuICBnYXA6IDN2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAwLjhyZW07XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxufVxcclxcblxcclxcbiNtZWFsSW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LFxcclxcbi5yZXNlcnZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lYWxUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xpa2Uge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsaWtlc0NvdW50ZXIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbFRpdGxlLFxcclxcbi5saWtlQnRuIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZWFscy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMzV2dyk7XFxyXFxuICAgIGdhcDogNXZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIkxvZ28iLCJkaXNwbGF5TWVhbHMiLCJkaXNwbGF5UG9wVXAiLCJsb2dvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwiQXBpVXJsU2VhcmNoIiwiQXBpVXJsRGV0YWlsIiwiaW52b2x2bWVudEFwaVVybExpa2VzIiwiaW52b2x2bWVudEFwaVVybENvbW1lbnRzIiwiZmV0Y2hNZWFscyIsImhlYXJ0IiwiZGF0YSIsIm1lYWxzQ29udGFpbmVyIiwibWVhbHMiLCJmb3JFYWNoIiwibWVhbCIsIml0ZW0iLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc05hbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJzdHJNZWFsVGh1bWIiLCJzdHJNZWFsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJjcm9zcyIsImNvbW1lbnRDb250YWluZXIiLCJtYWluRGlzcGxheUNvbnRhaW5lciIsImhlYWRlciIsInBvc3RDb21tZW50T25BcGkiLCJ1cmwiLCJpZCIsInVzZXJuYW1lIiwiY29tbWVudCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIml0ZW1faWQiLCJvayIsImRpc3BsYXlDb21tZW50IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29tbWV0c0Zyb21BcGkiLCJyZXMiLCJjb21tZW50cyIsImNsb3NlUG9wVXAiLCJjcm9zc0J0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJjb21tZW50TGlzdCIsImlubmVySFRNTCIsIkFycmF5IiwiaXNBcnJheSIsImNyZWF0aW9uX2RhdGUiLCJjb21tZW50Q291bnRzIiwiaW5uZXJUZXh0IiwibGVuZ3RoIiwic3VibWl0Q29tbWVudCIsImZvcm0iLCJjb21tZW50VGV4dCIsImVsZW1lbnRzIiwibmFtZSIsInZhbHVlIiwicmVzZXQiLCJjcmVhdGVQb3BVcCIsImluZGV4IiwiaXRlbXMiLCJzdHJJbmdyZWRpZW50MSIsInN0ckluZ3JlZGllbnQyIiwic3RySW5ncmVkaWVudDMiLCJzdHJJbmdyZWRpZW50NCIsInN0ckluZ3JlZGllbnQ1Iiwic3RyTWVhc3VyZTEiLCJzdHJNZWFzdXJlMiIsInN0ck1lYXN1cmUzIiwic3RyTWVhc3VyZTQiLCJzdHJTb3VyY2UiLCJzdHJZb3V0dWJlIiwic3RySW5zdHJ1Y3Rpb25zIiwiY29tbWVudEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29tbWVudEJ0biJdLCJzb3VyY2VSb290IjoiIn0=