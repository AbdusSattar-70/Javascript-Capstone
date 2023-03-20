const displayMeals = async (data) => {
  const mealsContainer = document.querySelector(".meals-container");
  data.meals.forEach((meal) => {
    const item = document.createElement("div");
    mealsContainer.appendChild(item)
    item.className = "meal";
    const itemImg = document.createElement('img')
    itemImg.src = meal.strMealThumb
    item.appendChild(itemImg)
    
  });
};
