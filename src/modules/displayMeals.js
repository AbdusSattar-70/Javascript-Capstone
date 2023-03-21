const displayMeals = async (data,heart) => {
  const mealsContainer = document.querySelector(".meals-container");
  data.meals.forEach((meal) => {
    const item = document.createElement("div");
    mealsContainer.appendChild(item)
    item.className = "meal";
    item.insertAdjacentHTML('beforeend',`<img id="mealImg" src=${meal.strMealThumb}>
    <p><span id="mealTitle">${meal.strMeal}</span><button type="button" class="likeBtn"><img src="${heart}" alt="heart" id="like"></button></p>
    <button type="button" class="comment">Comment</button>
    <button type="button" class="reserve">Reservation</button>`)
  });
};
export default displayMeals