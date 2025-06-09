const question1El = document.querySelector('.question1');
const answer1El = document.querySelector('.answer1');
const question2El = document.querySelector('.question2');
const answer2El = document.querySelector('.answer2');
const question3El = document.querySelector('.question3');
const answer3El = document.querySelector('.answer3');
const question4El = document.querySelector('.question4');
const answer4El = document.querySelector('.answer4');
const questionEls = document.querySelectorAll('.question');

questionEls.forEach((questionEl) => {
  const answerEl = questionEl.nextElementSibling;
  const iconEl = questionEl.querySelector('.icon');

  questionEl.addEventListener('click', () => {
    const isVisible = answerEl.classList.toggle('visible');
    iconEl.src = isVisible
      ? '/assets/images/icon-minus.svg'
      : '/assets/images/icon-plus.svg';
  });
});

