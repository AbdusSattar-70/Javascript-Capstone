const commentCounter = async (comments, id) => {
  if (id === undefined) {
    return;
  }

  const commentCounts = document.querySelector(`#commentCounts-${id}`);
  commentCounts.innerText = comments.length;
};

export default commentCounter;