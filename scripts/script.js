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
