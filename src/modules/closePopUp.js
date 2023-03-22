const commentContainer = document.querySelector('.popUpComments');
const mainDisplayContainer = document.querySelector('.mainDisplayContainer');
const header = document.querySelector('.header');
const closePopUp = () => {
  const crossBtn = document.querySelector('.cross');
  crossBtn.addEventListener('click', (e) => {
    e.preventDefault();
    commentContainer.style.display = 'none';
    header.style.display = 'flex';
    mainDisplayContainer.style.display = 'block';
  });
};

export {
  closePopUp, commentContainer, mainDisplayContainer, header,
};