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
/* harmony import */ var _modules_closePopUp_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/closePopUp.js */ "./src/modules/closePopUp.js");
/* harmony import */ var _modules_fetchMeals_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/fetchMeals.js */ "./src/modules/fetchMeals.js");
/* harmony import */ var _modules_displayLikes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/displayLikes.js */ "./src/modules/displayLikes.js");
/* harmony import */ var _modules_likeItem_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/likeItem.js */ "./src/modules/likeItem.js");








const logo = document.querySelector('#logo');
logo.src = _asset_logo_png__WEBPACK_IMPORTED_MODULE_1__;
(0,_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_displayLikes_js__WEBPACK_IMPORTED_MODULE_6__.displayLikes)();
(0,_modules_likeItem_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
const displayPopUp = async () => {
  const data = await (0,_modules_fetchMeals_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((commentBtn, index) => {
    commentBtn.addEventListener('click', async e => {
      e.preventDefault();
      const meal = data.meals[index];
      await (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(meal, index);
      _modules_closePopUp_js__WEBPACK_IMPORTED_MODULE_4__.commentContainer.style.display = 'flex';
      _modules_closePopUp_js__WEBPACK_IMPORTED_MODULE_4__.mainDisplayContainer.style.display = 'none';
      _modules_closePopUp_js__WEBPACK_IMPORTED_MODULE_4__.header.style.display = 'none';
    });
  });
};
displayPopUp();

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiUrlSearch": () => (/* binding */ ApiUrlSearch),
/* harmony export */   "involvmentApiUrlComments": () => (/* binding */ involvmentApiUrlComments),
/* harmony export */   "involvmentApiUrlLikes": () => (/* binding */ involvmentApiUrlLikes)
/* harmony export */ });
const ApiUrlSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
const involvmentApiUrlLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HFdMRM8ja26wIc0XEhGU/likes/';
const involvmentApiUrlComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HFdMRM8ja26wIc0XEhGU/comments';


/***/ }),

/***/ "./src/modules/closePopUp.js":
/*!***********************************!*\
  !*** ./src/modules/closePopUp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePopUp": () => (/* binding */ closePopUp),
/* harmony export */   "commentContainer": () => (/* binding */ commentContainer),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "mainDisplayContainer": () => (/* binding */ mainDisplayContainer)
/* harmony export */ });
const commentContainer = document.querySelector('.popUpComments');
const mainDisplayContainer = document.querySelector('.mainDisplayContainer');
const header = document.querySelector('.header');
const closePopUp = () => {
  const crossBtn = document.querySelector('.cross');
  crossBtn.addEventListener('click', e => {
    e.preventDefault();
    commentContainer.style.display = 'none';
    header.style.display = 'flex';
    mainDisplayContainer.style.display = 'block';
  });
};


/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = async (comments, id) => {
  const commentCounts = document.querySelector(`#commentCounts-${id}`);
  commentCounts.innerText = comments.length;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/modules/displayLikes.js":
/*!*************************************!*\
  !*** ./src/modules/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayLikes": () => (/* binding */ displayLikes),
/* harmony export */   "fetchLikes": () => (/* binding */ fetchLikes)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/modules/API.js");

const fetchLikes = async () => {
  const response = await fetch(_API_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiUrlLikes);
  const data = await response.json();
  return data;
};
const displayLikes = async () => {
  const likes = await fetchLikes();
  const likeCount = document.querySelectorAll('#likesCounter');
  likeCount.forEach((span, i) => {
    span.textContent = likes[i].likes;
  });
};


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
    <p><span id="mealTitle">${meal.strMeal}</span><button type="button" class="likeBtn"><img src="${_asset_heart_png__WEBPACK_IMPORTED_MODULE_1__}" alt="heart" id="like"></button><span id="likesCounter"></span>Likes</p>
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

/***/ "./src/modules/likeItem.js":
/*!*********************************!*\
  !*** ./src/modules/likeItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/modules/API.js");
/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayLikes.js */ "./src/modules/displayLikes.js");


const likeItem = async () => {
  const likes = await (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_1__.fetchLikes)();
  const likeBtn = document.querySelectorAll('.likeBtn');
  const likeCount = document.querySelectorAll('#likesCounter');
  likeBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      likeCount[i].textContent = parseInt(likeCount[i].textContent, 10) + 1;
      const itemId = likes[i].item_id;
      const likesNo = likeCount[i].textContent;
      fetch(_API_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiUrlLikes, {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
          likes: likesNo
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeItem);

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
/* harmony import */ var _asset_cross_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/cross.png */ "./src/asset/cross.png");
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");
/* harmony import */ var _closePopUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./closePopUp.js */ "./src/modules/closePopUp.js");




