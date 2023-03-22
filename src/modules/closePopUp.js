const commentContainer = document.querySelector('.popUpComments');
const mainDisplayContainer = document.querySelector('.mainDisplayContainer');
const header = document.querySelector('.header');
const footer = document.querySelector('footer');
const closePopUp = () => {
  const crossBtn = document.querySelector('.cross');
  crossBtn.addEventListener('click', (e) => {
    e.preventDefault();
    commentContainer.style.display = 'none';
    header.style.filter = 'blur(0)';
    mainDisplayContainer.style.filter = 'blur(0)';
    footer.style.filter = 'blur(0)';
  });
};

export {
  closePopUp, commentContainer, mainDisplayContainer, header, footer,
};