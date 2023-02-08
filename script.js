'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const open = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', open);
  showModal[i].addEventListener('click', () => {
    console.log(showModal[i].textContent);
  });
}

closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);
