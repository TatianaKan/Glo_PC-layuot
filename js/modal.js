const modal = () => {
  const modalBtn = document.querySelector('.modal__button');
  const modal = document.querySelector('.modal');
  const modalBtnCourse = document.querySelector('.course__button');
  // const modalClose = document.querySelector('.modal__close');

  const modaInner = modal.querySelector('.modal__inner')
  modaInner.style.position = 'relative';


  const addCloseBtn = () => {
    const closeBtn = document.createElement('div');

    closeBtn.classList.add('close-modal');
    closeBtn.innerHTML = '&times';
    closeBtn.style.position = 'absolute';
    closeBtn.style.right = '10px';
    closeBtn.style.top = '10px';
    closeBtn.style.fontSize = '30px';
    closeBtn.style.cursor = 'pointer';

    modaInner.append(closeBtn);

    closeBtn.addEventListener('click', () => {
      modal.style.display = '';
    });
  }

  modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    addCloseBtn();
  });

  modalBtnCourse.addEventListener('click', () => {
    modal.style.display = 'flex';
    addCloseBtn();
  });

  // modalClose.addEventListener('click', ()=> {
  //   modal.style.display = '';
  // })

  modal.addEventListener('click', (event) => {
    event.preventDefault();

    const modalContent = event.target.closest('.modal__inner');
    if (!modalContent) {
      modal.style.display = '';
    }
  })
};

modal();