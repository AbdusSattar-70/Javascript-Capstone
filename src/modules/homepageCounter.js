import fetchMeals from './fetchMeals.js';

const homepageCounter = async () => {
  await fetchMeals();
  const mealsContainer = document.querySelector('.meals-container');
  const recipeCounter = document.getElementById('recipesCounter');
  recipeCounter.textContent = mealsContainer.children.length;
};

export default homepageCounter;
