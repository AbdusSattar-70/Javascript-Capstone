import './style.css';
import Logo from './asset/logo.png';
import heart from './asset/heart.png';
import displayMeals from './modules/displayMeals.js';
import fetchMeals from './modules/fetchMeals.js';
import { ApiUrlSearch } from './modules/API.js';

const logo = document.querySelector('#logo');
logo.src = Logo;

window.onload = async () => {
  fetchMeals(ApiUrlSearch);
  const data = await fetchMeals(ApiUrlSearch);
  displayMeals(data, heart);
};