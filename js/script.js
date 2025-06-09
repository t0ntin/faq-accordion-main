const question1El = document.querySelector('.question1');
const answer1El = document.querySelector('.answer1');
const question2El = document.querySelector('.question2');
const answer2El = document.querySelector('.answer2');
const question3El = document.querySelector('.question3');
const answer3El = document.querySelector('.answer3');
const question4El = document.querySelector('.question4');
const answer4El = document.querySelector('.answer4');
const iconEl = document.querySelector('.icon');


 question1El.addEventListener('click', () => {
  const isVisible = answer1El.classList.toggle('visible')
  iconEl.src = isVisible 
    ? '/assets/images/icon-minus.svg' 
    : '/assets/images/icon-plus.svg';
 });

 question2El.addEventListener('click', () => {
  answer2El.classList.toggle('visible');
 });
 question3El.addEventListener('click', () => {
  answer3El.classList.toggle('visible');
 });
 question4El.addEventListener('click', () => {
  answer4El.classList.toggle('visible');
 });

