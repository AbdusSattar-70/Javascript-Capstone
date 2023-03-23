const commentContainer = document.querySelector('.popUpComments');
const closePopUp = () => {
  const crossBtn = document.querySelector('.cross');
  crossBtn.addEventListener('click', (e) => {
    e.preventDefault();
    commentContainer.style.display = 'none';
  });
};

export { closePopUp, commentContainer };