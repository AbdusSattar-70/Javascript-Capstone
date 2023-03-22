import './style.css';
import Logo from './asset/logo.png';
import displayMeals from './modules/displayMeals.js';
import createPopUp from './modules/popUp.js';
import {
  header, mainDisplayContainer, commentContainer, footer,
} from './modules/closePopUp.js';
import fetchMeals from './modules/fetchMeals.js';
import { displayLikes } from './modules/displayLikes.js';
import likeItem from './modules/likeItem.js';

const logo = document.querySelector('#logo');
logo.src = Logo;

displayMeals();
displayLikes();
likeItem();
const displayPopUp = async () => {
  const data = await fetchMeals();
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((commentBtn, index) => {
    commentBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const meal = data.meals[index];
      await createPopUp(meal, index);
      commentContainer.style.display = 'block';
      mainDisplayContainer.style.filter = 'blur(10px)';
      header.style.filter = 'blur(10px)';
      footer.style.filter = 'blur(10px)';
    });
  });
};
displayPopUp();
