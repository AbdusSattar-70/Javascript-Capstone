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
/* harmony import */ var _modules_likeItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/likeItem.js */ "./src/modules/likeItem.js");
/* harmony import */ var _modules_homepageCounter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/homepageCounter.js */ "./src/modules/homepageCounter.js");








const logo = document.querySelector('#logo');
logo.src = _asset_logo_png__WEBPACK_IMPORTED_MODULE_1__;
(0,_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_likeItem_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_modules_homepageCounter_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
const displayPopUp = async () => {
  const data = await (0,_modules_fetchMeals_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((commentBtn, index) => {
    commentBtn.addEventListener('click', async e => {
      e.preventDefault();
      const meal = data.meals[index];
      await (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(meal, index);
      _modules_closePopUp_js__WEBPACK_IMPORTED_MODULE_4__.commentContainer.style.display = 'block';
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
/* harmony export */   "commentContainer": () => (/* binding */ commentContainer)
/* harmony export */ });
const commentContainer = document.querySelector('.popUpComments');
const closePopUp = () => {
  const crossBtn = document.querySelector('.cross');
  crossBtn.addEventListener('click', e => {
    e.preventDefault();
    commentContainer.style.display = 'none';
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
  if (id === undefined) {
    return;
  }
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
/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayLikes.js */ "./src/modules/displayLikes.js");



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
    <button type="button" class="reserve">Order Meal</button>`);
  });
  (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_2__.displayLikes)();
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

/***/ "./src/modules/homepageCounter.js":
/*!****************************************!*\
  !*** ./src/modules/homepageCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchMeals.js */ "./src/modules/fetchMeals.js");

const homepageCounter = async () => {
  await (0,_fetchMeals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const mealsContainer = document.querySelector('.meals-container');
  const recipeCounter = document.getElementById('recipesCounter');
  recipeCounter.textContent = mealsContainer.children.length;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageCounter);

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
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");
/* harmony import */ var _closePopUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closePopUp.js */ "./src/modules/closePopUp.js");



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
  await (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(comments, id);
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
  _closePopUp_js__WEBPACK_IMPORTED_MODULE_2__.commentContainer.innerHTML = '';
  const id = index + 1;
  const items = `
      <div class="poUpCountainer">
           <i class="fa-regular fa-x cross"></i>
          <div class ="imgContainer">
          <img class="commentImg" src="${data.strMealThumb}" alt="">
          </div>
          <h2 class="title">${data.strMeal}</h2>
          <p><strong>Meal Area: </strong>${data.strArea}</p>
          <p><strong>Meal Category: </strong>${data.strCategory}</p> 
          <div class="Ingredients">
            <p class="Ingredients1"><strong>Ingredients: </strong>${data.strIngredient1},  ${data.strIngredient2},  ${data.strIngredient3},  ${data.strIngredient4},  ${data.strIngredient5}</p>
          </div>
          <div class= "description">
           <div class="descrip1">
            <p><strong>Meal Tags: </strong>${data.strTags}</p>
            <p> <strong>Measurement:</strong> ${data.strMeasure1}, ${data.strMeasure2}, ${data.strMeasure3}, ${data.strMeasure4},${data.strMeasure5}</p>
           </div>
           <div class="descrip1">
           <p><strong> Video : </strong><a href="${data.strYoutube}" target="_blank">See Live</a></p>
           <p> <strong> Source: </strong><a href="${data.strSource}" target="_blank">Check Here</a></p>
    
           </div>
           </div>
          <div class="commentSection">
          <h3>Comments(<span id="commentCounts-${id}">0</span>)</h3>
          <ul class="commentList-${id} commentUL">

          </ul>
          <h4>Add a comment</h4>
          <form class="form-${id}" action="submit" >
              <input id="comment-input" type="text" placeholder="Your name" name="username" required>
              <textarea id="comment-input" cols="15" rows="4" placeholder="Your insight" name="commentText" required></textarea>
              <button type="submit">Comment</button>
          </form>
          </div>`;
  _closePopUp_js__WEBPACK_IMPORTED_MODULE_2__.commentContainer.innerHTML = items;
  (0,_closePopUp_js__WEBPACK_IMPORTED_MODULE_2__.closePopUp)();
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\na:visited,\r\na:active {\r\n  color: rgba(53, 52, 52, 0.842);\r\n  font-weight: 100;\r\n}\r\n\r\nh1 {\r\n  font-family: \"Wonderbar\", sans-serif;\r\n  text-align: center;\r\n  font-size: 5vw;\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nform button {\r\n  height: 2rem;\r\n  width: 45%;\r\n  color: rgb(10, 10, 10);\r\n  font-size: 1.2rem;\r\n  border-radius: 5%;\r\n  background-color: rgb(249, 250, 248);\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  margin: 2vh 0;\r\n}\r\n\r\n.header {\r\n  margin: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-blend-mode: hard-light;\r\n  padding-left: 5vw;\r\n  padding-right: 10vw;\r\n  align-items: center;\r\n}\r\n\r\n.headerUl {\r\n  display: flex;\r\n  gap: 3rem;\r\n}\r\n\r\n.headerUl li {\r\n  font-size: 2vw;\r\n}\r\n\r\n.commentUL li {\r\n  padding: 4px;\r\n  font-size: 1.2rem;\r\n  border-radius: 3px;\r\n  background-color: rgb(196, 186, 186);\r\n}\r\n\r\n.headerUl li:hover,\r\n.headerUl li:focus {\r\n  color: #ff7200;\r\n}\r\n\r\n#logo {\r\n  width: 10vw;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.meals-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(3, 25vw);\r\n  gap: 3vw;\r\n}\r\n\r\n.meal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  border-radius: 6px;\r\n  align-items: center;\r\n  row-gap: 0.8rem;\r\n  height: 60vh;\r\n}\r\n\r\n#mealImg {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  padding: 0.2rem;\r\n}\r\n\r\n#mealTitle {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#like {\r\n  width: 20px;\r\n}\r\n\r\n#likesCounter {\r\n  font-size: 1rem;\r\n}\r\n\r\n#mealTitle,\r\n.likeBtn {\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.likeBtn {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.poUpCountainer {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  z-index: 1;\r\n  align-items: center;\r\n  background: rgba(128, 125, 125, 0.966);\r\n  padding: 2rem;\r\n  width: 90vw;\r\n  top: 2%;\r\n  left: 2%;\r\n  right: 2%;\r\n  bottom: 2%;\r\n  margin: 2%;\r\n  height: 90vh;\r\n  overflow-y: auto;\r\n  border: 2px solid black;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 5px 4px rgb(75, 75, 75);\r\n}\r\n\r\n.poUpCountainer p {\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\n.poUpCountainer p,\r\n.poUpCountainer strong {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.poUpCountainer::-webkit-scrollbar {\r\n  width: 8px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.poUpCountainer::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.poUpCountainer::-webkit-scrollbar-thumb {\r\n  background-color: rgb(224, 215, 215);\r\n  border-radius: 4px;\r\n}\r\n\r\n.cross {\r\n  font-size: 2rem;\r\n  position: fixed;\r\n  top: 8%;\r\n  right: 4%;\r\n  margin-right: 2rem;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.commentImg {\r\n  width: 50vw;\r\n  height: 30vw;\r\n  border-radius: 3%;\r\n}\r\n\r\n.commentImg:hover {\r\n  transform: scale(1.08);\r\n  transition: ease-in-out 1s;\r\n}\r\n\r\n.description {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.descrip1 p,\r\n.descrip2 p {\r\n  margin: 0.5rem;\r\n}\r\n\r\n.description a {\r\n  font-weight: 700;\r\n  color: rgb(127, 251, 4);\r\n}\r\n\r\n.commentSection {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\nh2,\r\nh3,\r\nh4 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.commentUL {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\ninput {\r\n  height: 2rem;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 1rem;\r\n}\r\n\r\n#comment-input {\r\n  width: 40vw;\r\n  border-radius: 3px;\r\n  border: 1px solid black;\r\n  background-color: rgb(231, 223, 223);\r\n}\r\n\r\n#comment-input:focus {\r\n  background-color: white;\r\n  outline: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .meals-container {\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: repeat(2, 35vw);\r\n    gap: 5vw;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;;EAEE,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,iCAAiC;EACjC,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sCAAsC;EACtC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,sCAAsC;EACtC,aAAa;EACb,WAAW;EACX,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,OAAO;EACP,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;;;EAGE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,sCAAsC;IACtC,QAAQ;EACV;AACF","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\na:visited,\r\na:active {\r\n  color: rgba(53, 52, 52, 0.842);\r\n  font-weight: 100;\r\n}\r\n\r\nh1 {\r\n  font-family: \"Wonderbar\", sans-serif;\r\n  text-align: center;\r\n  font-size: 5vw;\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nform button {\r\n  height: 2rem;\r\n  width: 45%;\r\n  color: rgb(10, 10, 10);\r\n  font-size: 1.2rem;\r\n  border-radius: 5%;\r\n  background-color: rgb(249, 250, 248);\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  margin: 2vh 0;\r\n}\r\n\r\n.header {\r\n  margin: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-blend-mode: hard-light;\r\n  padding-left: 5vw;\r\n  padding-right: 10vw;\r\n  align-items: center;\r\n}\r\n\r\n.headerUl {\r\n  display: flex;\r\n  gap: 3rem;\r\n}\r\n\r\n.headerUl li {\r\n  font-size: 2vw;\r\n}\r\n\r\n.commentUL li {\r\n  padding: 4px;\r\n  font-size: 1.2rem;\r\n  border-radius: 3px;\r\n  background-color: rgb(196, 186, 186);\r\n}\r\n\r\n.headerUl li:hover,\r\n.headerUl li:focus {\r\n  color: #ff7200;\r\n}\r\n\r\n#logo {\r\n  width: 10vw;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.meals-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(3, 25vw);\r\n  gap: 3vw;\r\n}\r\n\r\n.meal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  border-radius: 6px;\r\n  align-items: center;\r\n  row-gap: 0.8rem;\r\n  height: 60vh;\r\n}\r\n\r\n#mealImg {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  padding: 0.2rem;\r\n}\r\n\r\n#mealTitle {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#like {\r\n  width: 20px;\r\n}\r\n\r\n#likesCounter {\r\n  font-size: 1rem;\r\n}\r\n\r\n#mealTitle,\r\n.likeBtn {\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.likeBtn {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.poUpCountainer {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  z-index: 1;\r\n  align-items: center;\r\n  background: rgba(128, 125, 125, 0.966);\r\n  padding: 2rem;\r\n  width: 90vw;\r\n  top: 2%;\r\n  left: 2%;\r\n  right: 2%;\r\n  bottom: 2%;\r\n  margin: 2%;\r\n  height: 90vh;\r\n  overflow-y: auto;\r\n  border: 2px solid black;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 5px 4px rgb(75, 75, 75);\r\n}\r\n\r\n.poUpCountainer p {\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\n.poUpCountainer p,\r\n.poUpCountainer strong {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.poUpCountainer::-webkit-scrollbar {\r\n  width: 8px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.poUpCountainer::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.poUpCountainer::-webkit-scrollbar-thumb {\r\n  background-color: rgb(224, 215, 215);\r\n  border-radius: 4px;\r\n}\r\n\r\n.cross {\r\n  font-size: 2rem;\r\n  position: fixed;\r\n  top: 8%;\r\n  right: 4%;\r\n  margin-right: 2rem;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.commentImg {\r\n  width: 50vw;\r\n  height: 30vw;\r\n  border-radius: 3%;\r\n}\r\n\r\n.commentImg:hover {\r\n  transform: scale(1.08);\r\n  transition: ease-in-out 1s;\r\n}\r\n\r\n.description {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.descrip1 p,\r\n.descrip2 p {\r\n  margin: 0.5rem;\r\n}\r\n\r\n.description a {\r\n  font-weight: 700;\r\n  color: rgb(127, 251, 4);\r\n}\r\n\r\n.commentSection {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\nh2,\r\nh3,\r\nh4 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.commentUL {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\ninput {\r\n  height: 2rem;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 1rem;\r\n}\r\n\r\n#comment-input {\r\n  width: 40vw;\r\n  border-radius: 3px;\r\n  border: 1px solid black;\r\n  background-color: rgb(231, 223, 223);\r\n}\r\n\r\n#comment-input:focus {\r\n  background-color: white;\r\n  outline: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .meals-container {\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: repeat(2, 35vw);\r\n    gap: 5vw;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jbG9zZVBvcFVwLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50Q291bnRlci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheUxpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5TWVhbHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2ZldGNoTWVhbHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2hvbWVwYWdlQ291bnRlci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0L2xvZ28ucG5nJztcbmltcG9ydCBkaXNwbGF5TWVhbHMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlNZWFscy5qcyc7XG5pbXBvcnQgY3JlYXRlUG9wVXAgZnJvbSAnLi9tb2R1bGVzL3BvcFVwLmpzJztcbmltcG9ydCB7IGNvbW1lbnRDb250YWluZXIgfSBmcm9tICcuL21vZHVsZXMvY2xvc2VQb3BVcC5qcyc7XG5pbXBvcnQgZmV0Y2hNZWFscyBmcm9tICcuL21vZHVsZXMvZmV0Y2hNZWFscy5qcyc7XG5pbXBvcnQgbGlrZUl0ZW0gZnJvbSAnLi9tb2R1bGVzL2xpa2VJdGVtLmpzJztcbmltcG9ydCBob21lcGFnZUNvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL2hvbWVwYWdlQ291bnRlci5qcyc7XG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpO1xubG9nby5zcmMgPSBMb2dvO1xuXG5kaXNwbGF5TWVhbHMoKTtcbmxpa2VJdGVtKCk7XG5ob21lcGFnZUNvdW50ZXIoKTtcbmNvbnN0IGRpc3BsYXlQb3BVcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoTWVhbHMoKTtcbiAgY29uc3QgY29tbWVudEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudCcpO1xuICBjb21tZW50QnRucy5mb3JFYWNoKChjb21tZW50QnRuLCBpbmRleCkgPT4ge1xuICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWVhbCA9IGRhdGEubWVhbHNbaW5kZXhdO1xuICAgICAgYXdhaXQgY3JlYXRlUG9wVXAobWVhbCwgaW5kZXgpO1xuICAgICAgY29tbWVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcbiAgfSk7XG59O1xuZGlzcGxheVBvcFVwKCk7XG4iLCJjb25zdCBBcGlVcmxTZWFyY2ggPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/Zj1lJztcbmNvbnN0IGludm9sdm1lbnRBcGlVcmxMaWtlcyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9IRmRNUk04amEyNndJYzBYRWhHVS9saWtlcy8nO1xuY29uc3QgaW52b2x2bWVudEFwaVVybENvbW1lbnRzID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0hGZE1STThqYTI2d0ljMFhFaEdVL2NvbW1lbnRzJztcblxuZXhwb3J0IHtcbiAgQXBpVXJsU2VhcmNoLCBpbnZvbHZtZW50QXBpVXJsTGlrZXMsIGludm9sdm1lbnRBcGlVcmxDb21tZW50cyxcbn07IiwiY29uc3QgY29tbWVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcENvbW1lbnRzJyk7XG5jb25zdCBjbG9zZVBvcFVwID0gKCkgPT4ge1xuICBjb25zdCBjcm9zc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcm9zcycpO1xuICBjcm9zc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbW1lbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjbG9zZVBvcFVwLCBjb21tZW50Q29udGFpbmVyIH07IiwiY29uc3QgY29tbWVudENvdW50ZXIgPSBhc3luYyAoY29tbWVudHMsIGlkKSA9PiB7XG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY29tbWVudENvdW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb21tZW50Q291bnRzLSR7aWR9YCk7XG4gIGNvbW1lbnRDb3VudHMuaW5uZXJUZXh0ID0gY29tbWVudHMubGVuZ3RoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7IiwiaW1wb3J0IHsgaW52b2x2bWVudEFwaVVybExpa2VzIH0gZnJvbSAnLi9BUEkuanMnO1xuXG5jb25zdCBmZXRjaExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGludm9sdm1lbnRBcGlVcmxMaWtlcyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcbmNvbnN0IGRpc3BsYXlMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBmZXRjaExpa2VzKCk7XG4gIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaWtlc0NvdW50ZXInKTtcbiAgbGlrZUNvdW50LmZvckVhY2goKHNwYW4sIGkpID0+IHtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbGlrZXNbaV0ubGlrZXM7XG4gIH0pO1xufTtcbmV4cG9ydCB7IGZldGNoTGlrZXMsIGRpc3BsYXlMaWtlcyB9OyIsImltcG9ydCBmZXRjaE1lYWxzIGZyb20gJy4vZmV0Y2hNZWFscy5qcyc7XG5pbXBvcnQgaGVhcnQgZnJvbSAnLi4vYXNzZXQvaGVhcnQucG5nJztcbmltcG9ydCB7IGRpc3BsYXlMaWtlcyB9IGZyb20gJy4vZGlzcGxheUxpa2VzLmpzJztcblxuY29uc3QgZGlzcGxheU1lYWxzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hNZWFscygpO1xuICBjb25zdCBtZWFsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFscy1jb250YWluZXInKTtcbiAgZGF0YS5tZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ21lYWwnO1xuICAgIGl0ZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGltZyBpZD1cIm1lYWxJbWdcIiBzcmM9JHttZWFsLnN0ck1lYWxUaHVtYn0+XG4gICAgPHA+PHNwYW4gaWQ9XCJtZWFsVGl0bGVcIj4ke21lYWwuc3RyTWVhbH08L3NwYW4+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJsaWtlQnRuXCI+PGltZyBzcmM9XCIke2hlYXJ0fVwiIGFsdD1cImhlYXJ0XCIgaWQ9XCJsaWtlXCI+PC9idXR0b24+PHNwYW4gaWQ9XCJsaWtlc0NvdW50ZXJcIj48L3NwYW4+TGlrZXM8L3A+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb21tZW50XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVzZXJ2ZVwiPk9yZGVyIE1lYWw8L2J1dHRvbj5gKTtcbiAgfSk7XG4gIGRpc3BsYXlMaWtlcygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lYWxzOyIsImltcG9ydCB7IEFwaVVybFNlYXJjaCB9IGZyb20gJy4vQVBJLmpzJztcblxuY29uc3QgZmV0Y2hNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBcGlVcmxTZWFyY2gpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5leHBvcnQgZGVmYXVsdCBmZXRjaE1lYWxzO1xuIiwiaW1wb3J0IGZldGNoTWVhbHMgZnJvbSAnLi9mZXRjaE1lYWxzLmpzJztcblxuY29uc3QgaG9tZXBhZ2VDb3VudGVyID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmZXRjaE1lYWxzKCk7XG4gIGNvbnN0IG1lYWxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzLWNvbnRhaW5lcicpO1xuICBjb25zdCByZWNpcGVDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZXNDb3VudGVyJyk7XG4gIHJlY2lwZUNvdW50ZXIudGV4dENvbnRlbnQgPSBtZWFsc0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZUNvdW50ZXI7XG4iLCJpbXBvcnQgeyBpbnZvbHZtZW50QXBpVXJsTGlrZXMgfSBmcm9tICcuL0FQSS5qcyc7XG5pbXBvcnQgeyBmZXRjaExpa2VzIH0gZnJvbSAnLi9kaXNwbGF5TGlrZXMuanMnO1xuXG5jb25zdCBsaWtlSXRlbSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBmZXRjaExpa2VzKCk7XG4gIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZUJ0bicpO1xuICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGlrZXNDb3VudGVyJyk7XG4gIGxpa2VCdG4uZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGlrZUNvdW50W2ldLnRleHRDb250ZW50ID0gcGFyc2VJbnQobGlrZUNvdW50W2ldLnRleHRDb250ZW50LCAxMCkgKyAxO1xuICAgICAgY29uc3QgaXRlbUlkID0gbGlrZXNbaV0uaXRlbV9pZDtcbiAgICAgIGNvbnN0IGxpa2VzTm8gPSBsaWtlQ291bnRbaV0udGV4dENvbnRlbnQ7XG4gICAgICBmZXRjaChpbnZvbHZtZW50QXBpVXJsTGlrZXMsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICAgICAgbGlrZXM6IGxpa2VzTm8sXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBsaWtlSXRlbTsiLCJpbXBvcnQgeyBpbnZvbHZtZW50QXBpVXJsQ29tbWVudHMgfSBmcm9tICcuL0FQSS5qcyc7XG5pbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9jb21tZW50Q291bnRlci5qcyc7XG5pbXBvcnQgeyBjb21tZW50Q29udGFpbmVyLCBjbG9zZVBvcFVwIH0gZnJvbSAnLi9jbG9zZVBvcFVwLmpzJztcblxuY29uc3QgZ2V0Q29tbWV0c0Zyb21BcGkgPSBhc3luYyAodXJsLCBpZCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9P2l0ZW1faWQ9JHtpZH1gKTtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gY29tbWVudHM7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1ldHNGcm9tQXBpKGludm9sdm1lbnRBcGlVcmxDb21tZW50cywgaWQpO1xuICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21tZW50TGlzdC0ke2lkfWApO1xuICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoY29tbWVudHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gOiR7Y29tbWVudC51c2VybmFtZX0gOiAke2NvbW1lbnQuY29tbWVudH08L2xpPiBgO1xuICB9KTtcbiAgYXdhaXQgY29tbWVudENvdW50ZXIoY29tbWVudHMsIGlkKTtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50T25BcGkgPSBhc3luYyAodXJsLCBpZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSksXG4gIH0pO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudChpZCk7XG4gIH1cbn07XG5cbmNvbnN0IHN1Ym1pdENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JtLSR7aWR9YCk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgY29tbWVudFRleHQgfSA9IGZvcm0uZWxlbWVudHM7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lLnZhbHVlO1xuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50VGV4dC52YWx1ZTtcbiAgICBhd2FpdCBwb3N0Q29tbWVudE9uQXBpKGludm9sdm1lbnRBcGlVcmxDb21tZW50cywgaWQsIG5hbWUsIGNvbW1lbnQpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudChpZCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlUG9wVXAgPSBhc3luYyAoZGF0YSwgaW5kZXgpID0+IHtcbiAgY29tbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaWQgPSBpbmRleCArIDE7XG4gIGNvbnN0IGl0ZW1zID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInBvVXBDb3VudGFpbmVyXCI+XG4gICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS14IGNyb3NzXCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3MgPVwiaW1nQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImNvbW1lbnRJbWdcIiBzcmM9XCIke2RhdGEuc3RyTWVhbFRodW1ifVwiIGFsdD1cIlwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+JHtkYXRhLnN0ck1lYWx9PC9oMj5cbiAgICAgICAgICA8cD48c3Ryb25nPk1lYWwgQXJlYTogPC9zdHJvbmc+JHtkYXRhLnN0ckFyZWF9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+TWVhbCBDYXRlZ29yeTogPC9zdHJvbmc+JHtkYXRhLnN0ckNhdGVnb3J5fTwvcD4gXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIkluZ3JlZGllbnRzXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIkluZ3JlZGllbnRzMVwiPjxzdHJvbmc+SW5ncmVkaWVudHM6IDwvc3Ryb25nPiR7ZGF0YS5zdHJJbmdyZWRpZW50MX0sICAke2RhdGEuc3RySW5ncmVkaWVudDJ9LCAgJHtkYXRhLnN0ckluZ3JlZGllbnQzfSwgICR7ZGF0YS5zdHJJbmdyZWRpZW50NH0sICAke2RhdGEuc3RySW5ncmVkaWVudDV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9IFwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXAxXCI+XG4gICAgICAgICAgICA8cD48c3Ryb25nPk1lYWwgVGFnczogPC9zdHJvbmc+JHtkYXRhLnN0clRhZ3N9PC9wPlxuICAgICAgICAgICAgPHA+IDxzdHJvbmc+TWVhc3VyZW1lbnQ6PC9zdHJvbmc+ICR7ZGF0YS5zdHJNZWFzdXJlMX0sICR7ZGF0YS5zdHJNZWFzdXJlMn0sICR7ZGF0YS5zdHJNZWFzdXJlM30sICR7ZGF0YS5zdHJNZWFzdXJlNH0sJHtkYXRhLnN0ck1lYXN1cmU1fTwvcD5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwMVwiPlxuICAgICAgICAgICA8cD48c3Ryb25nPiBWaWRlbyA6IDwvc3Ryb25nPjxhIGhyZWY9XCIke2RhdGEuc3RyWW91dHViZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZWUgTGl2ZTwvYT48L3A+XG4gICAgICAgICAgIDxwPiA8c3Ryb25nPiBTb3VyY2U6IDwvc3Ryb25nPjxhIGhyZWY9XCIke2RhdGEuc3RyU291cmNlfVwiIHRhcmdldD1cIl9ibGFua1wiPkNoZWNrIEhlcmU8L2E+PC9wPlxuICAgIFxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRTZWN0aW9uXCI+XG4gICAgICAgICAgPGgzPkNvbW1lbnRzKDxzcGFuIGlkPVwiY29tbWVudENvdW50cy0ke2lkfVwiPjA8L3NwYW4+KTwvaDM+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudExpc3QtJHtpZH0gY29tbWVudFVMXCI+XG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxoND5BZGQgYSBjb21tZW50PC9oND5cbiAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tJHtpZH1cIiBhY3Rpb249XCJzdWJtaXRcIiA+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbW1lbnQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbW1lbnQtaW5wdXRcIiBjb2xzPVwiMTVcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0XCIgbmFtZT1cImNvbW1lbnRUZXh0XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5gO1xuICBjb21tZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGl0ZW1zO1xuICBjbG9zZVBvcFVwKCk7XG4gIGF3YWl0IHN1Ym1pdENvbW1lbnQoaWQpO1xuICBhd2FpdCBkaXNwbGF5Q29tbWVudChpZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3BVcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiYSg1MywgNTIsIDUyLCAwLjg0Mik7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIldvbmRlcmJhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDV2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI1MCwgMjQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMnZoIDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXZ3O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTB2dztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VUwgbGkge1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxODYsIDE4Nik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCBsaTpob3ZlcixcXHJcXG4uaGVhZGVyVWwgbGk6Zm9jdXMge1xcclxcbiAgY29sb3I6ICNmZjcyMDA7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAxMHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDI1dncpO1xcclxcbiAgZ2FwOiAzdnc7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMC44cmVtO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbEltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCxcXHJcXG4ucmVzZXJ2ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNtZWFsVGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNsaWtlIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlrZXNDb3VudGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lYWxUaXRsZSxcXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VCdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb1VwQ291bnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyNSwgMTI1LCAwLjk2Nik7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICB0b3A6IDIlO1xcclxcbiAgbGVmdDogMiU7XFxyXFxuICByaWdodDogMiU7XFxyXFxuICBib3R0b206IDIlO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggNHB4IHJnYig3NSwgNzUsIDc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvVXBDb3VudGFpbmVyIHAge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb1VwQ291bnRhaW5lciBwLFxcclxcbi5wb1VwQ291bnRhaW5lciBzdHJvbmcge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5wb1VwQ291bnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvVXBDb3VudGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9VcENvdW50YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIxNSwgMjE1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyb3NzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogOCU7XFxyXFxuICByaWdodDogNCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW1nIHtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgaGVpZ2h0OiAzMHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcDEgcCxcXHJcXG4uZGVzY3JpcDIgcCB7XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIGEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiByZ2IoMTI3LCAyNTEsIDQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudFNlY3Rpb24ge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VUwge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtaW5wdXQge1xcclxcbiAgd2lkdGg6IDQwdnc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIyMywgMjIzKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtaW5wdXQ6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzNXZ3KTtcXHJcXG4gICAgZ2FwOiA1dnc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltd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RUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsUUFBUTtFQUNWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiYSg1MywgNTIsIDUyLCAwLjg0Mik7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIldvbmRlcmJhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDV2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI1MCwgMjQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMnZoIDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXZ3O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTB2dztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VUwgbGkge1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxODYsIDE4Nik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCBsaTpob3ZlcixcXHJcXG4uaGVhZGVyVWwgbGk6Zm9jdXMge1xcclxcbiAgY29sb3I6ICNmZjcyMDA7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAxMHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDI1dncpO1xcclxcbiAgZ2FwOiAzdnc7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMC44cmVtO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbEltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCxcXHJcXG4ucmVzZXJ2ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNtZWFsVGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNsaWtlIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlrZXNDb3VudGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lYWxUaXRsZSxcXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VCdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb1VwQ291bnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyNSwgMTI1LCAwLjk2Nik7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICB0b3A6IDIlO1xcclxcbiAgbGVmdDogMiU7XFxyXFxuICByaWdodDogMiU7XFxyXFxuICBib3R0b206IDIlO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggNHB4IHJnYig3NSwgNzUsIDc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvVXBDb3VudGFpbmVyIHAge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb1VwQ291bnRhaW5lciBwLFxcclxcbi5wb1VwQ291bnRhaW5lciBzdHJvbmcge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5wb1VwQ291bnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvVXBDb3VudGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9VcENvdW50YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIxNSwgMjE1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyb3NzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogOCU7XFxyXFxuICByaWdodDogNCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW1nIHtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgaGVpZ2h0OiAzMHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcDEgcCxcXHJcXG4uZGVzY3JpcDIgcCB7XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIGEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiByZ2IoMTI3LCAyNTEsIDQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudFNlY3Rpb24ge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VUwge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtaW5wdXQge1xcclxcbiAgd2lkdGg6IDQwdnc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIyMywgMjIzKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtaW5wdXQ6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzNXZ3KTtcXHJcXG4gICAgZ2FwOiA1dnc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiTG9nbyIsImRpc3BsYXlNZWFscyIsImNyZWF0ZVBvcFVwIiwiY29tbWVudENvbnRhaW5lciIsImZldGNoTWVhbHMiLCJsaWtlSXRlbSIsImhvbWVwYWdlQ291bnRlciIsImxvZ28iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJkaXNwbGF5UG9wVXAiLCJkYXRhIiwiY29tbWVudEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNvbW1lbnRCdG4iLCJpbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZWFsIiwibWVhbHMiLCJzdHlsZSIsImRpc3BsYXkiLCJBcGlVcmxTZWFyY2giLCJpbnZvbHZtZW50QXBpVXJsTGlrZXMiLCJpbnZvbHZtZW50QXBpVXJsQ29tbWVudHMiLCJjbG9zZVBvcFVwIiwiY3Jvc3NCdG4iLCJjb21tZW50Q291bnRlciIsImNvbW1lbnRzIiwiaWQiLCJ1bmRlZmluZWQiLCJjb21tZW50Q291bnRzIiwiaW5uZXJUZXh0IiwibGVuZ3RoIiwiZmV0Y2hMaWtlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZGlzcGxheUxpa2VzIiwibGlrZXMiLCJsaWtlQ291bnQiLCJzcGFuIiwiaSIsInRleHRDb250ZW50IiwiaGVhcnQiLCJtZWFsc0NvbnRhaW5lciIsIml0ZW0iLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc05hbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJzdHJNZWFsVGh1bWIiLCJzdHJNZWFsIiwicmVjaXBlQ291bnRlciIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRyZW4iLCJsaWtlQnRuIiwiYnRuIiwicGFyc2VJbnQiLCJpdGVtSWQiLCJpdGVtX2lkIiwibGlrZXNObyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImdldENvbW1ldHNGcm9tQXBpIiwidXJsIiwicmVzIiwiZGlzcGxheUNvbW1lbnQiLCJjb21tZW50TGlzdCIsImlubmVySFRNTCIsIkFycmF5IiwiaXNBcnJheSIsImNvbW1lbnQiLCJjcmVhdGlvbl9kYXRlIiwidXNlcm5hbWUiLCJwb3N0Q29tbWVudE9uQXBpIiwib2siLCJzdWJtaXRDb21tZW50IiwiZm9ybSIsImNvbW1lbnRUZXh0IiwiZWxlbWVudHMiLCJuYW1lIiwidmFsdWUiLCJyZXNldCIsIml0ZW1zIiwic3RyQXJlYSIsInN0ckNhdGVnb3J5Iiwic3RySW5ncmVkaWVudDEiLCJzdHJJbmdyZWRpZW50MiIsInN0ckluZ3JlZGllbnQzIiwic3RySW5ncmVkaWVudDQiLCJzdHJJbmdyZWRpZW50NSIsInN0clRhZ3MiLCJzdHJNZWFzdXJlMSIsInN0ck1lYXN1cmUyIiwic3RyTWVhc3VyZTMiLCJzdHJNZWFzdXJlNCIsInN0ck1lYXN1cmU1Iiwic3RyWW91dHViZSIsInN0clNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=