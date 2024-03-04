document.querySelectorAll('.accord_question_header').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    let plus = el.querySelector('.plus');
    if (plus.classList.length == 2) {
      let toogle = plus.classList;
      for (let index = 0; index < toogle.length; index++) {
        if (toogle[index] == 'rotate90') {
          plus.classList.remove('rotate90');
        }
      }
    } else {
      plus.classList.add('rotate90');
    }
    if (content.classList.length == 2) {
      let toogle = content.classList;
      for (let index = 0; index < toogle.length; index++) {
        if (toogle[index] == 'max_height') {
          content.classList.remove('max_height');
        }
      }
    } else {
      content.classList.add('max_height');
    }
  });
});

const btns = document.querySelectorAll('.header_btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const auth = document.querySelectorAll('.svap');
const reg = document.querySelectorAll('.svap2');
const content = document.querySelectorAll('.modal_content_reg');
const contentreg = document.querySelectorAll('.modal_content_auth');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

auth.forEach((el) => {
  el.addEventListener('click', (e) => {
    content.forEach((el) => {
      el.classList.add('display_none');
    });
    contentreg.forEach((el) => {
      el.classList.remove('display_none');
    });
  });
});

reg.forEach((el) => {
  el.addEventListener('click', (e) => {
    contentreg.forEach((el) => {
      el.classList.add('display_none');
    });
    content.forEach((el) => {
      el.classList.remove('display_none');
    });
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      el.classList.remove('display_none');
    });
  }
});
