import { involvmentApiUrlComments } from './API.js';
import cross from '../asset/cross.png';
import commentCounter from './commentCounter.js';
import { commentContainer, closePopUp } from './closePopUp.js';

const getCommetsFromApi = async (url, id) => {
  const res = await fetch(`${url}?item_id=${id}`);
  const comments = await res.json();
  return comments;
};

const displayComment = async (id) => {
  const comments = await getCommetsFromApi(involvmentApiUrlComments, id);
  const commentList = document.querySelector(`.commentList-${id}`);
  commentList.innerHTML = '';

  if (!Array.isArray(comments)) {
    return;
  }
  comments.forEach((comment) => {
    commentList.innerHTML += `<li>${comment.creation_date} :${comment.username} : ${comment.comment}</li> `;
  });
  await commentCounter(comments, id);
};

const postCommentOnApi = async (url, id, username, comment) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id, username, comment }),
  });
  if (response.ok) {
    await displayComment(id);
  }
};

const submitComment = async (id) => {
  const form = document.querySelector(`.form-${id}`);
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { username, commentText } = form.elements;
    const name = username.value;
    const comment = commentText.value;
    await postCommentOnApi(involvmentApiUrlComments, id, name, comment);
    form.reset();
    await displayComment(id);
  });
};

const createPopUp = async (data, index) => {
  commentContainer.innerHTML = '';
  const id = index + 1;
  const items = `
      <div class="poUpCountainer">
          <img class="cross" src="${cross}" alt="">
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
  commentContainer.innerHTML = items;
  closePopUp();
  await submitComment(id);
  await displayComment(id);
};

export default createPopUp;
