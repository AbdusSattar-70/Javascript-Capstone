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
      _modules_closePopUp_js__WEBPACK_IMPORTED_MODULE_4__.commentContainer.style.display = 'block';
      _modules_closePopUp_js__WEBPACK_IMPORTED_MODULE_4__.mainDisplayContainer.style.filter = 'blur(10px)';
      _modules_closePopUp_js__WEBPACK_IMPORTED_MODULE_4__.header.style.filter = 'blur(10px)';
      _modules_closePopUp_js__WEBPACK_IMPORTED_MODULE_4__.footer.style.filter = 'blur(10px)';
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
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "mainDisplayContainer": () => (/* binding */ mainDisplayContainer)
/* harmony export */ });
const commentContainer = document.querySelector('.popUpComments');
const mainDisplayContainer = document.querySelector('.mainDisplayContainer');
const header = document.querySelector('.header');
const footer = document.querySelector('footer');
const closePopUp = () => {
  const crossBtn = document.querySelector('.cross');
  crossBtn.addEventListener('click', e => {
    e.preventDefault();
    commentContainer.style.display = 'none';
    header.style.filter = 'blur(0)';
    mainDisplayContainer.style.filter = 'blur(0)';
    footer.style.filter = 'blur(0)';
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
           <p><strong>Category: </strong>${data.strCategory}</p>
          <div class="Ingredients">
            <p class="Ingredients1"><strong>Ingredients: </strong>${data.strIngredient1},  ${data.strIngredient2},  ${data.strIngredient3},  ${data.strIngredient4},  ${data.strIngredient5}</p>
          </div>
          <div class= "description">
           <div class="descrip1">
            <p> <strong>Measurement:</strong> ${data.strMeasure1}, ${data.strMeasure2}, ${data.strMeasure3}, ${data.strMeasure4}</p>
            <p> <strong> Source: </strong><a href="${data.strSource}" target="_blank">Check Here</a></p>
           </div>
           <div class="descrip1">
           <p><strong> Video : </strong><a href="${data.strYoutube}" target="_blank">See Live</a></p>
           <p><strong>Area: </strong>${data.strArea}</p>
           </div>
           </div>
          <div class="commentSection">
          <h3>Comments(<span id="commentCounts-${id}">0</span>)</h3>
          <ul class="commentList-${id} commentUL">

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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  background: rgb(34, 193, 195);\r\n  background:\r\n    linear-gradient(\r\n      0deg,\r\n      rgba(34, 193, 195, 1) 0%,\r\n      rgba(253, 187, 45, 1) 100%\r\n    );\r\n}\r\n\r\nh1 {\r\n  font-family: \"Wonderbar\", sans-serif;\r\n  text-align: center;\r\n  font-size: 5vw;\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nform button {\r\n  height: 2rem;\r\n  width: 45%;\r\n  color: rgb(10, 10, 10);\r\n  font-size: 1.2rem;\r\n  border-radius: 5%;\r\n  background-color: rgb(249, 250, 248);\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  margin: 1vh;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 2rem;\r\n  background-color: rgba(8, 250, 225, 0.117);\r\n  background-blend-mode: hard-light;\r\n}\r\n\r\n.headerUl {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.headerUl li {\r\n  font-size: 2rem;\r\n  color: rgb(123, 8, 253);\r\n}\r\n\r\n.commentUL li {\r\n  background-color: aliceblue;\r\n}\r\n\r\n.headerUl li:hover,\r\n.headerUl li:focus {\r\n  color: red;\r\n  background-color: aliceblue;\r\n}\r\n\r\n#logo {\r\n  width: 3%;\r\n  height: 3%;\r\n}\r\n\r\n.meals-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(3, 25vw);\r\n  gap: 3vw;\r\n}\r\n\r\n.meal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  border-radius: 6px;\r\n  align-items: center;\r\n  row-gap: 0.8rem;\r\n  height: 60vh;\r\n}\r\n\r\n#mealImg {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  padding: 0.2rem;\r\n}\r\n\r\n#mealTitle {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#like {\r\n  width: 20px;\r\n}\r\n\r\n#likesCounter {\r\n  font-size: 1rem;\r\n}\r\n\r\n#mealTitle,\r\n.likeBtn {\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.likeBtn {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.poUpCountainer {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  z-index: 1;\r\n  align-items: center;\r\n  background: rgb(63, 94, 251);\r\n  background:\r\n    radial-gradient(\r\n      circle,\r\n      rgba(63, 94, 251, 1) 0%,\r\n      rgba(252, 70, 107, 1) 100%\r\n    );\r\n  padding: 2rem;\r\n  width: 90vw;\r\n  left: 5%;\r\n  top: 5%;\r\n  height: 90vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n.cross {\r\n  width: 3rem;\r\n  position: absolute;\r\n  right: 0;\r\n  margin-right: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.cross:hover {\r\n  background-color: aliceblue;\r\n  box-shadow: 5px 5px 5px rgba(140, 137, 134, 0.462);\r\n}\r\n\r\n.imgContainer {\r\n  width: 50%;\r\n}\r\n\r\n.commentImg {\r\n  width: 100%;\r\n  border-radius: 3%;\r\n  transition-duration: 2s;\r\n}\r\n\r\n.commentImg:hover {\r\n  transform: scale(1.1);\r\n  transition-duration: 3s;\r\n  border: 1px solid red;\r\n}\r\n\r\n.description {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.descrip1 p,\r\n.descrip2 p {\r\n  margin: 0.5rem;\r\n}\r\n\r\n.description a {\r\n  font-weight: 700;\r\n  color: rgb(127, 251, 4);\r\n}\r\n\r\n.commentSection {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\nh2,\r\nh3,\r\nh4 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.commentUL {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\ninput {\r\n  height: 2rem;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .meals-container {\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: repeat(2, 35vw);\r\n    gap: 5vw;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,6BAA6B;EAC7B;;;;;KAKG;AACL;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,0CAA0C;EAC1C,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;EAEE,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sCAAsC;EACtC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,4BAA4B;EAC5B;;;;;KAKG;EACH,aAAa;EACb,WAAW;EACX,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,kDAAkD;AACpD;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;;;EAGE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,sCAAsC;IACtC,QAAQ;EACV;AACF","sourcesContent":["@import url(\"https://fonts.cdnfonts.com/css/wonderbar\");\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  background: rgb(34, 193, 195);\r\n  background:\r\n    linear-gradient(\r\n      0deg,\r\n      rgba(34, 193, 195, 1) 0%,\r\n      rgba(253, 187, 45, 1) 100%\r\n    );\r\n}\r\n\r\nh1 {\r\n  font-family: \"Wonderbar\", sans-serif;\r\n  text-align: center;\r\n  font-size: 5vw;\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nform button {\r\n  height: 2rem;\r\n  width: 45%;\r\n  color: rgb(10, 10, 10);\r\n  font-size: 1.2rem;\r\n  border-radius: 5%;\r\n  background-color: rgb(249, 250, 248);\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  margin: 1vh;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 2rem;\r\n  background-color: rgba(8, 250, 225, 0.117);\r\n  background-blend-mode: hard-light;\r\n}\r\n\r\n.headerUl {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.headerUl li {\r\n  font-size: 2rem;\r\n  color: rgb(123, 8, 253);\r\n}\r\n\r\n.commentUL li {\r\n  background-color: aliceblue;\r\n}\r\n\r\n.headerUl li:hover,\r\n.headerUl li:focus {\r\n  color: red;\r\n  background-color: aliceblue;\r\n}\r\n\r\n#logo {\r\n  width: 3%;\r\n  height: 3%;\r\n}\r\n\r\n.meals-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(3, 25vw);\r\n  gap: 3vw;\r\n}\r\n\r\n.meal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  border-radius: 6px;\r\n  align-items: center;\r\n  row-gap: 0.8rem;\r\n  height: 60vh;\r\n}\r\n\r\n#mealImg {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  padding: 0.2rem;\r\n}\r\n\r\n#mealTitle {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#like {\r\n  width: 20px;\r\n}\r\n\r\n#likesCounter {\r\n  font-size: 1rem;\r\n}\r\n\r\n#mealTitle,\r\n.likeBtn {\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.likeBtn {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.poUpCountainer {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  z-index: 1;\r\n  align-items: center;\r\n  background: rgb(63, 94, 251);\r\n  background:\r\n    radial-gradient(\r\n      circle,\r\n      rgba(63, 94, 251, 1) 0%,\r\n      rgba(252, 70, 107, 1) 100%\r\n    );\r\n  padding: 2rem;\r\n  width: 90vw;\r\n  left: 5%;\r\n  top: 5%;\r\n  height: 90vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n.cross {\r\n  width: 3rem;\r\n  position: absolute;\r\n  right: 0;\r\n  margin-right: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.cross:hover {\r\n  background-color: aliceblue;\r\n  box-shadow: 5px 5px 5px rgba(140, 137, 134, 0.462);\r\n}\r\n\r\n.imgContainer {\r\n  width: 50%;\r\n}\r\n\r\n.commentImg {\r\n  width: 100%;\r\n  border-radius: 3%;\r\n  transition-duration: 2s;\r\n}\r\n\r\n.commentImg:hover {\r\n  transform: scale(1.1);\r\n  transition-duration: 3s;\r\n  border: 1px solid red;\r\n}\r\n\r\n.description {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.descrip1 p,\r\n.descrip2 p {\r\n  margin: 0.5rem;\r\n}\r\n\r\n.description a {\r\n  font-weight: 700;\r\n  color: rgb(127, 251, 4);\r\n}\r\n\r\n.commentSection {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\nh2,\r\nh3,\r\nh4 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.commentUL {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\ninput {\r\n  height: 2rem;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .meals-container {\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: repeat(2, 35vw);\r\n    gap: 5vw;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Nsb3NlUG9wVXAuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5TGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNZWFscy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZmV0Y2hNZWFscy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0L2xvZ28ucG5nJztcbmltcG9ydCBkaXNwbGF5TWVhbHMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlNZWFscy5qcyc7XG5pbXBvcnQgY3JlYXRlUG9wVXAgZnJvbSAnLi9tb2R1bGVzL3BvcFVwLmpzJztcbmltcG9ydCB7XG4gIGhlYWRlciwgbWFpbkRpc3BsYXlDb250YWluZXIsIGNvbW1lbnRDb250YWluZXIsIGZvb3Rlcixcbn0gZnJvbSAnLi9tb2R1bGVzL2Nsb3NlUG9wVXAuanMnO1xuaW1wb3J0IGZldGNoTWVhbHMgZnJvbSAnLi9tb2R1bGVzL2ZldGNoTWVhbHMuanMnO1xuaW1wb3J0IHsgZGlzcGxheUxpa2VzIH0gZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlMaWtlcy5qcyc7XG5pbXBvcnQgbGlrZUl0ZW0gZnJvbSAnLi9tb2R1bGVzL2xpa2VJdGVtLmpzJztcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvJyk7XG5sb2dvLnNyYyA9IExvZ287XG5cbmRpc3BsYXlNZWFscygpO1xuZGlzcGxheUxpa2VzKCk7XG5saWtlSXRlbSgpO1xuY29uc3QgZGlzcGxheVBvcFVwID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hNZWFscygpO1xuICBjb25zdCBjb21tZW50QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50Jyk7XG4gIGNvbW1lbnRCdG5zLmZvckVhY2goKGNvbW1lbnRCdG4sIGluZGV4KSA9PiB7XG4gICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBtZWFsID0gZGF0YS5tZWFsc1tpbmRleF07XG4gICAgICBhd2FpdCBjcmVhdGVQb3BVcChtZWFsLCBpbmRleCk7XG4gICAgICBjb21tZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgbWFpbkRpc3BsYXlDb250YWluZXIuc3R5bGUuZmlsdGVyID0gJ2JsdXIoMTBweCknO1xuICAgICAgaGVhZGVyLnN0eWxlLmZpbHRlciA9ICdibHVyKDEwcHgpJztcbiAgICAgIGZvb3Rlci5zdHlsZS5maWx0ZXIgPSAnYmx1cigxMHB4KSc7XG4gICAgfSk7XG4gIH0pO1xufTtcbmRpc3BsYXlQb3BVcCgpO1xuIiwiY29uc3QgQXBpVXJsU2VhcmNoID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP2Y9ZSc7XHJcbmNvbnN0IGludm9sdm1lbnRBcGlVcmxMaWtlcyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9IRmRNUk04amEyNndJYzBYRWhHVS9saWtlcy8nO1xyXG5jb25zdCBpbnZvbHZtZW50QXBpVXJsQ29tbWVudHMgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSEZkTVJNOGphMjZ3SWMwWEVoR1UvY29tbWVudHMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBBcGlVcmxTZWFyY2gsIGludm9sdm1lbnRBcGlVcmxMaWtlcywgaW52b2x2bWVudEFwaVVybENvbW1lbnRzLFxyXG59OyIsImNvbnN0IGNvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBDb21tZW50cycpO1xuY29uc3QgbWFpbkRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkRpc3BsYXlDb250YWluZXInKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuY29uc3QgY2xvc2VQb3BVcCA9ICgpID0+IHtcbiAgY29uc3QgY3Jvc3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Jvc3MnKTtcbiAgY3Jvc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb21tZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaGVhZGVyLnN0eWxlLmZpbHRlciA9ICdibHVyKDApJztcbiAgICBtYWluRGlzcGxheUNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSAnYmx1cigwKSc7XG4gICAgZm9vdGVyLnN0eWxlLmZpbHRlciA9ICdibHVyKDApJztcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBjbG9zZVBvcFVwLCBjb21tZW50Q29udGFpbmVyLCBtYWluRGlzcGxheUNvbnRhaW5lciwgaGVhZGVyLCBmb290ZXIsXG59OyIsImNvbnN0IGNvbW1lbnRDb3VudGVyID0gYXN5bmMgKGNvbW1lbnRzLCBpZCkgPT4ge1xuICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbW1lbnRDb3VudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY29tbWVudENvdW50cy0ke2lkfWApO1xuICBjb21tZW50Q291bnRzLmlubmVyVGV4dCA9IGNvbW1lbnRzLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRDb3VudGVyOyIsImltcG9ydCB7IGludm9sdm1lbnRBcGlVcmxMaWtlcyB9IGZyb20gJy4vQVBJLmpzJztcclxuXHJcbmNvbnN0IGZldGNoTGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbnZvbHZtZW50QXBpVXJsTGlrZXMpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBsaWtlcyA9IGF3YWl0IGZldGNoTGlrZXMoKTtcclxuICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGlrZXNDb3VudGVyJyk7XHJcbiAgbGlrZUNvdW50LmZvckVhY2goKHNwYW4sIGkpID0+IHtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBsaWtlc1tpXS5saWtlcztcclxuICB9KTtcclxufTtcclxuZXhwb3J0IHsgZmV0Y2hMaWtlcywgZGlzcGxheUxpa2VzIH07IiwiaW1wb3J0IGZldGNoTWVhbHMgZnJvbSAnLi9mZXRjaE1lYWxzLmpzJztcclxuaW1wb3J0IGhlYXJ0IGZyb20gJy4uL2Fzc2V0L2hlYXJ0LnBuZyc7XHJcblxyXG5jb25zdCBkaXNwbGF5TWVhbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoTWVhbHMoKTtcclxuICBjb25zdCBtZWFsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFscy1jb250YWluZXInKTtcclxuICBkYXRhLm1lYWxzLmZvckVhY2goKG1lYWwpID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgaXRlbS5jbGFzc05hbWUgPSAnbWVhbCc7XHJcbiAgICBpdGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxpbWcgaWQ9XCJtZWFsSW1nXCIgc3JjPSR7bWVhbC5zdHJNZWFsVGh1bWJ9PlxyXG4gICAgPHA+PHNwYW4gaWQ9XCJtZWFsVGl0bGVcIj4ke21lYWwuc3RyTWVhbH08L3NwYW4+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJsaWtlQnRuXCI+PGltZyBzcmM9XCIke2hlYXJ0fVwiIGFsdD1cImhlYXJ0XCIgaWQ9XCJsaWtlXCI+PC9idXR0b24+PHNwYW4gaWQ9XCJsaWtlc0NvdW50ZXJcIj48L3NwYW4+TGlrZXM8L3A+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvbW1lbnRcIj5Db21tZW50PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlc2VydmVcIj5SZXNlcnZhdGlvbjwvYnV0dG9uPmApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lYWxzOyIsImltcG9ydCB7IEFwaVVybFNlYXJjaCB9IGZyb20gJy4vQVBJLmpzJztcclxuXHJcbmNvbnN0IGZldGNoTWVhbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBcGlVcmxTZWFyY2gpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoTWVhbHM7XHJcbiIsImltcG9ydCB7IGludm9sdm1lbnRBcGlVcmxMaWtlcyB9IGZyb20gJy4vQVBJLmpzJztcclxuaW1wb3J0IHsgZmV0Y2hMaWtlcyB9IGZyb20gJy4vZGlzcGxheUxpa2VzLmpzJztcclxuXHJcbmNvbnN0IGxpa2VJdGVtID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZmV0Y2hMaWtlcygpO1xyXG4gIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZUJ0bicpO1xyXG4gIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaWtlc0NvdW50ZXInKTtcclxuICBsaWtlQnRuLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsaWtlQ291bnRbaV0udGV4dENvbnRlbnQgPSBwYXJzZUludChsaWtlQ291bnRbaV0udGV4dENvbnRlbnQsIDEwKSArIDE7XHJcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IGxpa2VzW2ldLml0ZW1faWQ7XHJcbiAgICAgIGNvbnN0IGxpa2VzTm8gPSBsaWtlQ291bnRbaV0udGV4dENvbnRlbnQ7XHJcbiAgICAgIGZldGNoKGludm9sdm1lbnRBcGlVcmxMaWtlcywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcclxuICAgICAgICAgIGxpa2VzOiBsaWtlc05vLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbGlrZUl0ZW07IiwiaW1wb3J0IHsgaW52b2x2bWVudEFwaVVybENvbW1lbnRzIH0gZnJvbSAnLi9BUEkuanMnO1xuaW1wb3J0IGNyb3NzIGZyb20gJy4uL2Fzc2V0L2Nyb3NzLnBuZyc7XG5pbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9jb21tZW50Q291bnRlci5qcyc7XG5pbXBvcnQgeyBjb21tZW50Q29udGFpbmVyLCBjbG9zZVBvcFVwIH0gZnJvbSAnLi9jbG9zZVBvcFVwLmpzJztcblxuY29uc3QgZ2V0Q29tbWV0c0Zyb21BcGkgPSBhc3luYyAodXJsLCBpZCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9P2l0ZW1faWQ9JHtpZH1gKTtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gY29tbWVudHM7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1ldHNGcm9tQXBpKGludm9sdm1lbnRBcGlVcmxDb21tZW50cywgaWQpO1xuICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21tZW50TGlzdC0ke2lkfWApO1xuICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoY29tbWVudHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gOiR7Y29tbWVudC51c2VybmFtZX0gOiAke2NvbW1lbnQuY29tbWVudH08L2xpPiBgO1xuICB9KTtcbiAgYXdhaXQgY29tbWVudENvdW50ZXIoY29tbWVudHMsIGlkKTtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50T25BcGkgPSBhc3luYyAodXJsLCBpZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSksXG4gIH0pO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudChpZCk7XG4gIH1cbn07XG5cbmNvbnN0IHN1Ym1pdENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JtLSR7aWR9YCk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgY29tbWVudFRleHQgfSA9IGZvcm0uZWxlbWVudHM7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lLnZhbHVlO1xuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50VGV4dC52YWx1ZTtcbiAgICBhd2FpdCBwb3N0Q29tbWVudE9uQXBpKGludm9sdm1lbnRBcGlVcmxDb21tZW50cywgaWQsIG5hbWUsIGNvbW1lbnQpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudChpZCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlUG9wVXAgPSBhc3luYyAoZGF0YSwgaW5kZXgpID0+IHtcbiAgY29tbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaWQgPSBpbmRleCArIDE7XG4gIGNvbnN0IGl0ZW1zID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInBvVXBDb3VudGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImNyb3NzXCIgc3JjPVwiJHtjcm9zc31cIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzID1cImltZ0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJjb21tZW50SW1nXCIgc3JjPVwiJHtkYXRhLnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7ZGF0YS5zdHJNZWFsfTwvaDI+XG4gICAgICAgICAgIDxwPjxzdHJvbmc+Q2F0ZWdvcnk6IDwvc3Ryb25nPiR7ZGF0YS5zdHJDYXRlZ29yeX08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIkluZ3JlZGllbnRzXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIkluZ3JlZGllbnRzMVwiPjxzdHJvbmc+SW5ncmVkaWVudHM6IDwvc3Ryb25nPiR7ZGF0YS5zdHJJbmdyZWRpZW50MX0sICAke2RhdGEuc3RySW5ncmVkaWVudDJ9LCAgJHtkYXRhLnN0ckluZ3JlZGllbnQzfSwgICR7ZGF0YS5zdHJJbmdyZWRpZW50NH0sICAke2RhdGEuc3RySW5ncmVkaWVudDV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9IFwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXAxXCI+XG4gICAgICAgICAgICA8cD4gPHN0cm9uZz5NZWFzdXJlbWVudDo8L3N0cm9uZz4gJHtkYXRhLnN0ck1lYXN1cmUxfSwgJHtkYXRhLnN0ck1lYXN1cmUyfSwgJHtkYXRhLnN0ck1lYXN1cmUzfSwgJHtkYXRhLnN0ck1lYXN1cmU0fTwvcD5cbiAgICAgICAgICAgIDxwPiA8c3Ryb25nPiBTb3VyY2U6IDwvc3Ryb25nPjxhIGhyZWY9XCIke2RhdGEuc3RyU291cmNlfVwiIHRhcmdldD1cIl9ibGFua1wiPkNoZWNrIEhlcmU8L2E+PC9wPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXAxXCI+XG4gICAgICAgICAgIDxwPjxzdHJvbmc+IFZpZGVvIDogPC9zdHJvbmc+PGEgaHJlZj1cIiR7ZGF0YS5zdHJZb3V0dWJlfVwiIHRhcmdldD1cIl9ibGFua1wiPlNlZSBMaXZlPC9hPjwvcD5cbiAgICAgICAgICAgPHA+PHN0cm9uZz5BcmVhOiA8L3N0cm9uZz4ke2RhdGEuc3RyQXJlYX08L3A+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFNlY3Rpb25cIj5cbiAgICAgICAgICA8aDM+Q29tbWVudHMoPHNwYW4gaWQ9XCJjb21tZW50Q291bnRzLSR7aWR9XCI+MDwvc3Bhbj4pPC9oMz5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50TGlzdC0ke2lkfSBjb21tZW50VUxcIj5cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGg0PkFkZCBhIGNvbW1lbnQ8L2g0PlxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS0ke2lkfVwiIGFjdGlvbj1cInN1Ym1pdFwiID5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxNVwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRcIiBuYW1lPVwiY29tbWVudFRleHRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PmA7XG4gIGNvbW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gaXRlbXM7XG4gIGNsb3NlUG9wVXAoKTtcbiAgYXdhaXQgc3VibWl0Q29tbWVudChpZCk7XG4gIGF3YWl0IGRpc3BsYXlDb21tZW50KGlkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBvcFVwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL3dvbmRlcmJhcik7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMTkzLCAxOTUpO1xcclxcbiAgYmFja2dyb3VuZDpcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIDBkZWcsXFxyXFxuICAgICAgcmdiYSgzNCwgMTkzLCAxOTUsIDEpIDAlLFxcclxcbiAgICAgIHJnYmEoMjUzLCAxODcsIDQ1LCAxKSAxMDAlXFxyXFxuICAgICk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29uZGVyYmFyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjUwLCAyNDgpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxdmg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDI1MCwgMjI1LCAwLjExNyk7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHJnYigxMjMsIDgsIDI1Myk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VUwgbGkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVWwgbGk6aG92ZXIsXFxyXFxuLmhlYWRlclVsIGxpOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAzJTtcXHJcXG4gIGhlaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi5tZWFscy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjV2dyk7XFxyXFxuICBnYXA6IDN2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAwLjhyZW07XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxufVxcclxcblxcclxcbiNtZWFsSW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LFxcclxcbi5yZXNlcnZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lYWxUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xpa2Uge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsaWtlc0NvdW50ZXIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbFRpdGxlLFxcclxcbi5saWtlQnRuIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvVXBDb3VudGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNjMsIDk0LCAyNTEpO1xcclxcbiAgYmFja2dyb3VuZDpcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgIGNpcmNsZSxcXHJcXG4gICAgICByZ2JhKDYzLCA5NCwgMjUxLCAxKSAwJSxcXHJcXG4gICAgICByZ2JhKDI1MiwgNzAsIDEwNywgMSkgMTAwJVxcclxcbiAgICApO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgbGVmdDogNSU7XFxyXFxuICB0b3A6IDUlO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNyb3NzIHtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jcm9zczpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDE0MCwgMTM3LCAxMzQsIDAuNDYyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDNzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwMSBwLFxcclxcbi5kZXNjcmlwMiBwIHtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gYSB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IHJnYigxMjcsIDI1MSwgNCk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50U2VjdGlvbiB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRVTCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzNXZ3KTtcXHJcXG4gICAgZ2FwOiA1dnc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wi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cy5jZG5mb250cy5jb20vY3NzL3dvbmRlcmJhclxcXCIpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMTkzLCAxOTUpO1xcclxcbiAgYmFja2dyb3VuZDpcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIDBkZWcsXFxyXFxuICAgICAgcmdiYSgzNCwgMTkzLCAxOTUsIDEpIDAlLFxcclxcbiAgICAgIHJnYmEoMjUzLCAxODcsIDQ1LCAxKSAxMDAlXFxyXFxuICAgICk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29uZGVyYmFyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjUwLCAyNDgpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxdmg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDI1MCwgMjI1LCAwLjExNyk7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHJnYigxMjMsIDgsIDI1Myk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VUwgbGkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVWwgbGk6aG92ZXIsXFxyXFxuLmhlYWRlclVsIGxpOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAzJTtcXHJcXG4gIGhlaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi5tZWFscy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjV2dyk7XFxyXFxuICBnYXA6IDN2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAwLjhyZW07XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxufVxcclxcblxcclxcbiNtZWFsSW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LFxcclxcbi5yZXNlcnZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lYWxUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xpa2Uge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsaWtlc0NvdW50ZXIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbFRpdGxlLFxcclxcbi5saWtlQnRuIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvVXBDb3VudGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNjMsIDk0LCAyNTEpO1xcclxcbiAgYmFja2dyb3VuZDpcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgIGNpcmNsZSxcXHJcXG4gICAgICByZ2JhKDYzLCA5NCwgMjUxLCAxKSAwJSxcXHJcXG4gICAgICByZ2JhKDI1MiwgNzAsIDEwNywgMSkgMTAwJVxcclxcbiAgICApO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgbGVmdDogNSU7XFxyXFxuICB0b3A6IDUlO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNyb3NzIHtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jcm9zczpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDE0MCwgMTM3LCAxMzQsIDAuNDYyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDNzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwMSBwLFxcclxcbi5kZXNjcmlwMiBwIHtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gYSB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IHJnYigxMjcsIDI1MSwgNCk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50U2VjdGlvbiB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRVTCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzNXZ3KTtcXHJcXG4gICAgZ2FwOiA1dnc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiTG9nbyIsImRpc3BsYXlNZWFscyIsImNyZWF0ZVBvcFVwIiwiaGVhZGVyIiwibWFpbkRpc3BsYXlDb250YWluZXIiLCJjb21tZW50Q29udGFpbmVyIiwiZm9vdGVyIiwiZmV0Y2hNZWFscyIsImRpc3BsYXlMaWtlcyIsImxpa2VJdGVtIiwibG9nbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNyYyIsImRpc3BsYXlQb3BVcCIsImRhdGEiLCJjb21tZW50QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY29tbWVudEJ0biIsImluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lYWwiLCJtZWFscyIsInN0eWxlIiwiZGlzcGxheSIsImZpbHRlciIsIkFwaVVybFNlYXJjaCIsImludm9sdm1lbnRBcGlVcmxMaWtlcyIsImludm9sdm1lbnRBcGlVcmxDb21tZW50cyIsImNsb3NlUG9wVXAiLCJjcm9zc0J0biIsImNvbW1lbnRDb3VudGVyIiwiY29tbWVudHMiLCJpZCIsInVuZGVmaW5lZCIsImNvbW1lbnRDb3VudHMiLCJpbm5lclRleHQiLCJsZW5ndGgiLCJmZXRjaExpa2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJsaWtlcyIsImxpa2VDb3VudCIsInNwYW4iLCJpIiwidGV4dENvbnRlbnQiLCJoZWFydCIsIm1lYWxzQ29udGFpbmVyIiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50SFRNTCIsInN0ck1lYWxUaHVtYiIsInN0ck1lYWwiLCJsaWtlQnRuIiwiYnRuIiwicGFyc2VJbnQiLCJpdGVtSWQiLCJpdGVtX2lkIiwibGlrZXNObyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNyb3NzIiwiZ2V0Q29tbWV0c0Zyb21BcGkiLCJ1cmwiLCJyZXMiLCJkaXNwbGF5Q29tbWVudCIsImNvbW1lbnRMaXN0IiwiaW5uZXJIVE1MIiwiQXJyYXkiLCJpc0FycmF5IiwiY29tbWVudCIsImNyZWF0aW9uX2RhdGUiLCJ1c2VybmFtZSIsInBvc3RDb21tZW50T25BcGkiLCJvayIsInN1Ym1pdENvbW1lbnQiLCJmb3JtIiwiY29tbWVudFRleHQiLCJlbGVtZW50cyIsIm5hbWUiLCJ2YWx1ZSIsInJlc2V0IiwiaXRlbXMiLCJzdHJDYXRlZ29yeSIsInN0ckluZ3JlZGllbnQxIiwic3RySW5ncmVkaWVudDIiLCJzdHJJbmdyZWRpZW50MyIsInN0ckluZ3JlZGllbnQ0Iiwic3RySW5ncmVkaWVudDUiLCJzdHJNZWFzdXJlMSIsInN0ck1lYXN1cmUyIiwic3RyTWVhc3VyZTMiLCJzdHJNZWFzdXJlNCIsInN0clNvdXJjZSIsInN0cllvdXR1YmUiLCJzdHJBcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==