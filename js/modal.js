const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const modalBtnCourse = document.querySelector('.course__button');
const modalClose = document.querySelector('.modal__close');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

modalBtnCourse.addEventListener('click', () => {
  modal.style.display = 'flex';
});

modalClose.addEventListener('click', ()=> {
  modal.style.display = '';
})

modal.addEventListener('click', (event) => {
  event.preventDefault();

  const modalContent = event.target.closest('.modal__inner');
  if (!modalContent) {
    modal.style.display = '';
  }
})