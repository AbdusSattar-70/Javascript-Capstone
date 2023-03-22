import { involvmentApiUrlLikes } from './API.js';

const fetchLikes = async () => {
  const response = await fetch(involvmentApiUrlLikes);
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
export {fetchLikes,displayLikes};