const getCommetsFromApi = async (url, id) => {
  const res = await fetch(`${url}?item_id=${id}`);
  const comments = await res.json();
  return comments;
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
  await (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(comments, id);
};
const postCommentOnApi = async (url, id, username, comment) => {
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
  _closePopUp_js__WEBPACK_IMPORTED_MODULE_3__.commentContainer.innerHTML = '';
  const id = index + 1;
  const items = `
      <div class="poUpCountainer">
          <img class="cross" src="${_asset_cross_png__WEBPACK_IMPORTED_MODULE_1__}" alt="">
          <div class ="imgContainer">
          <img class="commentImg" src="${data.strMealThumb}" alt="">
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
  _closePopUp_js__WEBPACK_IMPORTED_MODULE_3__.commentContainer.innerHTML = items;
  (0,_closePopUp_js__WEBPACK_IMPORTED_MODULE_3__.closePopUp)();
  await submitComment(id);
  await displayComment(id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopUp);

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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-family: \"Wonderbar\", sans-serif;\r\n  text-align: center;\r\n  font-size: 5vw;\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  margin: 1vh;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 2rem;\r\n  background-color: rgba(8, 250, 225, 0.117);\r\n  background-blend-mode: hard-light;\r\n}\r\n\r\n.headerUl {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.headerUl li {\r\n  font-size: 2rem;\r\n  color: rgb(123, 8, 253);\r\n}\r\n\r\n.headerUl li:hover,\r\n.headerUl li:focus {\r\n  color: red;\r\n  background-color: aliceblue;\r\n}\r\n\r\n#logo {\r\n  width: 3%;\r\n  height: 3%;\r\n}\r\n\r\n.meals-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(3, 25vw);\r\n  gap: 3vw;\r\n}\r\n\r\n.meal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  border-radius: 6px;\r\n  align-items: center;\r\n  row-gap: 0.8rem;\r\n  height: 60vh;\r\n}\r\n\r\n#mealImg {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  padding: 0.2rem;\r\n}\r\n\r\n#mealTitle {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#like {\r\n  width: 20px;\r\n}\r\n\r\n#likesCounter {\r\n  font-size: 1rem;\r\n}\r\n\r\n#mealTitle,\r\n.likeBtn {\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.likeBtn {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.popUpComments {\r\n  display: flex;\r\n}\r\n\r\n.commentImg {\r\n  width: 20%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .meals-container {\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: repeat(2, 35vw);\r\n    gap: 5vw;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,0CAA0C;EAC1C,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;;EAEE,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sCAAsC;EACtC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,sCAAsC;IACtC,QAAQ;EACV;AACF","sourcesContent":["@import url(\"https://fonts.cdnfonts.com/css/wonderbar\");\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-family: \"Wonderbar\", sans-serif;\r\n  text-align: center;\r\n  font-size: 5vw;\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  margin: 1vh;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 2rem;\r\n  background-color: rgba(8, 250, 225, 0.117);\r\n  background-blend-mode: hard-light;\r\n}\r\n\r\n.headerUl {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.headerUl li {\r\n  font-size: 2rem;\r\n  color: rgb(123, 8, 253);\r\n}\r\n\r\n.headerUl li:hover,\r\n.headerUl li:focus {\r\n  color: red;\r\n  background-color: aliceblue;\r\n}\r\n\r\n#logo {\r\n  width: 3%;\r\n  height: 3%;\r\n}\r\n\r\n.meals-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(3, 25vw);\r\n  gap: 3vw;\r\n}\r\n\r\n.meal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  border-radius: 6px;\r\n  align-items: center;\r\n  row-gap: 0.8rem;\r\n  height: 60vh;\r\n}\r\n\r\n#mealImg {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  padding: 0.2rem;\r\n}\r\n\r\n#mealTitle {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#like {\r\n  width: 20px;\r\n}\r\n\r\n#likesCounter {\r\n  font-size: 1rem;\r\n}\r\n\r\n#mealTitle,\r\n.likeBtn {\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.likeBtn {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.popUpComments {\r\n  display: flex;\r\n}\r\n\r\n.commentImg {\r\n  width: 20%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .meals-container {\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: repeat(2, 35vw);\r\n    gap: 5vw;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL0FQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY2xvc2VQb3BVcC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlMaWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheU1lYWxzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9mZXRjaE1lYWxzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9saWtlSXRlbS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wVXAuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vYXNzZXQvbG9nby5wbmcnO1xuaW1wb3J0IGRpc3BsYXlNZWFscyBmcm9tICcuL21vZHVsZXMvZGlzcGxheU1lYWxzLmpzJztcbmltcG9ydCBjcmVhdGVQb3BVcCBmcm9tICcuL21vZHVsZXMvcG9wVXAuanMnO1xuaW1wb3J0IHsgaGVhZGVyLCBtYWluRGlzcGxheUNvbnRhaW5lciwgY29tbWVudENvbnRhaW5lciB9IGZyb20gJy4vbW9kdWxlcy9jbG9zZVBvcFVwLmpzJztcbmltcG9ydCBmZXRjaE1lYWxzIGZyb20gJy4vbW9kdWxlcy9mZXRjaE1lYWxzLmpzJztcbmltcG9ydCB7IGRpc3BsYXlMaWtlcyB9IGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5TGlrZXMuanMnO1xuaW1wb3J0IGxpa2VJdGVtIGZyb20gJy4vbW9kdWxlcy9saWtlSXRlbS5qcyc7XG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpO1xubG9nby5zcmMgPSBMb2dvO1xuXG5kaXNwbGF5TWVhbHMoKTtcbmRpc3BsYXlMaWtlcygpO1xubGlrZUl0ZW0oKTtcbmNvbnN0IGRpc3BsYXlQb3BVcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoTWVhbHMoKTtcbiAgY29uc3QgY29tbWVudEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudCcpO1xuICBjb21tZW50QnRucy5mb3JFYWNoKChjb21tZW50QnRuLCBpbmRleCkgPT4ge1xuICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWVhbCA9IGRhdGEubWVhbHNbaW5kZXhdO1xuICAgICAgYXdhaXQgY3JlYXRlUG9wVXAobWVhbCwgaW5kZXgpO1xuICAgICAgY29tbWVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgbWFpbkRpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9KTtcbn07XG5kaXNwbGF5UG9wVXAoKTtcbiIsImNvbnN0IEFwaVVybFNlYXJjaCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9mPWUnO1xuY29uc3QgaW52b2x2bWVudEFwaVVybExpa2VzID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0hGZE1STThqYTI2d0ljMFhFaEdVL2xpa2VzLyc7XG5jb25zdCBpbnZvbHZtZW50QXBpVXJsQ29tbWVudHMgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSEZkTVJNOGphMjZ3SWMwWEVoR1UvY29tbWVudHMnO1xuXG5leHBvcnQge1xuICBBcGlVcmxTZWFyY2gsIGludm9sdm1lbnRBcGlVcmxMaWtlcywgaW52b2x2bWVudEFwaVVybENvbW1lbnRzLFxufTsiLCJjb25zdCBjb21tZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQ29tbWVudHMnKTtcbmNvbnN0IG1haW5EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5EaXNwbGF5Q29udGFpbmVyJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBjbG9zZVBvcFVwID0gKCkgPT4ge1xuICBjb25zdCBjcm9zc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcm9zcycpO1xuICBjcm9zc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbW1lbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYWluRGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBjbG9zZVBvcFVwLCBjb21tZW50Q29udGFpbmVyLCBtYWluRGlzcGxheUNvbnRhaW5lciwgaGVhZGVyLFxufTsiLCJjb25zdCBjb21tZW50Q291bnRlciA9IGFzeW5jIChjb21tZW50cywgaWQpID0+IHtcbiAgY29uc3QgY29tbWVudENvdW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb21tZW50Q291bnRzLSR7aWR9YCk7XG4gIGNvbW1lbnRDb3VudHMuaW5uZXJUZXh0ID0gY29tbWVudHMubGVuZ3RoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7IiwiaW1wb3J0IHsgaW52b2x2bWVudEFwaVVybExpa2VzIH0gZnJvbSAnLi9BUEkuanMnO1xuXG5jb25zdCBmZXRjaExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGludm9sdm1lbnRBcGlVcmxMaWtlcyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcbmNvbnN0IGRpc3BsYXlMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBmZXRjaExpa2VzKCk7XG4gIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaWtlc0NvdW50ZXInKTtcbiAgbGlrZUNvdW50LmZvckVhY2goKHNwYW4sIGkpID0+IHtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbGlrZXNbaV0ubGlrZXM7XG4gIH0pO1xufTtcbmV4cG9ydCB7IGZldGNoTGlrZXMsIGRpc3BsYXlMaWtlcyB9OyIsImltcG9ydCBmZXRjaE1lYWxzIGZyb20gJy4vZmV0Y2hNZWFscy5qcyc7XG5pbXBvcnQgaGVhcnQgZnJvbSAnLi4vYXNzZXQvaGVhcnQucG5nJztcblxuY29uc3QgZGlzcGxheU1lYWxzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hNZWFscygpO1xuICBjb25zdCBtZWFsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFscy1jb250YWluZXInKTtcbiAgZGF0YS5tZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ21lYWwnO1xuICAgIGl0ZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGltZyBpZD1cIm1lYWxJbWdcIiBzcmM9JHttZWFsLnN0ck1lYWxUaHVtYn0+XG4gICAgPHA+PHNwYW4gaWQ9XCJtZWFsVGl0bGVcIj4ke21lYWwuc3RyTWVhbH08L3NwYW4+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJsaWtlQnRuXCI+PGltZyBzcmM9XCIke2hlYXJ0fVwiIGFsdD1cImhlYXJ0XCIgaWQ9XCJsaWtlXCI+PC9idXR0b24+PHNwYW4gaWQ9XCJsaWtlc0NvdW50ZXJcIj48L3NwYW4+TGlrZXM8L3A+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb21tZW50XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVzZXJ2ZVwiPlJlc2VydmF0aW9uPC9idXR0b24+YCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lYWxzOyIsImltcG9ydCB7IEFwaVVybFNlYXJjaCB9IGZyb20gJy4vQVBJLmpzJztcblxuY29uc3QgZmV0Y2hNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBcGlVcmxTZWFyY2gpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5leHBvcnQgZGVmYXVsdCBmZXRjaE1lYWxzO1xuIiwiaW1wb3J0IHsgaW52b2x2bWVudEFwaVVybExpa2VzIH0gZnJvbSAnLi9BUEkuanMnO1xuaW1wb3J0IHsgZmV0Y2hMaWtlcyB9IGZyb20gJy4vZGlzcGxheUxpa2VzLmpzJztcblxuY29uc3QgbGlrZUl0ZW0gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZmV0Y2hMaWtlcygpO1xuICBjb25zdCBsaWtlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VCdG4nKTtcbiAgY29uc3QgbGlrZUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xpa2VzQ291bnRlcicpO1xuICBsaWtlQnRuLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxpa2VDb3VudFtpXS50ZXh0Q29udGVudCA9IHBhcnNlSW50KGxpa2VDb3VudFtpXS50ZXh0Q29udGVudCwgMTApICsgMTtcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IGxpa2VzW2ldLml0ZW1faWQ7XG4gICAgICBjb25zdCBsaWtlc05vID0gbGlrZUNvdW50W2ldLnRleHRDb250ZW50O1xuICAgICAgZmV0Y2goaW52b2x2bWVudEFwaVVybExpa2VzLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgICAgIGxpa2VzOiBsaWtlc05vLFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbGlrZUl0ZW07IiwiaW1wb3J0IHsgaW52b2x2bWVudEFwaVVybENvbW1lbnRzIH0gZnJvbSAnLi9BUEkuanMnO1xuaW1wb3J0IGNyb3NzIGZyb20gJy4uL2Fzc2V0L2Nyb3NzLnBuZyc7XG5pbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9jb21tZW50Q291bnRlci5qcyc7XG5pbXBvcnQgeyBjb21tZW50Q29udGFpbmVyLCBjbG9zZVBvcFVwIH0gZnJvbSAnLi9jbG9zZVBvcFVwLmpzJztcblxuY29uc3QgZ2V0Q29tbWV0c0Zyb21BcGkgPSBhc3luYyAodXJsLCBpZCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9P2l0ZW1faWQ9JHtpZH1gKTtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gY29tbWVudHM7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1ldHNGcm9tQXBpKGludm9sdm1lbnRBcGlVcmxDb21tZW50cywgaWQpO1xuICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21tZW50TGlzdC0ke2lkfWApO1xuICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoY29tbWVudHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gOiR7Y29tbWVudC51c2VybmFtZX0gOiAke2NvbW1lbnQuY29tbWVudH08L2xpPiBgO1xuICB9KTtcbiAgYXdhaXQgY29tbWVudENvdW50ZXIoY29tbWVudHMsIGlkKTtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50T25BcGkgPSBhc3luYyAodXJsLCBpZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSksXG4gIH0pO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudChpZCk7XG4gIH1cbn07XG5cbmNvbnN0IHN1Ym1pdENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JtLSR7aWR9YCk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgY29tbWVudFRleHQgfSA9IGZvcm0uZWxlbWVudHM7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lLnZhbHVlO1xuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50VGV4dC52YWx1ZTtcbiAgICBhd2FpdCBwb3N0Q29tbWVudE9uQXBpKGludm9sdm1lbnRBcGlVcmxDb21tZW50cywgaWQsIG5hbWUsIGNvbW1lbnQpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudChpZCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlUG9wVXAgPSBhc3luYyAoZGF0YSwgaW5kZXgpID0+IHtcbiAgY29tbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaWQgPSBpbmRleCArIDE7XG4gIGNvbnN0IGl0ZW1zID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInBvVXBDb3VudGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImNyb3NzXCIgc3JjPVwiJHtjcm9zc31cIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzID1cImltZ0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJjb21tZW50SW1nXCIgc3JjPVwiJHtkYXRhLnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7ZGF0YS5zdHJNZWFsfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIkluZ3JlZGllbnRzXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiSW5ncmVkaWVudHMxXCI+PHN0cm9uZz5JbmdyZWRpZW50czogPC9zdHJvbmc+JHtkYXRhLnN0ckluZ3JlZGllbnQxfSwgICR7ZGF0YS5zdHJJbmdyZWRpZW50Mn0sICAke2RhdGEuc3RySW5ncmVkaWVudDN9LCAgJHtkYXRhLnN0ckluZ3JlZGllbnQ0fSwgICR7ZGF0YS5zdHJJbmdyZWRpZW50NX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz0gXCJNZWFzdXJlXCI+XG4gICAgICAgICAgIDxwPiA8c3Ryb25nPk1lYXN1cmVtZW50Ojwvc3Ryb25nPiAke2RhdGEuc3RyTWVhc3VyZTF9LCAke2RhdGEuc3RyTWVhc3VyZTJ9LCAke2RhdGEuc3RyTWVhc3VyZTN9LCAke2RhdGEuc3RyTWVhc3VyZTR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9IFwic291cmNlXCI+XG4gICAgICAgICAgIDxwPiA8c3Ryb25nPiBTb3VyY2U6IDwvc3Ryb25nPjxhIGhyZWY9XCIke2RhdGEuc3RyU291cmNlfVwiIHRhcmdldD1cIl9ibGFua1wiPkNoZWNrIEhlcmU8L2E+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9IFwieW91dHViZVwiPlxuICAgICAgICAgICA8cD48c3Ryb25nPiBWaWRlbyA6IDwvc3Ryb25nPjxhIGhyZWY9XCIke2RhdGEuc3RyWW91dHViZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZWUgTGl2ZTwvYT48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcyA9XCJpbnN0cnVjdGlvbnNcIj5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+SG93IHRvIE1ha2U6IDwvc3Ryb25nPiR7ZGF0YS5zdHJJbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50U2VjdGlvblwiPlxuICAgICAgICAgIDxoMz5Db21tZW50cyg8c3BhbiBpZD1cImNvbW1lbnRDb3VudHMtJHtpZH1cIj4wPC9zcGFuPik8L2gzPlxuICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRMaXN0LSR7aWR9XCI+XG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxoND5BZGQgYSBjb21tZW50PC9oND5cbiAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tJHtpZH1cIiBhY3Rpb249XCJzdWJtaXRcIiA+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTVcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0XCIgbmFtZT1cImNvbW1lbnRUZXh0XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5gO1xuICBjb21tZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGl0ZW1zO1xuICBjbG9zZVBvcFVwKCk7XG4gIGF3YWl0IHN1Ym1pdENvbW1lbnQoaWQpO1xuICBhd2FpdCBkaXNwbGF5Q29tbWVudChpZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3BVcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy93b25kZXJiYXIpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJXb25kZXJiYXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA1dnc7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxdmg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDI1MCwgMjI1LCAwLjExNyk7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHJnYigxMjMsIDgsIDI1Myk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCBsaTpob3ZlcixcXHJcXG4uaGVhZGVyVWwgbGk6Zm9jdXMge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDMlO1xcclxcbiAgaGVpZ2h0OiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyNXZ3KTtcXHJcXG4gIGdhcDogM3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHJvdy1nYXA6IDAuOHJlbTtcXHJcXG4gIGhlaWdodDogNjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI21lYWxJbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQsXFxyXFxuLnJlc2VydmUge1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbFRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlrZSB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpa2VzQ291bnRlciB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNtZWFsVGl0bGUsXFxyXFxuLmxpa2VCdG4ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5saWtlQnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBDb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEltZyB7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzNXZ3KTtcXHJcXG4gICAgZ2FwOiA1dnc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFVBQVU7RUFDViwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQ0FBc0M7RUFDdEMsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxRQUFRO0VBQ1Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL3dvbmRlcmJhclxcXCIpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIldvbmRlcmJhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDV2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDF2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMjUwLCAyMjUsIDAuMTE3KTtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCBsaSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogcmdiKDEyMywgOCwgMjUzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclVsIGxpOmhvdmVyLFxcclxcbi5oZWFkZXJVbCBsaTpmb2N1cyB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogMyU7XFxyXFxuICBoZWlnaHQ6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDI1dncpO1xcclxcbiAgZ2FwOiAzdnc7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMC44cmVtO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbEltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCxcXHJcXG4ucmVzZXJ2ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNtZWFsVGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNsaWtlIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlrZXNDb3VudGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lYWxUaXRsZSxcXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VCdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcENvbW1lbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW1nIHtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVhbHMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDM1dncpO1xcclxcbiAgICBnYXA6IDV2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJMb2dvIiwiZGlzcGxheU1lYWxzIiwiY3JlYXRlUG9wVXAiLCJoZWFkZXIiLCJtYWluRGlzcGxheUNvbnRhaW5lciIsImNvbW1lbnRDb250YWluZXIiLCJmZXRjaE1lYWxzIiwiZGlzcGxheUxpa2VzIiwibGlrZUl0ZW0iLCJsb2dvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwiZGlzcGxheVBvcFVwIiwiZGF0YSIsImNvbW1lbnRCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjb21tZW50QnRuIiwiaW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWVhbCIsIm1lYWxzIiwic3R5bGUiLCJkaXNwbGF5IiwiQXBpVXJsU2VhcmNoIiwiaW52b2x2bWVudEFwaVVybExpa2VzIiwiaW52b2x2bWVudEFwaVVybENvbW1lbnRzIiwiY2xvc2VQb3BVcCIsImNyb3NzQnRuIiwiY29tbWVudENvdW50ZXIiLCJjb21tZW50cyIsImlkIiwiY29tbWVudENvdW50cyIsImlubmVyVGV4dCIsImxlbmd0aCIsImZldGNoTGlrZXMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImxpa2VzIiwibGlrZUNvdW50Iiwic3BhbiIsImkiLCJ0ZXh0Q29udGVudCIsImhlYXJ0IiwibWVhbHNDb250YWluZXIiLCJpdGVtIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NOYW1lIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwic3RyTWVhbFRodW1iIiwic3RyTWVhbCIsImxpa2VCdG4iLCJidG4iLCJwYXJzZUludCIsIml0ZW1JZCIsIml0ZW1faWQiLCJsaWtlc05vIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiY3Jvc3MiLCJnZXRDb21tZXRzRnJvbUFwaSIsInVybCIsInJlcyIsImRpc3BsYXlDb21tZW50IiwiY29tbWVudExpc3QiLCJpbm5lckhUTUwiLCJBcnJheSIsImlzQXJyYXkiLCJjb21tZW50IiwiY3JlYXRpb25fZGF0ZSIsInVzZXJuYW1lIiwicG9zdENvbW1lbnRPbkFwaSIsIm9rIiwic3VibWl0Q29tbWVudCIsImZvcm0iLCJjb21tZW50VGV4dCIsImVsZW1lbnRzIiwibmFtZSIsInZhbHVlIiwicmVzZXQiLCJpdGVtcyIsInN0ckluZ3JlZGllbnQxIiwic3RySW5ncmVkaWVudDIiLCJzdHJJbmdyZWRpZW50MyIsInN0ckluZ3JlZGllbnQ0Iiwic3RySW5ncmVkaWVudDUiLCJzdHJNZWFzdXJlMSIsInN0ck1lYXN1cmUyIiwic3RyTWVhc3VyZTMiLCJzdHJNZWFzdXJlNCIsInN0clNvdXJjZSIsInN0cllvdXR1YmUiLCJzdHJJbnN0cnVjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9