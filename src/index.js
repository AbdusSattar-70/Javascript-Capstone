import './style.css';
import Logo from './asset/logo.png';
import displayMeals from './modules/displayMeals.js';
import {
  header, mainDisplayContainer, commentContainer,
  createPopUp,
} from './modules/popUp.js';
import fetchMeals from './modules/fetchMeals.js';

const logo = document.querySelector('#logo');
logo.src = Logo;

displayMeals();
const displayPopUp = async () => {
  const data = await fetchMeals();
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((commentBtn, index) => {
    commentBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const meal = data.meals[index];
      await createPopUp(meal, index);
      commentContainer.style.display = 'block';
      mainDisplayContainer.style.display = 'none';
      header.style.display = 'none';
    });
  });
};
displayPopUp();
