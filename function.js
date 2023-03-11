/* eslint-disable linebreak-style */

const docBod = document.querySelector('body');
const activityAnswer = document.querySelector('span');
const yesBored = document.getElementById('start');
const noBored = document.getElementById('nope');
const noBoredMsg = document.getElementById('type-select-no');
const typeBtns = document.getElementById('select-btns');
const reset = document.getElementById('reset');
const activitySection = document.getElementById('activity');
const typeTitle = document.getElementById('type-select');


yesBored.addEventListener('click', (v) => {
  v.target = yesBored.classList.add('button-onpress-yes');
  v.target = typeBtns.classList.remove('hidden');
  v.target = typeTitle.classList.remove('hidden');
  v.target = noBored.classList.add('fade-out');
  v.target = typeBtns.classList.add('fade-in');
  v.target = typeTitle.classList.add('fade-in');
  v.target = reset.classList.add('fade-in');
  v.target = noBored.classList.add('fade-out');
});

noBored.addEventListener('click', (b) => {
  b.target = noBored.classList.add('button-onpress-no');
  b.target = yesBored.classList.add('fade-out');
  b.target = noBoredMsg.classList.add('fade-in')
  b.target = noBoredMsg.classList.remove('hidden');
  b.target = reset.classList.remove('hidden');
  b.target = reset.classList.add('fade-in');
})

function getActivity() {
  fetch(`https://www.boredapi.com/api/activity/?type=${userChoice}`)
    .then((response) => response.json())
    .then((activityResponse) => {
      activityAnswer.innerHTML = activityResponse.activity;
    });
}
typeBtns.addEventListener('click', (e) => {
  e.target = activitySection.classList.add('fade-in');
  // e.target = typeBtns.classList.add('button-onpress-yes');
  userChoice = e.target.value;
  getActivity(e.target);
  e.target = activitySection.classList.remove('hidden');
  e.target = activitySection.classList.add('fade-in');
  e.target = reset.classList.remove('hidden');
  e.target.classList.remove('hidden');
});