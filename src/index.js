import './style.css';
import Logo from './asset/logo.png';
import heart from './asset/heart.png';
import displayMeals from './modules/displayMeals.js';
import fetchMeals from './modules/fetchMeals.js';
import { ApiUrlSearch, involvmentApiUrlLikes } from './modules/API.js';
import displayLikes from './modules/displayLikes.js';
import likeItem from './modules/likeItem.js';

const logo = document.querySelector('#logo');
logo.src = Logo;

window.onload = async () => {
  fetchMeals(ApiUrlSearch);
  const data = await fetchMeals(ApiUrlSearch);
  const likes = await fetchMeals(involvmentApiUrlLikes);
  displayMeals(data, heart);
  displayLikes(likes);
  likeItem(likes, involvmentApiUrlLikes);
};
