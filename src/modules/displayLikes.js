const displayLikes = async (likes) => {
  const likeCount = document.querySelectorAll('#likesCounter');
  likeCount.forEach((span, i) => {
    span.textContent = likes[i].likes;
  });
};
export default displayLikes;