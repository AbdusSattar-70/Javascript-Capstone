const commentCounter = async (comments, id) => {
  const commentCounts = document.querySelector(`#commentCounts-${id}`);
  commentCounts.innerText = comments.length;
};

export default commentCounter;